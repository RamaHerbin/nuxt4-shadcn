<template>
  <div class="flex h-96 w-full items-center justify-center gap-4">
    <GlowBorder
      className="h-32 w-32 rounded-xl"
      duration="2000"
      border-width="2px"
      color="#ff0000"
    >
      <div class="flex h-full w-full items-center justify-center rounded-lg bg-background">
        <span class="text-sm font-medium">Glow Border</span>
      </div>
    </GlowBorder>
    <GlowBorder
      className="h-32 w-32 rounded-xl"
      duration="2000"
      border-width="2px"
      color="#00ff00"
    >
      <div class="flex h-full w-full items-center justify-center rounded-lg bg-background">
        <span class="text-sm font-medium">Animated</span>
      </div>
    </GlowBorder>
  </div>
</template>

<script setup lang="ts">
import { GlowBorder } from '~/components/ui/glow-border'
</script>
