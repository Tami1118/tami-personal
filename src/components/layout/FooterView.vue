<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="w-[90vw] md:w-[70vw] xl:w-[60vw] mx-auto duration-300">
    <div class="flex gap-4 flex-col lg:flex-row lg:justify-between items-center py-8 border-t">
      <ul class="flex items-center gap-5 lg:order-1">
        <li><a title="Tami's Email" href="mailto:chenziyi93326@gmail.com" class="block"><font-awesome-icon icon="fa-solid fa-envelope" class="text-6 hover:text-primary" /></a></li>
        <li><a title="Tami's GitHub" href="https://github.com/Tami1118" target="_blank" class="block"><font-awesome-icon icon="fa-brands fa-github" class="text-6 hover:text-primary" /></a></li>
        <li><a title="Tami's CakeResume" href="https://www.cakeresume.com/dashboard?ref=dashboard_navs_profile" target="_blank" class="block"><font-awesome-icon icon="fa-solid fa-id-card" class="text-6 hover:text-primary" /></a></li>
      </ul>
      <RouterLink class="font-bold block text-center" to="/">Hello, <span class="text-primary">Tami</span></RouterLink>
    </div>
    <span class="text-3 text-center block text-gray-400 py-3">Copyright &copy; 2024 Tami. All rights reserved.</span>
  </footer>
</template>