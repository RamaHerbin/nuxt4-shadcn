<template>
  <div class="w-full space-y-4">
    <div class="space-y-2">
      <label class="text-sm font-medium">Standard Input</label>
      <IInput placeholder="Type something..." />
    </div>
    
    <div class="space-y-2">
      <label class="text-sm font-medium">Vanishing Input</label>
      <VanishingInput placeholder="Disappears on focus..." />
    </div>
    
    <div class="space-y-2">
      <label class="text-sm font-medium">Input with custom style</label>
      <div class="relative">
        <IInput 
          placeholder="Search..." 
          class="pl-10"
        />
        <div class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          🔍
        </div>
      </div>
    </div>
    
    <div class="space-y-2">
      <label class="text-sm font-medium">Input with validation</label>
      <IInput 
        placeholder="Valid email..." 
        type="email"
        class="border-green-500 focus:border-green-600"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
