<template>
  <section class="py-10 lg:py-20">
    <SectionTitle titleZh="學歷" titleEn="Education" />
    <ul class="flex flex-col gap-8">
      <li data-aos="fade-up" v-for="edu in edus" :key="edu.id" class="grid lg:grid-cols-4 gap-3">
        <div class="flex justify-center items-start">
          <img :src="edu.unitImage" class="w-[60px]" :alt="edu.unit">
        </div>
        <div>
          <p class="text-primary font-bold lg:text-4h text-center lg:text-start">{{ edu.department }}</p>
          <p class="text-3h text-center lg:text-start mb-1">{{ edu.unit }}</p>
          <p class="text-gray-400 text-3 text-center lg:text-start">{{ edu.during_start }} - {{ edu.during_end }}</p>
        </div>
        <div class="lg:col-span-2">
          <p class="text-3h text-gray-600 text-justify">{{ edu.content }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import edus from '@/data/edu'
import SectionTitle from '../SectionTitle.vue'
</script>