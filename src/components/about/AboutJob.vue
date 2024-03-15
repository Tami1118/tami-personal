<template>
  <section class="py-10 lg:py-20">
    <SectionTitle titleZh="工作經驗" titleEn="Experience" />
    <ul class="flex flex-col gap-8">
      <li data-aos="fade-up" v-for="job in jobs" :key="job.id" class="grid lg:grid-cols-4 gap-3">
        <div class="flex justify-center items-start">
          <img :src="job.unitImage" class="w-[60px]" :alt="job.unit">
        </div>
        <div>
          <p class="text-primary font-bold lg:text-4h text-center lg:text-start">{{ job.position }}</p>
          <p class="text-3h text-center lg:text-start mb-1">{{ job.unit }}</p>
          <p class="text-gray-400 text-3 text-center lg:text-start">{{ job.during_start }} - {{ job.during_end }}</p>
        </div>
        <div class="lg:col-span-2">
          <ul class="list-disc ms-5">
            <li v-for="skill in job.skills" class="text-3h text-gray-600 text-justify" :key="`${skill}123`">{{ skill }}</li>
          </ul>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import jobs from '@/data/job'
import SectionTitle from '../SectionTitle.vue'
</script>