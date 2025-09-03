<template>
  <div class="flex h-96 w-full items-center justify-center gap-10">
    <AnimatedTooltip content="This is a tooltip">
      <div class="flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-black">
        <div class="h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100"></div>
      </div>
    </AnimatedTooltip>
    <AnimatedTooltip content="Another tooltip">
      <div class="flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-black">
        <div class="h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100"></div>
      </div>
    </AnimatedTooltip>
    <AnimatedTooltip content="Third tooltip">
      <div class="flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-black">
        <div class="h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100"></div>
      </div>
    </AnimatedTooltip>
  </div>
</template>

<script setup lang="ts">
import { AnimatedTooltip } from '~/components/ui/animated-tooltip'
</script>
