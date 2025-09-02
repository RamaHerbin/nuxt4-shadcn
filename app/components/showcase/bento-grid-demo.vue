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
import { BentoGrid, BentoGridItem } from '~/components/ui/bento-grid'

const items = [
  {
    id: 1,
    title: 'Dashboard',
    description: 'Vue d\'ensemble de vos données',
    header: '📊',
    icon: 'ChartBarIcon',
    class: 'md:col-span-2'
  },
  {
    id: 2,
    title: 'Utilisateurs',
    description: 'Gestion des utilisateurs',
    header: '👥',
    icon: 'UsersIcon',
    class: 'md:col-span-1'
  },
  {
    id: 3,
    title: 'Analytics',
    description: 'Statistiques détaillées',
    header: '📈',
    icon: 'ChartPieIcon',
    class: 'md:col-span-1'
  },
  {
    id: 4,
    title: 'Paramètres',
    description: 'Configuration de l\'application',
    header: '⚙️',
    icon: 'CogIcon',
    class: 'md:col-span-2'
  }
]
</script>
