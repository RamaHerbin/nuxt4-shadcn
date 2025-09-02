// scripts/install-inspira-all.mjs
// Node >=18 (global fetch). Installs all Inspira UI components via shadcn-vue.
import { execSync } from "node:child_process";

const BASE = "https://inspira-ui.com";
const INDEX_URL = `${BASE}/docs/components`;

// Helpers
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchText(url) {
  const res = await fetch(url, { headers: { "User-Agent": "inspira-bulk-installer" } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return await res.text();
}

function unique(arr) {
  return [...new Set(arr)];
}

// 1) Fetch all component page URLs from the index
async function getComponentPages() {
  const html = await fetchText(INDEX_URL);
  // take all links under /docs/components/..
  const hrefs = [...html.matchAll(/href="(\/docs\/components\/[^"#?]+)"/g)].map(m => m[1]);
  // also some legacy links under /components/...
  const hrefs2 = [...html.matchAll(/href="(\/components\/[^"#?]+)"/g)].map(m => m[1]);
  return unique([...hrefs, ...hrefs2]).map(path => `${BASE}${path}`);
}

// 2) For each page, extract registry JSON URLs inside the "Install using CLI" block
function extractRegistryUrls(pageHtml) {
  const urls = [];
  // Examples seen:
  // https://registry.inspira-ui.com/marquee.json
  // https://registry.inspira-ui.com/timeline.json
  // sometimes: https://inspira-ui.com/docs/r/orbit.json
  const re = /https:\/\/(?:registry\.inspira-ui\.com|inspira-ui\.com\/docs\/r)\/[a-z0-9-]+\.json/gi;
  for (const m of pageHtml.matchAll(re)) urls.push(m[0]);
  return unique(urls);
}

async function main() {
  console.log("🔎 Reading component index…");
  const pages = await getComponentPages();
  console.log(`→ ${pages.length} component pages found.`);

  const allRegistry = new Set();
  // 3) Visit each page and collect json URLs
  for (const [i, url] of pages.entries()) {
    try {
      const html = await fetchText(url);
      const urls = extractRegistryUrls(html);
      urls.forEach(u => allRegistry.add(u));
      process.stdout.write(`\r📄 ${i + 1}/${pages.length} pages scanned, ${allRegistry.size} items found…`);
      // be gentle with the site
      await sleep(60);
    } catch (e) {
      console.warn(`\n⚠️ Could not open ${url}: ${e.message}`);
    }
  }
  console.log(`\n✅ ${allRegistry.size} Inspira UI components detected.`);

  // 4) Install each item via shadcn-vue
  for (const url of allRegistry) {
    console.log(`\n⬇️  shadcn-vue add "${url}"`);
    try {
      // -y to auto-accept prompts (if supported)
      execSync(`npx shadcn-vue@latest add "${url}" -y`, { stdio: "inherit" });
    } catch (e) {
      console.warn(`⚠️ Failed for ${url}: ${e.message}`);
    }
  }

  console.log("\n🎉 Done. Check the generated files & any required peer deps.");
}

main().catch(err => {
  console.error("❌ Fatal error:", err);
  process.exit(1);
});
