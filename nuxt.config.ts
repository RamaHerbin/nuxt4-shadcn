// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // TypeScript configuration
  typescript: {
    strict: false,
    typeCheck: false,
  },
  
  // Shadcn configuration
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './app/components/ui'
  },
  
  // CSS configuration
  css: ['~/assets/css/tailwind.css'],
  
  // Vite configuration
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  
  // Modules
  modules: ['shadcn-nuxt'],
  
  // Runtime config
  runtimeConfig: {
    public: {
      // Add any public runtime config here
    }
  }
})