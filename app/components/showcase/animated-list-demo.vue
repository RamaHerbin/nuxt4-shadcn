<template>
  <div class="w-full max-w-sm">
    <AnimatedList :delay="2000">
      <Notification
        v-for="notification in notifications"
        :key="notification.id"
        :title="notification.title"
        :message="notification.message"
        :type="notification.type"
      />
    </AnimatedList>
  </div>
</template>

<script setup lang="ts">
import { AnimatedList, Notification } from '~/components/ui/animated-list'

const notifications = [
  {
    id: 1,
    title: 'Nouveau message',
    message: 'Vous avez reçu un nouveau message',
    type: 'info'
  },
  {
    id: 2,
    title: 'Mise à jour',
    message: 'Votre profil a été mis à jour',
    type: 'success'
  },
  {
    id: 3,
    title: 'Rappel',
    message: 'N\'oubliez pas votre rendez-vous',
    type: 'warning'
  },
  {
    id: 4,
    title: 'Erreur',
    message: 'Une erreur s\'est produite',
    type: 'error'
  }
]
</script>
