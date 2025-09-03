<template>
  <div class="relative h-96 w-full flex items-center justify-center">
    <LampEffect>
      <motion.h1
        :initial="{ opacity: 0.5, y: 10 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{
          delay: 0.2,
          duration: 0.8,
          ease: 'easeInOut',
        }"
        class="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampEffect>
  </div>
</template>

<script setup lang="ts">
import { LampEffect } from '~/components/ui/lamp-effect'
import { motion } from 'motion-v'
</script>
