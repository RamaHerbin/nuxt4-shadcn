<template>
  <div class="w-full flex justify-center gap-4">
          <RippleButton class="bg-blue-500 text-white px-6 py-3 rounded-lg">
        Ripple Effect
      </RippleButton>
      <RippleButton class="bg-green-500 text-white px-6 py-3 rounded-lg">
        Click me
      </RippleButton>
  </div>
</template>

<script setup lang="ts">
import { RippleButton } from '~/components/ui/ripple-button'
</script>
