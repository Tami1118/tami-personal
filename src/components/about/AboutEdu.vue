<template>
  <section class="py-10 lg:py-20">
    <h2 data-aos="fade-up" class="flex flex-col items-center mb-10 lg:mb-20">
      <span class="block order-1 text-5 lg:text-6 font-600">學歷</span> 
      <span class="block bg-primary w-fit px-2 text-white section-rounded text-3 font-600 mb-1">Education</span>
    </h2>
    <ul data-aos="fade-up" class="flex flex-col gap-8">
      <li v-for="edu in edus" :key="edu.id" class="grid lg:grid-cols-4 gap-3">
        <div class="flex justify-center items-start">
          <img :src="edu.unitImage" class="w-[60px]" :alt="edu.unit">
        </div>
        <div>
          <p class="text-primary font-bold lg:text-4h text-center lg:text-start">{{ edu.department }}</p>
          <p class="text-3h text-center lg:text-start">{{ edu.unit }}</p>
          <p class="text-gray-400 text-3 text-center lg:text-start">{{ edu.during_start }} ~ {{ edu.during_end }}</p>
        </div>
        <div class="lg:col-span-2">
          <p class="text-3h text-gray-600 text-justify">{{ edu.content }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const edus = ref([
  {
    id: 31,
    unit: '致理科技大學',
    unitImage: 'https://github.com/Tami1118/tami-personal/blob/main/src/assets/image/edu_chihlee.png?raw=true',
    department: '企業管理學系',
    during_start: '2014 SEP',
    during_end: '2018 JAN',
    content: '主修企業管理學系，多次參與校內外企劃競賽，培養專案管理基礎'
  },
  {
    id: 32,
    unit: '台北士林高級職業學校',
    unitImage: 'https://github.com/Tami1118/tami-personal/blob/main/src/assets/image/edu_shilin.png?raw=true',
    department: '國際貿易系',
    during_start: '2010 SEP',
    during_end: '2014 JAN',
    content: '積極參與國際貿易、會計檢定及電腦軟體證照，建立專長技術'
  },
])
</script>