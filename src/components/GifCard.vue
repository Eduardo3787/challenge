<template>
    <!-- Exibe o GIF com uma borda e botão para favoritar -->
    <div class="border rounded p-2">
      <img :src="gif.images.fixed_height.url" :alt="gif.title || 'GIF'" class="w-full object-cover" />
      <div class="flex justify-end mt-2">
        <!-- Quando o botão é clicado, emite o evento 'favorite' com o objeto gif -->
        <q-btn icon="favorite" flat color="red" @click="handleFavorite" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue'
  
  // Definindo o tipo de objeto GIF (ajuste se necessário)
  interface Gif {
    id: string;
    title?: string;
    images: {
      fixed_height: {
        url: string;
      }
    }
  }
  
  const props = defineProps<{ gif: Gif }>()
  
  // Define o evento que será emitido quando o botão for clicado
  const emit = defineEmits<{
    (e: 'favorite', gif: Gif): void
  }>()
  
  function handleFavorite() {
    emit('favorite', props.gif)
  }
  </script>
  