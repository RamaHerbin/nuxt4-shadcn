<template>
  <div class="w-full space-y-6">
    <div class="text-center">
      <TextGenerateEffect 
        words="Inspira UI Showcase"
        class="text-2xl font-bold"
      />
    </div>
    
    <div class="text-center">
      <FlipWords 
        :words="['Créatif', 'Moderne', 'Élégant', 'Fonctionnel']"
        class="text-xl"
      />
    </div>
    
    <div class="text-center">
      <MorphingText 
        :texts="['Animation', 'Transition', 'Transformation']"
        class="text-lg"
      />
    </div>
    
    <div class="text-center">
      <SparklesText 
        text="Effet Sparkles"
        class="text-xl font-semibold"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { TextGenerateEffect } from '~/components/ui/text-generate-effect'
import { FlipWords } from '~/components/ui/flip-words'
import { MorphingText } from '~/components/ui/morphing-text'
import { SparklesText } from '~/components/ui/sparkles-text'
</script>
