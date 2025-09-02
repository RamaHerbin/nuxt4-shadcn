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
  </div>


    <Button>Click me</Button>
    <RippleButton> Click me! </RippleButton>
  </div>
</template>

<style>
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

:root {
  /* Définition des variables CSS (exemple) */
  --primary: oklch(0.21 0.006 285.885);
  --background: oklch(1 0 0);
  /* ... et bien d’autres variables pour les composants Inspira UI */
}
.dark {
  /* Valeurs pour le mode sombre */
}

@theme inline {
  /* variables CSS utilisables dans les composants */
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}

html {
  color-scheme: light dark;
}
html.dark {
  color-scheme: dark;
}
html.light {
  color-scheme: light;
}

</style>