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
        :words="['Creative', 'Modern', 'Elegant', 'Functional']"
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
        text="Sparkles Effect"
        class="text-xl font-semibold"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
