<template>
  <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="h-32">
      <CardSpotlight class="h-full">
        <div class="p-4 h-full flex items-center justify-center">
          <div class="text-center">
            <h4 class="font-semibold mb-1">Card Spotlight</h4>
            <p class="text-sm opacity-70">Effet de spot lumineux</p>
          </div>
        </div>
      </CardSpotlight>
    </div>
    
    <div class="h-32">
      <GlareCard class="h-full">
        <div class="p-4 h-full flex items-center justify-center">
          <div class="text-center">
            <h4 class="font-semibold mb-1">Glare Card</h4>
            <p class="text-sm opacity-70">Effet de reflet</p>
          </div>
        </div>
      </GlareCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CardSpotlight } from '~/components/ui/card-spotlight'
import { GlareCard } from '~/components/ui/glare-card'
</script>
