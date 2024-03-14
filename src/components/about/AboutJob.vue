<template>
  <section class="py-10 lg:py-20">
    <h2 data-aos="fade-up" class="flex flex-col items-center mb-10 lg:mb-20">
      <span class="block order-1 text-5 lg:text-6 font-600">工作經驗</span> 
      <span class="block bg-primary w-fit px-2 text-white section-rounded text-3 font-600 mb-1">Experience</span>
    </h2>
    <ul class="flex flex-col gap-8">
      <li data-aos="fade-up" v-for="job in jobs" :key="job.id" class="grid lg:grid-cols-4 gap-3">
        <div class="flex justify-center items-start">
          <img :src="job.unitImage" class="w-[60px]" :alt="job.unit">
        </div>
        <div>
          <p class="text-primary font-bold lg:text-4h text-center lg:text-start">{{ job.position }}</p>
          <p class="text-3h text-center lg:text-start">{{ job.unit }}</p>
          <p class="text-gray-400 text-3 text-center lg:text-start">{{ job.during_start }} ~ {{ job.during_end }}</p>
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
import { ref } from 'vue'
const jobs = ref([
  {
    id: 21,
    unit: '國立臺灣藝術大學',
    unitImage: 'https://github.com/Tami1118/tami-personal/blob/main/src/assets/image/work_ntua.png?raw=true',
    position: '專案管理師',
    during_start: '2020 JUL',
    during_end: '2023 JAN',
    skills: [
      "專案進度控管及管考文件撰寫",
      "需求訪談及系統功能 Wireframe 規劃",
      "對接軟體商專案人員及前端工程師溝通",
      "專案目標及規劃管理，市場可行性分析",
      "協助政府部門及廠商之間提案及執行溝通",
      "瞭解提案廠商需求，協助分析產業定位及競爭者分析",
      "瞭解政府補助計畫方針，提供廠商計畫申請相關資訊",
    ],

  },
  {
    id: 22,
    unit: '禾樂顧問有限公司',
    unitImage: 'https://github.com/Tami1118/tami-personal/blob/main/src/assets/image/work_holo.png?raw=true',
    position: '專案助理',
    during_start: '2018 JUL',
    during_end: '2020 JAN',
    skills: [
      "控管專案執行進度，確保成果符合預期成效",
      "專案目標確定及評估時程KPI規劃",
      "提案規劃、市場及競爭者分析",
      "聯合廠商資源媒合及專案定位",
    ],
  },
])
</script>