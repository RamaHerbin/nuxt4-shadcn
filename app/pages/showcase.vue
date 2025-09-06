

<template>
  <div class="min-h-screen bg-background text-foreground">
    <!-- Hero Section -->
    <div class="relative grid h-[500px] place-content-center">
      <div class="z-10 text-center pointer-events-none" >
        <h1 class="text-5xl font-bold tracking-tighter text-black dark:text-white mb-4 pointer-events-none">
          Inspira UI Showcase
        </h1>
        <p class="text-xl text-muted-foreground mb-8">
          Beautiful, modern UI components for Vue 3 and Nuxt 4
        </p>
        <div class="flex gap-4 justify-center pointer-events-auto">
          <Button size="lg" @click="scrollToComponents">
            Explore Components
          </Button>
          <Button variant="outline" size="lg" @click="toggleDark">
            {{ isDark ? 'Light' : 'Dark' }} Mode
          </Button>
        </div>
      </div>
      <InteractiveGridPattern
        :class="[
          '[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]',
          'inset-0 h-[200%] skew-y-12',
        ]"
      />
    </div>

    <!-- Navigation Header -->
    <header class="sticky top-0 z-10 backdrop-blur bg-background/70 border-b">
      <div class="max-w-7xl mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <h2 class="text-xl font-semibold tracking-tight">Component Library</h2>
            <div class="flex gap-2">
              <button
                v-for="category in categories"
                :key="category.id"
                @click="selectedCategory = category.id"
                :class="[
                  'px-3 py-1 text-sm rounded-full transition-colors',
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                ]"
              >
                {{ category.name }}
              </button>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <input
              v-model="query"
              type="search"
              placeholder="Search components…"
              class="px-3 py-2 text-sm rounded-lg border bg-transparent w-64"
            />
            <div class="text-sm text-muted-foreground">
              {{ filteredComponents.length }} components
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Components Grid -->
    <main class="max-w-7xl mx-auto px-4 py-8" ref="componentsSection">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <template v-for="component in filteredComponents" :key="component.name">
          <article class="rounded-2xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <header class="px-4 py-3 border-b flex items-center justify-between">
              <h3 class="font-medium">{{ component.name }}</h3>
              <a
                v-if="component.docs"
                :href="component.docs"
                target="_blank"
                rel="noreferrer"
                class="text-xs underline text-muted-foreground hover:text-foreground"
              >
                docs
              </a>
            </header>
            <div class="p-4 bg-card">
              <Suspense>
                <template #default>
                  <component :is="component.demo" class="w-full" />
                </template>
                <template #fallback>
                  <div class="h-24 grid place-items-center text-sm text-muted-foreground">
                    Loading…
                  </div>
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
// Import
import AnimatedListDemo from '~/components/showcase/animated-list-demo.vue'
import BentoGridDemo from '~/components/showcase/bento-grid-demo.vue'
import DockDemo from '~/components/showcase/dock-demo.vue'
import MarqueeDemo from '~/components/showcase/marquee-demo.vue'
import TimelineDemo from '~/components/showcase/timeline-demo.vue'
import ConfettiDemo from '~/components/showcase/confetti-demo.vue'
import TextEffectsDemo from '~/components/showcase/text-effects-demo.vue'
import TextAnimationsDemo from '~/components/showcase/text-animations-demo.vue'
import ButtonVariantsDemo from '~/components/showcase/button-variants-demo.vue'
import InputComponentsDemo from '~/components/showcase/input-components-demo.vue'
import LoadingAnimationsDemo from '~/components/showcase/loading-animations-demo.vue'

// Import des nouvelles démos
import BlackHoleBackgroundDemo from '~/components/showcase/black-hole-background-demo.vue'
import AuroraBackgroundDemo from '~/components/showcase/aurora-background-demo.vue'
import TextGenerateEffectDemo from '~/components/showcase/text-generate-effect-demo.vue'
import FlipWordsDemo from '~/components/showcase/flip-words-demo.vue'
import SparklesDemo from '~/components/showcase/sparkles-demo.vue'


// État réactif
const query = ref('')
const isDark = ref(false)
const selectedCategory = ref('all')
const componentsSection = ref<HTMLElement>()

// Catégories de composants
const categories = [
  { id: 'all', name: 'All' },
  { id: 'backgrounds', name: 'Backgrounds' },
  { id: 'animations', name: 'Animations' },
  { id: 'buttons', name: 'Buttons' },
  { id: 'text', name: 'Text Effects' },
  { id: 'layout', name: 'Layout' },
  { id: 'interactive', name: 'Interactive' },
  { id: 'cards', name: 'Cards' },
]

// Configuration
const components = [
  // Backgrounds
  { name: 'Black Hole Background', category: 'backgrounds', demo: BlackHoleBackgroundDemo, docs: 'https://inspira-ui.com/docs/components/backgrounds/black-hole-background' },
  { name: 'Aurora Background', category: 'backgrounds', demo: AuroraBackgroundDemo, docs: 'https://inspira-ui.com/docs/components/backgrounds/aurora-background' },
  { name: 'Sparkles', category: 'backgrounds', demo: SparklesDemo, docs: 'https://inspira-ui.com/docs/components/backgrounds/sparkles' },

  // Animations
  { name: 'Animated List', category: 'animations', demo: AnimatedListDemo, docs: 'https://inspira-ui.com/docs/components/animated-list' },
  { name: 'Confetti', category: 'animations', demo: ConfettiDemo, docs: 'https://inspira-ui.com/docs/components/confetti' },
  
  // // Buttons
  { name: 'Button Variants', category: 'buttons', demo: ButtonVariantsDemo, docs: 'https://inspira-ui.com/docs/components/button' },
  
  // // Text Effects
  { name: 'Text Generate Effect', category: 'text', demo: TextGenerateEffectDemo, docs: 'https://inspira-ui.com/docs/components/text-generate-effect' },
  { name: 'Flip Words', category: 'text', demo: FlipWordsDemo, docs: 'https://inspira-ui.com/docs/components/flip-words' },
  { name: 'Text Effects', category: 'text', demo: TextEffectsDemo, docs: 'https://inspira-ui.com/docs/components/text-effects' },
  { name: 'Text Animations', category: 'text', demo: TextAnimationsDemo, docs: 'https://inspira-ui.com/docs/components/text-animations' },
  
  // // Layout
  { name: 'Bento Grid', category: 'layout', demo: BentoGridDemo, docs: 'https://inspira-ui.com/docs/components/bento-grid' },
  { name: 'Dock', category: 'layout', demo: DockDemo, docs: 'https://inspira-ui.com/docs/components/dock' },
  { name: 'Marquee', category: 'layout', demo: MarqueeDemo, docs: 'https://inspira-ui.com/docs/components/marquee' },
  { name: 'Timeline', category: 'layout', demo: TimelineDemo, docs: 'https://inspira-ui.com/docs/components/timeline' },
  
  // // Interactive
  { name: 'Input Components', category: 'interactive', demo: InputComponentsDemo, docs: 'https://inspira-ui.com/docs/components/input' },
  { name: 'Loading Animations', category: 'interactive', demo: LoadingAnimationsDemo, docs: 'https://inspira-ui.com/docs/components/loading-animations' },
  
]

const filteredComponents = computed(() => {
  let filtered = components
  
  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter(comp => comp.category === selectedCategory.value)
  }
  
  if (query.value.trim()) {
    const searchTerm = query.value.toLowerCase()
    filtered = filtered.filter(comp => 
      comp.name.toLowerCase().includes(searchTerm) ||
      comp.category.toLowerCase().includes(searchTerm)
    )
  }
  
  return filtered
})

const toggleDark = () => {
  isDark.value = !isDark.value
  const html = document.documentElement
  html.classList.toggle('dark', isDark.value)
}

const scrollToComponents = () => {
  componentsSection.value?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  // Start in light/dark based on current html
  isDark.value = document.documentElement.classList.contains('dark')
})
</script>
  

