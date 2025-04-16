<template>
    
    <div class="border rounded p-2">
      <img :src="gif.images.fixed_height.url" :alt="gif.title || 'GIF'" class="w-full object-cover" />
      <div class="flex justify-end mt-2">
       
        <q-btn icon="favorite" flat color="red" @click="handleFavorite" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue'
  

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
  
 
  const emit = defineEmits<{
    (e: 'favorite', gif: Gif): void
  }>()
  
  function handleFavorite() {
    emit('favorite', props.gif)
  }
  </script>
  