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
   * Complete showcase of all Inspira UI components available in the project.
   * Components with complex props/slots use dedicated demo wrappers in ~/components/showcase/*.
   */
  const items = ref<ShowcaseItem[]>([
    // Basic Components
    { name: 'Button', docs: 'https://inspira-ui.com/docs/components/button', props: { variant: 'primary' }, slots: { default: 'Click me' } },
    { name: 'Input', docs: 'https://inspira-ui.com/docs/components/input', props: { placeholder: 'Type here…' } },
    
    // Animation Components
    { name: 'Animated List', docs: 'https://inspira-ui.com/docs/components/animated-list', importPath: '~/components/showcase/animated-list-demo.vue' },
    { name: 'Animated Beam', docs: 'https://inspira-ui.com/docs/components/animated-beam' },
    { name: 'Animated Circular Progress Bar', docs: 'https://inspira-ui.com/docs/components/animated-circular-progressbar' },
    { name: 'Animated Testimonials', docs: 'https://inspira-ui.com/docs/components/animated-testimonials' },
    { name: 'Animated Tooltip', docs: 'https://inspira-ui.com/docs/components/animated-tooltip' },
    
    // Layout Components
    { name: 'Bento Grid', docs: 'https://inspira-ui.com/docs/components/bento-grid', importPath: '~/components/showcase/bento-grid-demo.vue' },
    { name: 'Dock', docs: 'https://inspira-ui.com/docs/components/dock', importPath: '~/components/showcase/dock-demo.vue' },
    { name: 'Marquee', docs: 'https://inspira-ui.com/docs/components/marquee', importPath: '~/components/showcase/marquee-demo.vue' },
    { name: 'Timeline', docs: 'https://inspira-ui.com/docs/components/timeline', importPath: '~/components/showcase/timeline-demo.vue' },
    { name: 'Orbit', docs: 'https://inspira-ui.com/docs/components/orbit', importPath: '~/components/showcase/orbit-demo.vue' },
    
    // Interactive Components
    { name: 'Confetti', docs: 'https://inspira-ui.com/docs/components/confetti', importPath: '~/components/showcase/confetti-demo.vue' },
    { name: 'Ripple Button', docs: 'https://inspira-ui.com/docs/components/ripple-button', importPath: '~/components/showcase/ripple-demo.vue' },
    { name: 'Interactive Grid Pattern', docs: 'https://inspira-ui.com/docs/components/interactive-grid-pattern' },
    { name: 'Interactive Hover Button', docs: 'https://inspira-ui.com/docs/components/interactive-hover-button' },
    
    // Text Effects
    { name: 'Text Effects', docs: 'https://inspira-ui.com/docs/components/text-effects', importPath: '~/components/showcase/text-effects-demo.vue' },
    { name: 'Flip Words', docs: 'https://inspira-ui.com/docs/components/flip-words' },
    { name: 'Morphing Text', docs: 'https://inspira-ui.com/docs/components/morphing-text' },
    { name: 'Sparkles Text', docs: 'https://inspira-ui.com/docs/components/sparkles-text' },
    { name: 'Text Generate Effect', docs: 'https://inspira-ui.com/docs/components/text-generate-effect' },
    { name: 'Text Reveal', docs: 'https://inspira-ui.com/docs/components/text-reveal' },
    { name: 'Text Scroll Reveal', docs: 'https://inspira-ui.com/docs/components/text-scroll-reveal' },
    { name: 'Text Reveal Card', docs: 'https://inspira-ui.com/docs/components/text-reveal-card' },
    { name: 'Text Highlight', docs: 'https://inspira-ui.com/docs/components/text-highlight' },
    { name: 'Text Hover Effect', docs: 'https://inspira-ui.com/docs/components/text-hover-effect' },
    { name: 'Text 3D', docs: 'https://inspira-ui.com/docs/components/text-3d' },
    { name: 'Hyper Text', docs: 'https://inspira-ui.com/docs/components/hyper-text' },
    { name: 'Radiant Text', docs: 'https://inspira-ui.com/docs/components/radiant-text' },
    { name: 'Colourful Text', docs: 'https://inspira-ui.com/docs/components/colourful-text' },
    { name: 'Line Shadow Text', docs: 'https://inspira-ui.com/docs/components/line-shadow-text' },
    { name: 'Letter Pullup', docs: 'https://inspira-ui.com/docs/components/letter-pullup' },
    { name: 'Spinning Text', docs: 'https://inspira-ui.com/docs/components/spinning-text' },
    
    // Background Effects
    { name: 'Background Effects', docs: 'https://inspira-ui.com/docs/components/background-effects', importPath: '~/components/showcase/background-effects-demo.vue' },
    { name: 'Aurora Background', docs: 'https://inspira-ui.com/docs/components/aurora-background' },
    { name: 'Black Hole Background', docs: 'https://inspira-ui.com/docs/components/bg-black-hole' },
    { name: 'Falling Stars Background', docs: 'https://inspira-ui.com/docs/components/bg-falling-stars' },
    { name: 'Particle Whirlpool Background', docs: 'https://inspira-ui.com/docs/components/bg-particle-whirlpool' },
    { name: 'Liquid Background', docs: 'https://inspira-ui.com/docs/components/liquid-background' },
    { name: 'Warp Background', docs: 'https://inspira-ui.com/docs/components/warp-background' },
    { name: 'Wavy Background', docs: 'https://inspira-ui.com/docs/components/wavy-background' },
    { name: 'Pattern Background', docs: 'https://inspira-ui.com/docs/components/pattern-background' },
    { name: 'Particles Background', docs: 'https://inspira-ui.com/docs/components/particles-bg' },
    { name: 'Snowfall Background', docs: 'https://inspira-ui.com/docs/components/snowfall-bg' },
    { name: 'Flickering Grid', docs: 'https://inspira-ui.com/docs/components/flickering-grid' },
    { name: 'Infinite Grid', docs: 'https://inspira-ui.com/docs/components/infinite-grid' },
    
    // Card Effects
    { name: 'Card Effects', docs: 'https://inspira-ui.com/docs/components/card-effects', importPath: '~/components/showcase/card-effects-demo.vue' },
    { name: 'Card Spotlight', docs: 'https://inspira-ui.com/docs/components/card-spotlight' },
    { name: 'Glare Card', docs: 'https://inspira-ui.com/docs/components/glare-card' },
    { name: 'Card 3D', docs: 'https://inspira-ui.com/docs/components/card-3d' },
    { name: 'Flip Card', docs: 'https://inspira-ui.com/docs/components/flip-card' },
    { name: 'Direction Aware Hover', docs: 'https://inspira-ui.com/docs/components/direction-aware-hover' },
    { name: 'Glow Border', docs: 'https://inspira-ui.com/docs/components/glow-border' },
    { name: 'Glowing Effect', docs: 'https://inspira-ui.com/docs/components/glowing-effect' },
    { name: 'Neon Border', docs: 'https://inspira-ui.com/docs/components/neon-border' },
    { name: 'Border Beam', docs: 'https://inspira-ui.com/docs/components/border-beam' },
    { name: 'Box Reveal', docs: 'https://inspira-ui.com/docs/components/box-reveal' },
    { name: 'Blur Reveal', docs: 'https://inspira-ui.com/docs/components/blur-reveal' },
    
    // Button Variants
    { name: 'Gradient Button', docs: 'https://inspira-ui.com/docs/components/gradient-button' },
    { name: 'Rainbow Button', docs: 'https://inspira-ui.com/docs/components/rainbow-button' },
    { name: 'Shimmer Button', docs: 'https://inspira-ui.com/docs/components/shimmer-button' },
    
    // UI Components
    { name: 'Balance Slider', docs: 'https://inspira-ui.com/docs/components/balance-slider' },
    { name: 'Color Picker', docs: 'https://inspira-ui.com/docs/components/color-picker' },
    { name: 'Compare', docs: 'https://inspira-ui.com/docs/components/compare' },
    { name: 'File Upload', docs: 'https://inspira-ui.com/docs/components/file-upload' },
    { name: 'File Tree', docs: 'https://inspira-ui.com/docs/components/file-tree' },
    { name: 'Halo Search', docs: 'https://inspira-ui.com/docs/components/halo-search' },
    { name: 'Vanishing Input', docs: 'https://inspira-ui.com/docs/components/vanishing-input' },
    { name: 'Multi Step Loader', docs: 'https://inspira-ui.com/docs/components/multi-step-loader' },
    { name: 'Number Ticker', docs: 'https://inspira-ui.com/docs/components/number-ticker' },
    { name: 'Morphing Tabs', docs: 'https://inspira-ui.com/docs/components/morphing-tabs' },
    { name: 'Spring Calendar', docs: 'https://inspira-ui.com/docs/components/spring-calendar' },
    { name: 'Tetris', docs: 'https://inspira-ui.com/docs/components/tetris' },
    
    // Media Components
    { name: 'Apple Card Carousel', docs: 'https://inspira-ui.com/docs/components/apple-card-carousel' },
    { name: 'Bending Gallery', docs: 'https://inspira-ui.com/docs/components/bending-gallery' },
    { name: 'Expandable Gallery', docs: 'https://inspira-ui.com/docs/components/expandable-gallery' },
    { name: 'Images Slider', docs: 'https://inspira-ui.com/docs/components/images-slider' },
    { name: 'Photo Gallery', docs: 'https://inspira-ui.com/docs/components/photo-gallery' },
    { name: 'Particle Image', docs: 'https://inspira-ui.com/docs/components/particle-image' },
    { name: 'Scratch To Reveal', docs: 'https://inspira-ui.com/docs/components/scratch-to-reveal' },
    { name: 'Video Text', docs: 'https://inspira-ui.com/docs/components/video-text' },
    
    // 3D & Visual Effects
    { name: 'Cosmic Portal', docs: 'https://inspira-ui.com/docs/components/cosmic-portal' },
    { name: 'Globe', docs: 'https://inspira-ui.com/docs/components/globe' },
    { name: 'GitHub Globe', docs: 'https://inspira-ui.com/docs/components/github-globe' },
    { name: 'Icon Cloud', docs: 'https://inspira-ui.com/docs/components/icon-cloud' },
    { name: 'Logo Cloud', docs: 'https://inspira-ui.com/docs/components/logo-cloud' },
    { name: 'Logo Origami', docs: 'https://inspira-ui.com/docs/components/logo-origami' },
    { name: 'World Map', docs: 'https://inspira-ui.com/docs/components/world-map' },
    { name: 'Lamp Effect', docs: 'https://inspira-ui.com/docs/components/lamp-effect' },
    { name: 'Lens', docs: 'https://inspira-ui.com/docs/components/lens' },
    { name: 'Light Speed', docs: 'https://inspira-ui.com/docs/components/light-speed' },
    { name: 'Liquid Glass', docs: 'https://inspira-ui.com/docs/components/liquid-glass' },
    { name: 'Meteors', docs: 'https://inspira-ui.com/docs/components/meteors' },
    { name: 'Sparkles', docs: 'https://inspira-ui.com/docs/components/sparkles' },
    { name: 'Vortex', docs: 'https://inspira-ui.com/docs/components/vortex' },
    { name: 'Tracing Beam', docs: 'https://inspira-ui.com/docs/components/tracing-beam' },
    { name: 'Shader Toy', docs: 'https://inspira-ui.com/docs/components/shader-toy' },
    { name: 'Spline', docs: 'https://inspira-ui.com/docs/components/spline' },
    
    // Container & Layout
    { name: 'Container Scroll', docs: 'https://inspira-ui.com/docs/components/container-scroll' },
    { name: 'Container Text Flip', docs: 'https://inspira-ui.com/docs/components/container-text-flip' },
    { name: 'Scroll Island', docs: 'https://inspira-ui.com/docs/components/scroll-island' },
    
    // Cursor Effects
    { name: 'Fluid Cursor', docs: 'https://inspira-ui.com/docs/components/fluid-cursor' },
    { name: 'Smooth Cursor', docs: 'https://inspira-ui.com/docs/components/smooth-cursor' },
    { name: 'Sleek Line Cursor', docs: 'https://inspira-ui.com/docs/components/sleek-line-cursor' },
    { name: 'Tailed Cursor', docs: 'https://inspira-ui.com/docs/components/tailed-cursor' },
    
    // Focus & Interaction
    { name: 'Focus', docs: 'https://inspira-ui.com/docs/components/focus' },
    { name: 'Link Preview', docs: 'https://inspira-ui.com/docs/components/link-preview' },
    
    // Mockups
    { name: 'iPhone Mockup', docs: 'https://inspira-ui.com/docs/components/iphone-mockup' },
    { name: 'Safari Mockup', docs: 'https://inspira-ui.com/docs/components/safari-mockup' },
    
    // SVG & Masks
    { name: 'SVG Mask', docs: 'https://inspira-ui.com/docs/components/svg-mask' },
    
    // Book Component
    { name: 'Book', docs: 'https://inspira-ui.com/docs/components/book' },
    
    // Animate Grid
    { name: 'Animate Grid', docs: 'https://inspira-ui.com/docs/components/animate-grid' },
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
  