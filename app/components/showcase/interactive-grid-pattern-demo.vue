<template>
  <div class="relative h-96 w-full">
    <InteractiveGridPattern
      :class="[
        '[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]',
        'inset-0 h-[200%] skew-y-12',
      ]"
    />
    <div class="relative z-10 flex flex-col items-center justify-center text-center h-full">
      <h3 class="text-2xl font-bold mb-2">Interactive Grid Pattern</h3>
      <p class="text-muted-foreground text-sm">Hover to see the interactive effect</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { InteractiveGridPattern } from '~/components/ui/interactive-grid-pattern'
</script>
