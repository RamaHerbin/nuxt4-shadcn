<template>
  <div>
    <!-- Hero Section -->
    <div class="relative grid h-[500px] place-content-center">
      <p
        class="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white"
      >
        Started Nuxt 4 + TailwindCSS + Inspira UI (+Shadcn)
      </p>

      <InteractiveGridPattern
        :class="[
          '[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]',
          'inset-0 h-[200%] skew-y-12',
        ]"
      />
    </div>

    <!-- Showcase des composants InspiraUI -->
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
        <p class="text-sm text-muted-foreground mb-6">Demonstrations of InspiraUI components available in the project.</p>
    
        <!-- Basic Components -->
        <section class="mb-12">
          <h2 class="text-xl font-semibold mb-6">Basic Components</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="rounded-2xl border shadow-sm overflow-hidden">
              <header class="px-4 py-3 border-b">
                <h3 class="font-medium">Button</h3>
              </header>
              <div class="p-4 bg-card">
                <Button>Click me</Button>
              </div>
            </div>
            <div class="rounded-2xl border shadow-sm overflow-hidden">
              <header class="px-4 py-3 border-b">
                <h3 class="font-medium">Input</h3>
              </header>
              <div class="p-4 bg-card">
                <IInput placeholder="Type here…" />
              </div>
            </div>
          </div>
        </section>

        <!-- Animation Components -->
        <section class="mb-12">
          <h2 class="text-xl font-semibold mb-6">Animation Components</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="rounded-2xl border shadow-sm overflow-hidden">
              <header class="px-4 py-3 border-b">
                <h3 class="font-medium">Animated List</h3>
              </header>
              <div class="p-4 bg-card">
                <component :is="AnimatedListDemo" />
              </div>
            </div>
            <div class="rounded-2xl border shadow-sm overflow-hidden">
              <header class="px-4 py-3 border-b">
                <h3 class="font-medium">Orbit</h3>
              </header>
              <div class="p-4 bg-card">
                <component :is="OrbitDemo" />
              </div>
            </div>
          </div>
        </section>

        <!-- Layout Components -->
        <section class="mb-12">
          <h2 class="text-xl font-semibold mb-6">Layout Components</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="rounded-2xl border shadow-sm overflow-hidden">
              <header class="px-4 py-3 border-b">
                <h3 class="font-medium">Bento Grid</h3>
              </header>
              <div class="p-4 bg-card">
                <component :is="BentoGridDemo" />
              </div>
            </div>
            <div class="rounded-2xl border shadow-sm overflow-hidden">
              <header class="px-4 py-3 border-b">
                <h3 class="font-medium">Dock</h3>
              </header>
              <div class="p-4 bg-card">
                <component :is="DockDemo" />
              </div>
            </div>
            <div class="rounded-2xl border shadow-sm overflow-hidden">
              <header class="px-4 py-3 border-b">
                <h3 class="font-medium">Marquee</h3>
              </header>
              <div class="p-4 bg-card">
                <component :is="MarqueeDemo" />
              </div>
            </div>
            <div class="rounded-2xl border shadow-sm overflow-hidden">
              <header class="px-4 py-3 border-b">
                <h3 class="font-medium">Timeline</h3>
              </header>
              <div class="p-4 bg-card">
                <component :is="TimelineDemo" />
              </div>
            </div>
          </div>
        </section>

        <!-- Interactive Components -->
        <section class="mb-12">
          <h2 class="text-xl font-semibold mb-6">Interactive Components</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="rounded-2xl border shadow-sm overflow-hidden">
              <header class="px-4 py-3 border-b">
                <h3 class="font-medium">Confetti</h3>
              </header>
              <div class="p-4 bg-card">
                <component :is="ConfettiDemo" />
              </div>
            </div>
            <div class="rounded-2xl border shadow-sm overflow-hidden">
              <header class="px-4 py-3 border-b">
                <h3 class="font-medium">Ripple Button</h3>
              </header>
              <div class="p-4 bg-card">
                <component :is="RippleDemo" />
              </div>
            </div>
          </div>
        </section>

        <!-- Text Effects -->
        <section class="mb-12">
          <h2 class="text-xl font-semibold mb-6">Text Effects</h2>
          <div class="grid grid-cols-1 gap-6">
            <div class="rounded-2xl border shadow-sm overflow-hidden">
              <header class="px-4 py-3 border-b">
                <h3 class="font-medium">Text Effects</h3>
              </header>
              <div class="p-4 bg-card">
                <component :is="TextEffectsDemo" />
              </div>
            </div>
          </div>
        </section>

        <!-- Background Effects -->
        <section class="mb-12">
          <h2 class="text-xl font-semibold mb-6">Background Effects</h2>
          <div class="grid grid-cols-1 gap-6">
            <div class="rounded-2xl border shadow-sm overflow-hidden">
              <header class="px-4 py-3 border-b">
                <h3 class="font-medium">Background Effects</h3>
              </header>
              <div class="p-4 bg-card">
                <component :is="BackgroundEffectsDemo" />
              </div>
            </div>
          </div>
        </section>

        <!-- Card Effects -->
        <section class="mb-12">
          <h2 class="text-xl font-semibold mb-6">Card Effects</h2>
          <div class="grid grid-cols-1 gap-6">
            <div class="rounded-2xl border shadow-sm overflow-hidden">
              <header class="px-4 py-3 border-b">
                <h3 class="font-medium">Card Effects</h3>
              </header>
              <div class="p-4 bg-card">
                <component :is="CardEffectsDemo" />
              </div>
            </div>
          </div>
        </section>

        <!-- Text Animations -->
        <section class="mb-12">
          <h2 class="text-xl font-semibold mb-6">Text Animations</h2>
          <div class="grid grid-cols-1 gap-6">
            <div class="rounded-2xl border shadow-sm overflow-hidden">
              <header class="px-4 py-3 border-b">
                <h3 class="font-medium">Text Animations</h3>
              </header>
              <div class="p-4 bg-card">
                <component :is="TextAnimationsDemo" />
              </div>
            </div>
          </div>
        </section>

        <!-- Button Variants -->
        <section class="mb-12">
          <h2 class="text-xl font-semibold mb-6">Button Variants</h2>
          <div class="grid grid-cols-1 gap-6">
            <div class="rounded-2xl border shadow-sm overflow-hidden">
              <header class="px-4 py-3 border-b">
                <h3 class="font-medium">Button Variants</h3>
              </header>
              <div class="p-4 bg-card">
                <component :is="ButtonVariantsDemo" />
              </div>
            </div>
          </div>
        </section>

        <!-- Input Components -->
        <section class="mb-12">
          <h2 class="text-xl font-semibold mb-6">Input Components</h2>
          <div class="grid grid-cols-1 gap-6">
            <div class="rounded-2xl border shadow-sm overflow-hidden">
              <header class="px-4 py-3 border-b">
                <h3 class="font-medium">Input Components</h3>
              </header>
              <div class="p-4 bg-card">
                <component :is="InputComponentsDemo" />
              </div>
            </div>
          </div>
        </section>

        <!-- Loading Animations -->
        <section class="mb-12">
          <h2 class="text-xl font-semibold mb-6">Loading Animations</h2>
          <div class="grid grid-cols-1 gap-6">
            <div class="rounded-2xl border shadow-sm overflow-hidden">
              <header class="px-4 py-3 border-b">
                <h3 class="font-medium">Loading Animations</h3>
              </header>
              <div class="p-4 bg-card">
                <component :is="LoadingAnimationsDemo" />
              </div>
            </div>
          </div>
        </section>

        <!-- 3D Effects -->
        <section class="mb-12">
          <h2 class="text-xl font-semibold mb-6">3D Effects</h2>
          <div class="grid grid-cols-1 gap-6">
            <div class="rounded-2xl border shadow-sm overflow-hidden">
              <header class="px-4 py-3 border-b">
                <h3 class="font-medium">3D Effects</h3>
              </header>
              <div class="p-4 bg-card">
                <component :is="Effects3DDemo" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import 
import AnimatedListDemo from '~/components/showcase/animated-list-demo.vue'
import BentoGridDemo from '~/components/showcase/bento-grid-demo.vue'
import DockDemo from '~/components/showcase/dock-demo.vue'
import MarqueeDemo from '~/components/showcase/marquee-demo.vue'
import TimelineDemo from '~/components/showcase/timeline-demo.vue'
import OrbitDemo from '~/components/showcase/orbit-demo.vue'
import ConfettiDemo from '~/components/showcase/confetti-demo.vue'
import RippleDemo from '~/components/showcase/ripple-demo.vue'
import TextEffectsDemo from '~/components/showcase/text-effects-demo.vue'
import BackgroundEffectsDemo from '~/components/showcase/background-effects-demo.vue'
import CardEffectsDemo from '~/components/showcase/card-effects-demo.vue'
import TextAnimationsDemo from '~/components/showcase/text-animations-demo.vue'
import ButtonVariantsDemo from '~/components/showcase/button-variants-demo.vue'
import InputComponentsDemo from '~/components/showcase/input-components-demo.vue'
import LoadingAnimationsDemo from '~/components/showcase/loading-animations-demo.vue'
import Effects3DDemo from '~/components/showcase/3d-effects-demo.vue'
import { IInput } from '~/components/ui/input'
import { Button } from '~/components/ui/button'

const query = ref('')
const isDark = ref(false)

// Toggle html.dark class (works with Tailwind theming setups from Inspira UI docs)
const toggleDark = () => {
  isDark.value = !isDark.value
  const html = document.documentElement
  html.classList.toggle('dark', isDark.value)
}

onMounted(() => {
  // Start in light/dark based on current html
  isDark.value = document.documentElement.classList.contains('dark')
})
</script>
