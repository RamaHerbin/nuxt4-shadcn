<template>
  <div class="flex h-96 w-full items-center justify-center">
    <div class="text-center">
      <FlipWords
        :words="['beautiful', 'modern', 'responsive', 'interactive']"
        class="text-2xl md:text-4xl lg:text-5xl text-black dark:text-white font-bold"
      />
      <p class="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mt-4">
        UI components for your next project
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FlipWords } from '~/components/ui/flip-words'
</script>
