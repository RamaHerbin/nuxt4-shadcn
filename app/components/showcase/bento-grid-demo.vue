<template>
  <div class="w-full">
    <BentoGrid>
      <BentoGridItem
        v-for="item in items"
        :key="item.id"
        :title="item.title"
        :description="item.description"
        :header="item.header"
        :icon="item.icon"
        :class="item.class"
      />
    </BentoGrid>
  </div>
</template>

<script setup lang="ts">

const items = [
  {
    id: 1,
    title: 'Dashboard',
    description: 'Overview of your data',
    header: '📊',
    icon: 'ChartBarIcon',
    class: 'md:col-span-2'
  },
  {
    id: 2,
    title: 'Users',
    description: 'User management',
    header: '👥',
    icon: 'UsersIcon',
    class: 'md:col-span-1'
  },
  {
    id: 3,
    title: 'Analytics',
    description: 'Detailed statistics',
    header: '📈',
    icon: 'ChartPieIcon',
    class: 'md:col-span-1'
  },
  {
    id: 4,
    title: 'Settings',
    description: 'Application configuration',
    header: '⚙️',
    icon: 'CogIcon',
    class: 'md:col-span-2'
  }
]
</script>
