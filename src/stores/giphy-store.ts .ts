import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api, giphyApiKey } from '@/boot/axios'
import { LocalStorage } from 'quasar'

// Definição de um tipo para os GIFs do GIPHY
export interface GiphyGif {
  id: string;
  title?: string;
  images: {
    fixed_height: {
      url: string;
    }
  }
}

export const useGiphyStore = defineStore('giphy', () => {
  // Utilizando a interface GiphyGif em vez de any
  const trendingGifs = ref<GiphyGif[]>([])
  const searchResults = ref<GiphyGif[]>([])
  const favorites = ref<GiphyGif[]>([])
  const categories = ref([
    { id: 'funny', name: 'Funny' },
    { id: 'sports', name: 'Sports' },
    { id: 'movies', name: 'Movies' },
    { id: 'music', name: 'Music' }
  ])

  function loadFavorites() {
    const stored = LocalStorage.getItem('favorites')
    if (stored) {
      favorites.value = stored as GiphyGif[]
    }
  }

  function saveFavorites() {
    LocalStorage.set('favorites', favorites.value)
  }

  async function fetchTrending() {
    const res = await api.get(`/gifs/trending?api_key=${giphyApiKey}&limit=25`)
    trendingGifs.value = res.data.data as GiphyGif[]
  }

  async function searchGifs(query: string) {
    const res = await api.get(
      `/gifs/search?api_key=${giphyApiKey}&q=${encodeURIComponent(query)}&limit=25`
    )
    searchResults.value = res.data.data as GiphyGif[]
  }

  function addFavorite(gif: GiphyGif) {
    if (!favorites.value.some(item => item.id === gif.id)) {
      favorites.value.push(gif)
      saveFavorites()
    }
  }

  function removeFavorite(gifId: string) {
    favorites.value = favorites.value.filter(item => item.id !== gifId)
    saveFavorites()
  }

  
  loadFavorites()

  return {
    trendingGifs,
    searchResults,
    favorites,
    categories,
    fetchTrending,
    searchGifs,
    addFavorite,
    removeFavorite
  }
})
