<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

// 監聽路徑，更新menu狀態
const route = useRoute()
const pathName = ref('')
const getPath = () => { pathName.value = route.path }
watch(() => route.path, () => { getPath() })

// 監聽視窗寬，更新 isMenu 狀態
const isMenu = ref(false)
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) isMenu.value = false
})
</script>

<template>
  <header class="sticky top-0 bg-white w-full shadow-sm z-10">
    <div class="w-[90vw] md:w-[70vw] xl:w-[60vw] mx-auto duration-300">
      <div class="flex justify-between items-center py-4">
        <RouterLink class="font-bold text-5" to="/">Hello, <span class="text-primary">Tami</span></RouterLink>
        <button @click="isMenu = true"><font-awesome-icon icon="fa-solid fa-bars" class="text-6 md:hidden" /></button>
        <ul class="hidden md:flex gap-5">
          <li class="h-[20px] overflow-hidden">
            <RouterLink to="/about" class="block group" :class="{ 'text-primary font-bold': pathName === '/about' }">
              <div class="group-hover:text-primary group-hover:-translate-y-[21px] text-3h duration-300 ease-in-out">關於我<span class="block">About</span></div>
            </RouterLink>
          </li>
          <li class="h-[20px] overflow-hidden">
            <RouterLink to="/projects" class="block group" :class="{ 'text-primary font-bold': pathName === '/projects' }">
              <div class="group-hover:text-primary group-hover:-translate-y-[21px] text-3h duration-300 ease-in-out">專案作品<span class="block">Projects</span></div>
            </RouterLink>
          </li>
        </ul>
      </div>

      <div v-if="isMenu" class="fixed top-0 left-0 w-full h-full bg-white">
        <button @click="isMenu = false" class="absolute top-0 right-0">
          <font-awesome-icon icon="fa-solid fa-xmark" class="text-6 m-4" />
        </button>
        <ul class="flex flex-col h-full justify-center px-4">
          <li><RouterLink to="/" @click="isMenu = false" class="w-full text-6 py-3 flex items-end font-bold ps-2" :class="{ 'text-primary bg-gray-100': pathName === '/' }">首頁<span class="block text-4 ms-2">Home</span></RouterLink></li>
          <li><RouterLink to="/about" @click="isMenu = false" class="w-full text-6 py-3 flex items-end font-bold ps-2" :class="{ 'text-primary bg-gray-100': pathName === '/about' }">關於我<span class="block text-4 ms-2">About</span></RouterLink></li>
          <li><RouterLink to="/projects" @click="isMenu = false" class="w-full text-6 py-3 flex items-end font-bold ps-2" :class="{ 'text-primary bg-gray-100': pathName === '/projects' }">專案作品<span class="block text-4 ms-2">Projects</span></RouterLink></li>
        </ul>
      </div>
    </div>
  </header>
</template>