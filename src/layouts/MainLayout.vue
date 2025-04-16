<template>
  
  <q-layout view="hHh lpr lFf">
    
    <q-header
      elevated
      class="bg-[#0061BF] text-white"
      style="height: 50px;"
    >
      <q-toolbar style="min-height: 50px;">
       
        <div class="flex items-center gap-2">
         
          <img
            src="~assets/Untitled.png"
            alt="Logo"
            class="h-4 w-auto"
          />
          <span class="text-xl font-bold"></span>
        </div>

        <q-space />

       
        <div class="flex items-center gap-4">
          <span class="font-medium" style="position: relative; left: -20px;">Eduardo Monteiro</span>
          <q-icon name="mdi-account-circle" size="24px" />
        </div>
      </q-toolbar>
    </q-header>

   
    <q-drawer show-if-above side="left" bordered class="bg-[#0F1E47] text-white">
      <q-list>
        
        <q-item clickable @click="navigate('home')" class="text-white">
          <q-item-section avatar>
            <q-icon name="mdi-view-dashboard" />
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>

        
        <q-item clickable @click="navigate('favorites')" class="text-white">
          <q-item-section avatar>
            <q-icon name="mdi-account-multiple" />
          </q-item-section>
          <q-item-section>Favoritos</q-item-section>
        </q-item>

        
        <q-item clickable @click="navigate('categories')" class="text-white">
          <q-item-section avatar>
            <q-icon name="mdi-package-variant" />
          </q-item-section>
          <q-item-section>Categorias</q-item-section>
        </q-item>

       
        <q-item clickable @click="navigate('about')" class="text-white">
          <q-item-section avatar>
            <q-icon name="mdi-ship-wheel" />
          </q-item-section>
          <q-item-section>Sobre</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

  
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

function navigate(routeName: string): void {
 
  void router.push({ name: routeName })
}
</script>
