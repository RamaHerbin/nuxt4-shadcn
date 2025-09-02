<template>
  <div class="w-full max-w-md">
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot class="bg-blue-500" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineTitle>Projet lancé</TimelineTitle>
          <TimelineDescription>Le projet a été initialisé avec succès</TimelineDescription>
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot class="bg-green-500" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineTitle>Développement</TimelineTitle>
          <TimelineDescription>Phase de développement en cours</TimelineDescription>
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot class="bg-yellow-500" />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineTitle>Tests</TimelineTitle>
          <TimelineDescription>Phase de tests et validation</TimelineDescription>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  </div>
</template>

<script setup lang="ts">
import { 
  Timeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineDot, 
  TimelineConnector, 
  TimelineContent, 
  TimelineTitle, 
  TimelineDescription 
} from '~/components/ui/timeline'
</script>
