<template>
<div class="relative grid h-[500px] place-content-center">
      <p
        class="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white"
      >
        Starter <span>Nuxt 4 + Inspira UI</span>
      </p>

      <InteractiveGridPattern
        :class="[
          '[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]',
          'inset-0 h-[200%] skew-y-12',
        ]"
      />
      <div class="link">
        <NuxtLink class="showcaseLink" to="/showcase"><Button>Browse components</Button></NuxtLink>
        <FluidCursor />

      </div>
    
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.link {
    margin-top: 3rem;
    display: flex;
    width: 100%;
    justify-content: center;
}
.showcaseLink {
    position: absolute;
    z-index: 100000;
}
</style>