<template>
  <div class="relative h-96 w-full">
    <AuroraBackground class="absolute inset-0 flex items-center justify-center rounded-lg" />
    <div class="relative z-10 flex flex-col items-center justify-center text-center">
      <h3 class="text-2xl font-bold text-white mb-2">Aurora Background</h3>
      <p class="text-white/80 text-sm">Beautiful aurora-like gradient background</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AuroraBackground } from '~/components/ui/aurora-background'
</script>
