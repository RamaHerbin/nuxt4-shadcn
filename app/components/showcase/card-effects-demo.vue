<template>
  <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="h-32">
      <CardSpotlight class="h-full">
        <div class="p-4 h-full flex items-center justify-center">
          <div class="text-center">
            <h4 class="font-semibold mb-1">Card Spotlight</h4>
            <p class="text-sm opacity-70">Light spot effect</p>
          </div>
        </div>
      </CardSpotlight>
    </div>
    
    <div class="h-32">
      <GlareCard class="h-full">
        <div class="p-4 h-full flex items-center justify-center">
          <div class="text-center">
            <h4 class="font-semibold mb-1">Glare Card</h4>
            <p class="text-sm opacity-70">Reflection effect</p>
          </div>
        </div>
      </GlareCard>
    </div>
    
    <div class="h-32">
      <GlowBorder class="h-full">
        <div class="p-4 h-full flex items-center justify-center">
          <div class="text-center">
            <h4 class="font-semibold mb-1">Glow Border</h4>
            <p class="text-sm opacity-70">Glowing border</p>
          </div>
        </div>
      </GlowBorder>
    </div>
    
    <div class="h-32">
      <NeonBorder class="h-full">
        <div class="p-4 h-full flex items-center justify-center">
          <div class="text-center">
            <h4 class="font-semibold mb-1">Neon Border</h4>
            <p class="text-sm opacity-70">Neon border</p>
          </div>
        </div>
      </NeonBorder>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CardSpotlight } from '~/components/ui/card-spotlight'
import { GlareCard } from '~/components/ui/glare-card'
import { GlowBorder } from '~/components/ui/glow-border'
import { NeonBorder } from '~/components/ui/neon-border'
</script>