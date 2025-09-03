<script setup lang="ts">
const isDark = ref(false)

// Toggle html.dark class (works with Tailwind theming setups from Inspira UI docs)
const toggleDark = () => {
  isDark.value = !isDark.value
  const html = document.documentElement
  html.classList.toggle('dark', isDark.value)
}

onMounted(() => {
  // Start in light/dark based on current html
  isDark.value = document.documentElement.classList.contains('dark')
})
</script>


<template>
  <div>
    <NuxtPage/>
    <button
      @click="toggleDark"
      class="fixed bottom-4 right-4 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition"
      :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"></button>
  </div>
</template>

