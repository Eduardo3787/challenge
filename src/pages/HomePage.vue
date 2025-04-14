<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Título da página</h1>
    <!-- Barra de pesquisa -->
    <div class="mb-4">
      <q-input
        v-model="searchQuery"
        label="Pesquisar GIF"
        outlined
        @keyup.enter="onSearch"
      />
    </div>

    <q-btn label="Buscar" color="primary" @click="onSearch" />

    <!-- Listagem de GIFs -->
    <div class="grid grid-cols-2 gap-4 mt-4">
      <div
        v-for="gif in gifs"
        :key="gif.id"
        class="border rounded p-2"
      >
        <img :src="gif.images.fixed_height.url" alt="gif" class="w-full object-cover" />
        <div class="flex justify-end mt-2">
          <q-btn
            icon="favorite"
            flat
            color="red"
            @click="favoriteGif(gif)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useGiphyStore } from '@/stores/giphy-store.ts '
import type { GiphyGif } from '@/stores/giphy-store.ts '
import { useQuasar } from 'quasar'

const store = useGiphyStore()
const $q = useQuasar()

// Campo de texto para pesquisa
const searchQuery = ref('')

// Carrega trending GIFs ao montar
onMounted(async () => {
  await store.fetchTrending()
})

const gifs = computed<GiphyGif[]>(() => {
  return searchQuery.value.trim() === ''
    ? store.trendingGifs
    : store.searchResults
})

const onSearch = async () => {
  if (searchQuery.value.trim() === '') {
    await store.fetchTrending()
  } else {
    await store.searchGifs(searchQuery.value)
  }
}

function favoriteGif(gif: GiphyGif) {
  store.addFavorite(gif)
  $q.notify({
    type: 'positive',
    message: 'Adicionado aos favoritos!'
  })
}
</script>
