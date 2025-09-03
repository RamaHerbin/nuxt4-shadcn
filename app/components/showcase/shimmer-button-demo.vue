<template>
  <div class="flex h-96 w-full items-center justify-center gap-4">
    <ShimmerButton
      class="shadow-2xl"
      :shimmer-size="200"
    >
      <span class="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
        Shimmer Button
      </span>
    </ShimmerButton>
    <ShimmerButton
      class="shadow-2xl"
      :shimmer-size="300"
    >
      <span class="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
        Large Shimmer
      </span>
    </ShimmerButton>
  </div>
</template>

<script setup lang="ts">
import { ShimmerButton } from '~/components/ui/shimmer-button'
</script>
