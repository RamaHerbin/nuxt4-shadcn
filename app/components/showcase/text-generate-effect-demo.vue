<template>
  <div class="flex h-96 w-full items-center justify-center">
    <div class="text-center">
      <TextGenerateEffect
        words="Beautiful UI components for your next project"
        className="text-2xl md:text-4xl lg:text-5xl text-black dark:text-white font-bold"
      />
      <TextGenerateEffect
        words="Built with Vue 3 and Tailwind CSS"
        className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mt-4"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { TextGenerateEffect } from '~/components/ui/text-generate-effect'
</script>
