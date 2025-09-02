
<template>
  <div class="w-full h-48 relative overflow-hidden rounded-lg">
    <AuroraBackground class="absolute inset-0" />
    <div class="relative z-10 flex items-center justify-center h-full">
      <div class="text-white text-center">
        <h3 class="text-xl font-bold mb-2">Aurora Background</h3>
        <p class="text-sm opacity-80">Effet d'arrière-plan animé</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AuroraBackground } from '~/components/ui/aurora-background'
</script>
