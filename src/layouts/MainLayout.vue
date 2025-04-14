<template>
  <!-- Ajustamos o "view" para que o top bar fique acima da sidebar -->
  <q-layout view="hHh lpr lFf">
    <!-- Top bar (azul claro) -->
    <q-header elevated class="bg-[#0061BF] text-white">
      <q-toolbar>
        <!-- Logo e nome da empresa -->
        <div class="flex items-center gap-2">
          <!-- Logo menor -->
          <img src="~assets/SGMW-2.jpg" alt="Logo" class="h-6 w-auto" />
          <span class="text-xl font-bold">Empresa Fictícia</span>
        </div>

        <q-space />

        <!-- Nome do programador + ícone com espaçamento -->
        <div class="flex items-center gap-4">
          <span class="font-medium">NOME PROGRAMADOR</span>
          <!-- Ícone redondo de usuário -->
          <q-icon name="mdi-account-circle" size="24px" />
        </div>
      </q-toolbar>
    </q-header>

    <!-- Sidebar (azul escuro) -->
    <q-drawer show-if-above side="left" bordered class="bg-[#0F1E47] text-white">
      <q-list>
        <!-- HOME (ícone quadradinhos) -->
        <q-item clickable @click="navigate('home')" class="text-white">
          <q-item-section avatar>
            <q-icon name="mdi-view-dashboard" />
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>

        <!-- FAVORITOS (ícone de pessoas) -->
        <q-item clickable @click="navigate('favorites')" class="text-white">
          <q-item-section avatar>
            <q-icon name="mdi-account-multiple" />
          </q-item-section>
          <q-item-section>Favoritos</q-item-section>
        </q-item>

        <!-- CATEGORIAS (ícone de caixa) -->
        <q-item clickable @click="navigate('categories')" class="text-white">
          <q-item-section avatar>
            <q-icon name="mdi-package-variant" />
          </q-item-section>
          <q-item-section>Categorias</q-item-section>
        </q-item>

        <!-- SOBRE (ícone de timão) -->
        <q-item clickable @click="navigate('about')" class="text-white">
          <q-item-section avatar>
            <q-icon name="mdi-ship-wheel" />
          </q-item-section>
          <q-item-section>Sobre</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Área central (renderização das páginas) -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

function navigate(routeName: string): void {
  // Ignora a Promise retornada por router.push, evitando 'floating promise'
  void router.push({ name: routeName })
}
</script>
