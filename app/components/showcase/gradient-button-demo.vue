<template>
  <div class="flex h-96 w-full items-center justify-center gap-4">
    <GradientButton
      variant="shimmer"
      class="shadow-2xl"
      :shimmer-size="200"
    >
      <span class="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
        Shimmer Button
      </span>
    </GradientButton>
    <GradientButton
      variant="border"
      class="shadow-2xl"
    >
      <span class="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
        Border Button
      </span>
    </GradientButton>
  </div>
</template>

<script setup lang="ts">
import { GradientButton } from '~/components/ui/gradient-button'
</script>
