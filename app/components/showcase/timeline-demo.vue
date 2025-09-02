<template>
  <div class="w-full max-w-md">
    <div class="space-y-6">
      <div class="text-center mb-6">
        <h3 class="text-lg font-semibold">Timeline des étapes</h3>
        <p class="text-sm text-muted-foreground">Suivi du projet étape par étape</p>
      </div>
      
      <div class="relative">
        <!-- Ligne verticale -->
        <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 to-yellow-500"></div>
        
        <!-- Étape 1 -->
        <div class="relative flex items-start space-x-4 pb-6">
          <div class="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
            1
          </div>
          <div class="flex-1 min-w-0">
            <div class="rounded-lg border bg-card p-4 shadow-sm">
              <h4 class="font-semibold text-blue-600">Projet lancé</h4>
              <p class="text-sm text-muted-foreground">Le projet a été initialisé avec succès</p>
            </div>
          </div>
        </div>
        
        <!-- Étape 2 -->
        <div class="relative flex items-start space-x-4 pb-6">
          <div class="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
            2
          </div>
          <div class="flex-1 min-w-0">
            <div class="rounded-lg border bg-card p-4 shadow-sm">
              <h4 class="font-semibold text-green-600">Développement</h4>
              <p class="text-sm text-muted-foreground">Phase de développement en cours</p>
            </div>
          </div>
        </div>
        
        <!-- Étape 3 -->
        <div class="relative flex items-start space-x-4">
          <div class="flex-shrink-0 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
            3
          </div>
          <div class="flex-1 min-w-0">
            <div class="rounded-lg border bg-card p-4 shadow-sm">
              <h4 class="font-semibold text-yellow-600">Tests</h4>
              <p class="text-sm text-muted-foreground">Phase de tests et validation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Timeline simplifiée sans dépendances externes
</script>
