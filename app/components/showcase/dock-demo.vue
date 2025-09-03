<template>
  <div class="w-full flex justify-center">
    <Dock>
      <DockIcon>
        <template #icon>
          <div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white">
            🏠
          </div>
        </template>
      </DockIcon>
      <DockIcon>
        <template #icon>
          <div class="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white">
            📁
          </div>
        </template>
      </DockIcon>
      <DockIcon>
        <template #icon>
          <div class="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white">
            ⚙️
          </div>
        </template>
      </DockIcon>
      <DockIcon>
        <template #icon>
          <div class="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white">
            💬
          </div>
        </template>
      </DockIcon>
      <DockIcon>
        <template #icon>
          <div class="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center text-white">
            📧
          </div>
        </template>
      </DockIcon>
    </Dock>
  </div>
</template>

<script setup lang="ts">
</script>
