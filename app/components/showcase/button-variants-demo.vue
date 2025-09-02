<template>
  <div class="w-full space-y-4">
    <div class="flex flex-wrap gap-3">
      <GradientButton class="px-6 py-2">
        Gradient Button
      </GradientButton>
      <RainbowButton class="px-6 py-2">
        Rainbow Button
      </RainbowButton>
      <ShimmerButton class="px-6 py-2">
        Shimmer Button
      </ShimmerButton>
    </div>
    
    <div class="flex flex-wrap gap-3">
      <InteractiveHoverButton class="px-6 py-2">
        Hover Effect
      </InteractiveHoverButton>
      <RippleButton class="px-6 py-2">
        Ripple Effect
      </RippleButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GradientButton } from '~/components/ui/gradient-button'
import { RainbowButton } from '~/components/ui/rainbow-button'
import { ShimmerButton } from '~/components/ui/shimmer-button'
import { InteractiveHoverButton } from '~/components/ui/interactive-hover-button'
import { RippleButton } from '~/components/ui/ripple-button'
</script>
