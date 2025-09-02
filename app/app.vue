<template>
  <div>
   
    <div class="relative grid h-[500px] place-content-center overflow-hidden">
    <p
      class="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white"
    >
      Started Nuxt 4 + TailwindCSS + Inspira UI (+Shadcn)
    </p>

    <InteractiveGridPattern
      :class="[
        '[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]',
        'inset-0 h-[200%] skew-y-12',
      ]"
    />

    <InspiraShowcase />
  </div>


    <Button>Click me</Button>
    <RippleButton> Click me! </RippleButton>
  </div>
</template>
