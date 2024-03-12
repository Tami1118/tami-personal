<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
const route = useRoute()
const pathName = ref('')

const getPath = () => {
  pathName.value = route.path
}

watch(()=> route.path, () => {
  getPath()
})
</script>

<template>
  <header class="w-[90vw] md:w-[70vw] xl:w-[60vw] mx-auto duration-300">
    <div class="flex justify-between items-center py-3">
      <RouterLink class="font-bold" to="/">Hello, <span class="text-primary">Tami</span></RouterLink>

      <ul class="flex gap-4">
        <li><RouterLink to="/about" class="hover:text-secondary" :class="{ 'text-primary': pathName === '/about' }">關於我</RouterLink></li>
        <li><RouterLink to="/projects" class="hover:text-secondary" :class="{ 'text-primary': pathName === '/projects' }">專案作品</RouterLink></li>
      </ul>
    </div>
  </header>
</template>