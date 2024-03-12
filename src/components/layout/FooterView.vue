<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="w-[90vw] md:w-[70vw] xl:w-[60vw] mx-auto duration-300">
    <div class="flex flex-col lg:flex-row lg:justify-between items-center gap-4 py-10 border-t">
      <ul class="flex items-center gap-5 lg:order-1">
        <li><a title="Tami's Email" href="mailto:chenziyi93326@gmail.com" class="block"><font-awesome-icon icon="fa-solid fa-envelope" class="text-[26px]" /></a></li>
        <li><a title="Tami's GitHub" href="https://github.com/Tami1118" class="block"><font-awesome-icon icon="fa-brands fa-github" class="text-[26px]" /></a></li>
        <li><a title="Tami's CakeResume" href="https://www.cakeresume.com/dashboard?ref=dashboard_navs_profile" class="block"><img src="../../assets/image/cakeresume icons-b.png" class="h-[22px] aspect-square" alt="CakeResume"></a></li>
      </ul>
      <div>
        <RouterLink class="font-bold block text-center lg:text-start" to="/">Hello, <span class="text-primary">Tami!</span></RouterLink>
        <span class="text-3 block text-gray-400">Copyright &copy; 2024 Tami. All rights reserved.</span>
      </div>
    </div>
  </footer>
</template>