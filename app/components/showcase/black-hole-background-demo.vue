<template>
  <div class="relative h-96 w-full">
    <BlackHoleBackground class="absolute inset-0 flex items-center justify-center rounded-lg" />
    <div class="relative z-10 flex flex-col items-center justify-center text-center">
      <h3 class="text-2xl font-bold text-white mb-2">Black Hole Background</h3>
      <p class="text-white/80 text-sm">A mesmerizing canvas-driven background effect</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BlackHoleBackground } from '~/components/ui/bg-black-hole'
</script>
