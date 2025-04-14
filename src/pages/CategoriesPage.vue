<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Categorias</h1>
    <div class="flex gap-2 mb-4">
      <q-btn
        v-for="cat in categories"
        :key="cat.id"
        flat
        color="primary"
        @click="selectCategory(cat)"
      >
        {{ cat.name }}
      </q-btn>
    </div>

    <div v-if="selectedCategory">
      <h2 class="text-xl mb-2">Categoria: {{ selectedCategory.name }}</h2>
      <div class="grid grid-cols-2 gap-4">
        <div
          v-for="gif in categoryGifs"
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
    <div v-else>
      <p>Selecione uma categoria para ver os GIFs.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useGiphyStore } from '@/stores/giphy-store.ts '
import type { GiphyGif } from '@/stores/giphy-store.ts '
import { useQuasar } from 'quasar'

const store = useGiphyStore()
const $q = useQuasar()

// Define o tipo de selectedCategory explicitamente
const selectedCategory = ref<{ id: string; name: string } | null>(null)

// Utilize o tipo GiphyGif em vez de any para categoryGifs
const categoryGifs = ref<GiphyGif[]>([])

const categories = store.categories

async function selectCategory(cat: { id: string; name: string }) {
  selectedCategory.value = cat
  // Usa a busca da store para procurar pelo nome da categoria
  await store.searchGifs(cat.name)
  // Atribui os resultados, garantindo o tipo GiphyGif[]
  categoryGifs.value = store.searchResults as GiphyGif[]
}

function favoriteGif(gif: GiphyGif) {
  store.addFavorite(gif)
  $q.notify({
    type: 'positive',
    message: 'Adicionado aos favoritos!'
  })
}
</script>
           