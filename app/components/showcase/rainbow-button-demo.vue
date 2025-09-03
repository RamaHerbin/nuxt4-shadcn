<template>
  <div class="flex h-96 w-full items-center justify-center gap-4">
    <RainbowButton
      variant="shimmer"
      class="shadow-2xl"
      :shimmer-size="200"
    >
      <span class="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
        Rainbow Shimmer
      </span>
    </RainbowButton>
    <RainbowButton
      variant="border"
      class="shadow-2xl"
    >
      <span class="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
        Rainbow Border
      </span>
    </RainbowButton>
  </div>
</template>

<script setup lang="ts">
import { RainbowButton } from '~/components/ui/rainbow-button'
</script>
