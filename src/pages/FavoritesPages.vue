<template>
    <div class="p-4">
      <h1 class="text-2xl font-bold mb-4">Favoritos</h1>
      <div v-if="favorites.length === 0">
        Nenhum favorito encontrado.
      </div>
      <div class="grid grid-cols-2 gap-4" v-else>
        <div
          v-for="gif in favorites"
          :key="gif.id"
          class="border rounded p-2"
        >
          <img :src="gif.images.fixed_height.url" alt="gif" class="w-full object-cover" />
          <div class="flex justify-end mt-2">
            <q-btn
              icon="delete"
              flat
              color="negative"
              @click="removeFavorite(gif.id)"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import { useGiphyStore } from '@/stores/giphy-store.ts '
  import { useQuasar } from 'quasar'
  
  const store = useGiphyStore()
  const $q = useQuasar()
  
  // Computed para obter a lista de favoritos do store
  const favorites = computed(() => store.favorites)
  
  // Função para remover um favorito
  const removeFavorite = (gifId: string) => {
    store.removeFavorite(gifId)
    $q.notify({
      type: 'warning',
      message: 'Removido dos favoritos!'
    })
  }
  </script>
  