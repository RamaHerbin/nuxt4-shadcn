<template>
  <div class="w-full space-y-6">
    <div class="text-center">
      <TextGenerateEffect 
        words="Inspira UI"
        class="text-2xl font-bold"
      />
    </div>
    
    <div class="text-center">
      <FlipWords 
        :words="['Créatif', 'Modern', 'Élégant', 'Usable']"
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
</script>
