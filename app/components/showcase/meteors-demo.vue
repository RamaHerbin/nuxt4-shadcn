<template>
  <div class="relative h-96 w-full overflow-hidden rounded-lg bg-slate-900">
    <Meteors number="20" />
    <div class="relative z-10 flex flex-col items-center justify-center text-center h-full">
      <h3 class="text-2xl font-bold text-white mb-2">Meteors Effect</h3>
      <p class="text-white/80 text-sm">Animated meteors falling from the sky</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Meteors } from '~/components/ui/meteors'
</script>
