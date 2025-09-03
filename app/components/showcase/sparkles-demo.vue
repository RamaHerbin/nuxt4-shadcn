<template>
  <div class="relative h-96 w-full flex items-center justify-center">
    <div class="relative">
      <Sparkles
        id="tsparticlesfullpage"
        background="transparent"
        min-size="0.6"
        max-size="1.4"
        particle-density="100"
        class="w-full h-96"
        particle-color="#FFFFFF"
      />
      <div class="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h3 class="text-2xl font-bold text-white mb-2">Sparkles Effect</h3>
        <p class="text-white/80 text-sm">Beautiful animated sparkles</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Sparkles } from '~/components/ui/sparkles'
</script>
