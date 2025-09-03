<template>
  <div class="w-full h-64 flex items-center justify-center relative">
    <!-- Point central -->
    <div class="absolute w-4 h-4 bg-gray-400 rounded-full z-10"></div>
    
    <!-- Orbites -->
    <Orbit :radius="60" :duration="20" :delay="0">
      <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
        A
      </div>
    </Orbit>
    <Orbit :radius="60" :duration="20" :delay="5">
      <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
        B
      </div>
    </Orbit>
    <Orbit :radius="60" :duration="20" :delay="10">
      <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm">
        C
      </div>
    </Orbit>
    <Orbit :radius="60" :duration="20" :delay="15">
      <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm">
        D
      </div>
    </Orbit>
  </div>
</template>

<script setup lang="ts">
</script>
