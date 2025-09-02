<template>
  <div class="w-full space-y-6">
    <div class="text-center">
      <h4 class="text-lg font-semibold mb-4">Multi Step Loader</h4>
      <MultiStepLoader 
        :steps="loaderSteps" 
        :loading="isLoading"
        @complete="onLoaderComplete"
      />
      <button 
        @click="startLoader"
        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Start loader
      </button>
    </div>
    
    <div class="text-center">
      <h4 class="text-lg font-semibold mb-4">Animated Circular Progress</h4>
      <AnimatedCircularProgressBar :value="75" />
    </div>
    
    <div class="text-center">
      <h4 class="text-lg font-semibold mb-4">Number Ticker</h4>
      <NumberTicker :value="1234" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { MultiStepLoader } from '~/components/ui/multi-step-loader'
import { AnimatedCircularProgressBar } from '~/components/ui/animated-circular-progressbar'
import { NumberTicker } from '~/components/ui/number-ticker'

const isLoading = ref(false)

const loaderSteps = [
  {
    text: 'Initializing...',
    duration: 1000
  },
  {
    text: 'Loading data...',
    duration: 1500
  },
  {
    text: 'Processing...',
    duration: 2000
  },
  {
    text: 'Finalizing...',
    duration: 1000
  }
]

const startLoader = () => {
  isLoading.value = true
}

const onLoaderComplete = () => {
  isLoading.value = false
  console.log('Loader completed!')
}
</script>
