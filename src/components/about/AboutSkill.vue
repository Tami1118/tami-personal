<script setup>
import skills from '@/data/skills'
</script>

<template>
  <section class="py-10 lg:py-20">
    <h2 data-aos="fade-up" data-aos-delay="300" class="bg-primary w-fit px-4 py-2 text-white section-rounded text-5 font-500 mb-10 lg:mb-20">專長技能 Skills</h2>
    <div class="flex flex-col lg:flex-row">
      {{ skills }}
    </div>
  </section>
</template>