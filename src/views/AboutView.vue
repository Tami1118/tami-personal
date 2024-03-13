<script setup>
import AboutMe from '@/components/about/AboutMe.vue';
import AboutSkill from '@/components/about/AboutSkill.vue';
import AboutJob from '@/components/about/AboutJob.vue';
import AboutEdu from '@/components/about/AboutEdu.vue';
</script>

<template>
  <div class="w-[90vw] md:w-[70vw] xl:w-[60vw] mx-auto duration-300">
    <AboutMe />
    <AboutSkill />
    <AboutJob />
    <AboutEdu />
  </div>
</template>