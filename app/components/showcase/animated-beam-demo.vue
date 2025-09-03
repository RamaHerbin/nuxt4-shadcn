<template>
  <div class="relative h-96 w-full flex items-center justify-center">
    <div class="flex h-full w-full items-center justify-center">
      <div class="flex h-[200px] w-full items-center justify-center">
        <div class="flex h-full w-full items-center justify-center gap-10">
          <div class="flex h-full w-full flex-col items-center justify-center gap-2">
            <div class="flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-black">
              <div class="h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100"></div>
            </div>
            <div class="flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-black">
              <div class="h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100"></div>
            </div>
            <div class="flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-black">
              <div class="h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100"></div>
            </div>
          </div>
          <AnimatedBeam />
          <div class="flex h-full w-full flex-col items-center justify-center gap-2">
            <div class="flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-black">
              <div class="h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100"></div>
            </div>
            <div class="flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-black">
              <div class="h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100"></div>
            </div>
            <div class="flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-black">
              <div class="h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AnimatedBeam } from '~/components/ui/animated-beam'
</script>
