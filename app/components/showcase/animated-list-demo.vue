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
    title: 'New message',
    message: 'You have received a new message',
    type: 'info'
  },
  {
    id: 2,
    title: 'Update',
    message: 'Your profile has been updated',
    type: 'success'
  },
  {
    id: 3,
    title: 'Reminder',
    message: 'Don\'t forget your appointment',
    type: 'warning'
  },
  {
    id: 4,
    title: 'Error',
    message: 'An error has occurred',
    type: 'error'
  }
]
</script>
