<template>
    <div class="min-h-screen bg-background text-foreground">
      <header class="sticky top-0 z-10 backdrop-blur bg-background/70 border-b">
        <div class="max-w-7xl mx-auto px-4 py-4 flex items-center gap-3">
          <h1 class="text-2xl font-semibold tracking-tight">Inspira UI – Showcase</h1>
          <div class="ml-auto flex items-center gap-2">
            <input
              v-model="query"
              type="search"
              placeholder="Search components…"
              class="px-3 py-2 text-sm rounded-lg border bg-transparent w-56"
            />
            <button class="px-3 py-2 text-sm rounded-lg border" @click="toggleDark">{{ isDark ? 'Light' : 'Dark' }}</button>
          </div>
        </div>
      </header>
  
      <main class="max-w-7xl mx-auto px-4 py-8">
        <p class="text-sm text-muted-foreground mb-6">This page renders a geometric grid of <strong>all</strong> (or as many as possible) Inspira UI components using Vue dynamic components. Extend the registry below to add more demos.</p>
  
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <template v-for="item in filtered" :key="item.name">
            <article class="rounded-2xl border shadow-sm overflow-hidden">
              <header class="px-4 py-3 border-b flex items-center justify-between">
                <h2 class="font-medium">{{ item.name }}</h2>
                <a
                  v-if="item.docs"
                  :href="item.docs"
                  target="_blank"
                  rel="noreferrer"
                  class="text-xs underline text-muted-foreground hover:text-foreground"
                >docs</a>
              </header>
              <div class="p-4 bg-card">
                <Suspense>
                  <template #default>
                    <component :is="item.cmp" v-bind="item.props" class="w-full" >
                      <template v-if="item.slots?.default" #default>
                        <span v-html="item.slots.default" />
                      </template>
                      <template v-if="item.slots?.content" #content>
                        <span v-html="item.slots.content" />
                      </template>
                      <template v-if="item.slots?.trigger" #trigger>
                        <span v-html="item.slots.trigger" />
                      </template>
                    </component>
                  </template>
                  <template #fallback>
                    <div class="h-24 grid place-items-center text-sm text-muted-foreground">Loading…</div>
                  </template>
                </Suspense>
              </div>
            </article>
          </template>
        </div>
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  /**
   * How it works
   * - We keep a registry of Inspira UI demos (name + import path or tag).
   * - Each entry resolves to an async component using one of the following strategies:
   *   1) Direct importPath (preferred) → import('~/components/ui/button.vue')
   *   2) Guess common paths by kebab-casing the name
   *   3) Fallback to a simple stub that warns if not found
   * - You can quickly add new items by duplicating an object in `items` below.
   */
  
  type Slots = { [key: string]: string }
  
  type ShowcaseItem = {
    name: string
    importPath?: string
    docs?: string
    /**
     * Optional tagName if a component is globally registered (Nuxt auto-import) and you know its tag
     * e.g. 'UiButton'. If provided, we use `resolveComponent(tagName)` via `<component :is>`.
     */
    tagName?: string
    props?: Record<string, any>
    slots?: Slots
    cmp?: any // filled at runtime with defineAsyncComponent
  }
  
  const query = ref('')
  const isDark = ref(false)
  
  // Toggle html.dark class (works with Tailwind theming setups from Inspira UI docs)
  const toggleDark = () => {
    isDark.value = !isDark.value
    const html = document.documentElement
    html.classList.toggle('dark', isDark.value)
  }
  
  /** Utility: kebab-case */
  function kebab(s: string) {
    return s
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/\s+/g, '-')
      .toLowerCase()
  }
  
  /** Try to load component from a list of likely paths */
  function makeAsyncResolver(item: ShowcaseItem) {
    const candidates: string[] = []
    if (item.importPath) candidates.push(item.importPath)
    const base = kebab(item.name)
    // Common locations (adjust if your project structure differs)
    candidates.push(
      `~/components/ui/${base}.vue`,
      `~/components/${base}.vue`,
      `~/components/${base}/index.vue`,
      `~/components/${base}/${base}.vue`
    )
  
    return defineAsyncComponent(async () => {
      for (const p of candidates) {
        try {
          const mod = await import(/* @vite-ignore */ p)
          return mod.default ?? mod
        } catch (_) {
          // try next
        }
      }
      // Fallback stub if nothing matched
      return {
        name: `Missing${item.name}`,
        template: `<div class=\"text-sm text-red-600\">Component \"${item.name}\" not found. Try setting <code>importPath</code> or adjust guesses.</div>`
      }
    })
  }
  
  /**
   * Minimal demo content. Replace/extend according to what you installed from Inspira UI.
   * Tip: if a component requires complex props/slots, add a small wrapper in ~/components/showcase/* and import it via `importPath`.
   */
  const items = ref<ShowcaseItem[]>([
    { name: 'Button', docs: 'https://inspira-ui.com/docs/components/button', props: { variant: 'primary' }, slots: { default: 'Click me' } },
    { name: 'Card', docs: 'https://inspira-ui.com/docs/components/card', slots: { default: '<div class="p-4">Card content</div>' } },
    { name: 'Badge', docs: 'https://inspira-ui.com/docs/components/badge', slots: { default: 'Badge' } },
    { name: 'Input', docs: 'https://inspira-ui.com/docs/components/input', props: { placeholder: 'Type here…' } },
    { name: 'Textarea', docs: 'https://inspira-ui.com/docs/components/textarea', props: { rows: 3, placeholder: 'Your message…' } },
    { name: 'Checkbox', docs: 'https://inspira-ui.com/docs/components/checkbox', props: { modelValue: true } },
    { name: 'Switch', docs: 'https://inspira-ui.com/docs/components/switch', props: { modelValue: true } },
    { name: 'Progress', docs: 'https://inspira-ui.com/docs/components/progress', props: { value: 42 } },
    { name: 'Tooltip', docs: 'https://inspira-ui.com/docs/components/tooltip', slots: { default: 'Hover me' } },
    { name: 'Accordion', docs: 'https://inspira-ui.com/docs/components/accordion', importPath: '~/components/showcase/accordion-demo.vue' },
    { name: 'Tabs', docs: 'https://inspira-ui.com/docs/components/tabs', importPath: '~/components/showcase/tabs-demo.vue' },
    { name: 'Dialog', docs: 'https://inspira-ui.com/docs/components/dialog', importPath: '~/components/showcase/dialog-demo.vue' },
    { name: 'Dropdown Menu', docs: 'https://inspira-ui.com/docs/components/dropdown-menu', importPath: '~/components/showcase/dropdown-demo.vue' },
    { name: 'Timeline', docs: 'https://inspira-ui.com/docs/components/timeline' },
    { name: 'Marquee', docs: 'https://inspira-ui.com/docs/components/marquee', props: { speed: 50 }, slots: { default: '🟣 🟢 🔵 🟡' } },
    { name: 'Interactive Grid Pattern', docs: 'https://inspira-ui.com/docs/components/interactive-grid-pattern', importPath: '~/components/showcase/interactive-grid-demo.vue' },
    { name: 'Orbit', docs: 'https://inspira-ui.com/docs/components/orbit', importPath: '~/components/showcase/orbit-demo.vue' },
  ])
  
  // Attach async resolvers
  items.value.forEach((it) => (it.cmp = makeAsyncResolver(it)))
  
  const filtered = computed(() => {
    const q = query.value.trim().toLowerCase()
    if (!q) return items.value
    return items.value.filter((i) => i.name.toLowerCase().includes(q))
  })
  
  onMounted(() => {
    // Start in light/dark based on current html
    isDark.value = document.documentElement.classList.contains('dark')
  })
  </script>
  
  <style scoped>
  /* Optional: subtle card bg when not provided by your theme */
  .bg-card { background: var(--card, color-mix(in oklab, canvas, black 3%)); }
  .text-muted-foreground { color: color-mix(in oklab, currentColor, transparent 45%); }
  </style>
  
  <!--
  Setup notes
  ==========
  1) Ensure Tailwind + Inspira UI CSS variables are properly configured (see Inspira UI docs).
  2) Create small demo wrappers for components that need more than trivial props/slots:
     - ~/components/showcase/accordion-demo.vue
     - ~/components/showcase/tabs-demo.vue
     - ~/components/showcase/dialog-demo.vue
     - ~/components/showcase/dropdown-demo.vue
     - ~/components/showcase/interactive-grid-demo.vue
     - ~/components/showcase/orbit-demo.vue
     Each of those wrappers can import the real component(s) and feed example data.
  3) To add more components to the grid, just append to `items`.
  4) If your Inspira components live elsewhere, set `importPath` directly per item.
  -->
  