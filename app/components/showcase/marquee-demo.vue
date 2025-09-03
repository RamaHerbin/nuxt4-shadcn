<template>
  <div class="w-full">
    <Marquee :pause-on-hover="true" class="[--duration:20s]">
      <div
        v-for="item in items"
        :key="item.id"
        class="flex-shrink-0 rounded-lg border bg-card px-4 py-2 text-card-foreground shadow-sm mx-2"
      >
        {{ item.text }}
      </div>
    </Marquee>
  </div>
</template>

<script setup lang="ts">

const items = [
  { id: 1, text: '🚀 Inspira UI' },
  { id: 2, text: '✨ Animations' },
  { id: 3, text: '🎨 Design System' },
  { id: 4, text: '⚡ Performance' },
  { id: 5, text: '🔧 Customizable' },
  { id: 6, text: '📱 Responsive' },
  { id: 7, text: '🌙 Dark Mode' },
  { id: 8, text: '🎯 Accessible' }
]
</script>
