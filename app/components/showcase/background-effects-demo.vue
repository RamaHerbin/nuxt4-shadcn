<template>
  <div class="w-full space-y-4">
    <div class="h-32 relative overflow-hidden rounded-lg">
      <AuroraBackground class="absolute inset-0" />
      <div class="relative z-10 flex items-center justify-center h-full">
        <div class="text-white text-center">
          <h4 class="text-lg font-bold mb-1">Aurora Background</h4>
          <p class="text-sm opacity-80">Animated background effect</p>
        </div>
      </div>
    </div>
    
    <div class="h-32 relative overflow-hidden rounded-lg">
      <WavyBackground class="absolute inset-0" />
      <div class="relative z-10 flex items-center justify-center h-full">
        <div class="text-white text-center">
          <h4 class="text-lg font-bold mb-1">Wavy Background</h4>
          <p class="text-sm opacity-80">Wavy background</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AuroraBackground } from '~/components/ui/aurora-background'
import { WavyBackground } from '~/components/ui/wavy-background'
</script>