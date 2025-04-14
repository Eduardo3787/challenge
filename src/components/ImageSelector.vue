<template>
    <div>
      <!-- Input para seleção de arquivo, oculto -->
      <input 
        type="file" 
        accept="image/*"
        ref="inputRef"
        @change="handleImageChange"
        class="hidden"
      />
  
      <!-- Se não houver imagem, mostra o botão para selecionar -->
      <button 
        v-if="!image" 
        class="w-full h-[220px] flex flex-col items-center justify-center gap-4 bg-slate-50 rounded border border-slate-200/50"
        @click="onChangeFile"
      >
        <div>
          <!-- Usando q-icon do Quasar para o ícone de imagem -->
          <q-icon name="mdi-file-image" class="text-xl text-violet-500" />
        </div>
        <p class="text-sm text-slate-500">
          Browse image files to upload
        </p>
      </button>
  
      <!-- Se houver imagem, mostra o preview e o botão para remover -->
      <div v-else class="w-full relative">
        <img 
          :src="previewUrl" 
          alt="Selected" 
          class="w-full h-[300px] object-cover rounded-lg"
        />
        <button
          class="btn-small btn-delete absolute top-2 right-2"
          @click="handleRemoveImage"
        >
          <!-- Usando q-icon do Quasar para o ícone de delete -->
          <q-icon name="mdi-delete" class="text-lg" />
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch, onUnmounted, defineProps } from 'vue'
  
  // Define as props esperadas pelo componente
  const props = defineProps<{
    image: File | string | null,
    setImage: (value: File | string | null) => void,
    onHandleDeleteMomentImg: () => void
  }>()
  
  const inputRef = ref<HTMLInputElement | null>(null)
  const previewUrl = ref<string>('')
  
  // Função para acionar o input file
  function onChangeFile() {
    inputRef.value?.click()
  }
  
  // Função para tratar a mudança no input file
  function handleImageChange(e: Event) {
    const target = e.target as HTMLInputElement
    const files = target.files
    if (files && files.length > 0) {
      props.setImage(files[0])
    }
  }
  
  // Função para remover a imagem
  function handleRemoveImage() {
    props.setImage(null)
    props.onHandleDeleteMomentImg()
  }
  
  // Atualiza a URL de preview sempre que a prop "image" muda
  watch(() => props.image, (newVal) => {
    if (typeof newVal === 'string') {
      previewUrl.value = newVal
    } else if (newVal) {
      previewUrl.value = URL.createObjectURL(newVal)
    } else {
      previewUrl.value = ''
    }
  })
  
  // Libera a URL quando o componente é desmontado para evitar vazamentos de memória
  onUnmounted(() => {
    if (previewUrl.value) {
      URL.revokeObjectURL(previewUrl.value)
    }
  })
  </script>
  