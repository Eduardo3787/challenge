<template>
    <div>
     
      <input 
        type="file" 
        accept="image/*"
        ref="inputRef"
        @change="handleImageChange"
        class="hidden"
      />
  
     
      <button 
        v-if="!image" 
        class="w-full h-[220px] flex flex-col items-center justify-center gap-4 bg-slate-50 rounded border border-slate-200/50"
        @click="onChangeFile"
      >
        <div>
        
          <q-icon name="mdi-file-image" class="text-xl text-violet-500" />
        </div>
        <p class="text-sm text-slate-500">
          Browse image files to upload
        </p>
      </button>
  
      
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
          
          <q-icon name="mdi-delete" class="text-lg" />
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch, onUnmounted, defineProps } from 'vue'
  
  
  const props = defineProps<{
    image: File | string | null,
    setImage: (value: File | string | null) => void,
    onHandleDeleteMomentImg: () => void
  }>()
  
  const inputRef = ref<HTMLInputElement | null>(null)
  const previewUrl = ref<string>('')
  
  
  function onChangeFile() {
    inputRef.value?.click()
  }
  
 
  function handleImageChange(e: Event) {
    const target = e.target as HTMLInputElement
    const files = target.files
    if (files && files.length > 0) {
      props.setImage(files[0])
    }
  }
  
  
  function handleRemoveImage() {
    props.setImage(null)
    props.onHandleDeleteMomentImg()
  }
  
  
  watch(() => props.image, (newVal) => {
    if (typeof newVal === 'string') {
      previewUrl.value = newVal
    } else if (newVal) {
      previewUrl.value = URL.createObjectURL(newVal)
    } else {
      previewUrl.value = ''
    }
  })
  
  
  onUnmounted(() => {
    if (previewUrl.value) {
      URL.revokeObjectURL(previewUrl.value)
    }
  })
  </script>
  