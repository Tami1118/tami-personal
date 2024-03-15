<template>
  <section class="py-10 lg:py-20">
    <SectionTitle titleZh="專長技能" titleEn="Skills" />
    <div class="flex flex-col gap-12">
      <div data-aos="fade-up">
        <h3 class="mb-4 text-3h font-600 text-primary text-center">- Web Layout -</h3>
        <ul class="grid grid-cols-3 md:grid-cols-5 gap-6">
          <li class="flex flex-col items-center" v-for="skill in skills.find(item => item.category === 'Web Layout').children" :key="skill.id">
            <div class="flex flex-col h-full items-center">
              <div class="w-[72px] h-[72px] p-3 border rounded-[15px] flex justify-center items-center">
                <img :src="skill.imageUrl" class="max-h-[48px] object-cover" :alt="skill.title">
              </div>
              <p class="text-center font-500 text-3h mt-1">{{ skill.title }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div data-aos="fade-up">
        <h3 class="mb-4 text-3h font-600 text-primary text-center">- JavaScript -</h3>
        <ul class="grid grid-cols-3 md:grid-cols-5 gap-6">
          <li class="flex flex-col items-center" v-for="skill in skills.find(item => item.category === 'JavaScript').children" :key="skill.id">
            <div class="flex flex-col h-full items-center">
              <div class="w-[72px] h-[72px] p-3 border rounded-[15px] flex justify-center items-center">
                <img :src="skill.imageUrl" class="max-h-[48px] object-cover" :alt="skill.title">
              </div>
              <p class="text-center font-500 text-3h mt-1">{{ skill.title }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div data-aos="fade-up">
        <h3 class="mb-4 text-3h font-600 text-primary text-center">- Framework -</h3>
        <ul class="grid grid-cols-3 md:grid-cols-5 gap-6">
          <li class="flex flex-col items-center" v-for="skill in skills.find(item => item.category === 'Framework').children" :key="skill.id">
            <div class="flex flex-col h-full items-center">
              <div class="w-[72px] h-[72px] p-3 border rounded-[15px] flex justify-center items-center">
                <img :src="skill.imageUrl" class="max-h-[48px] object-cover" :alt="skill.title">
              </div>
              <p class="text-center font-500 text-3h mt-1">{{ skill.title }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div data-aos="fade-up">
        <h3 class="mb-4 text-3h font-600 text-primary text-center">- Tools -</h3>
        <ul class="grid grid-cols-3 md:grid-cols-5 gap-6">
          <li class="flex flex-col items-center" v-for="skill in skills.find(item => item.category === 'Tools').children" :key="skill.id">
            <div class="flex flex-col h-full items-center">
              <div class="w-[72px] h-[72px] p-3 border rounded-[15px] flex justify-center items-center">
                <img :src="skill.imageUrl" class="max-h-[48px] object-cover" :alt="skill.title">
              </div>
              <p class="text-center font-500 text-3h mt-1">{{ skill.title }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import skills from '@/data/skills'
import SectionTitle from '../SectionTitle.vue'
</script>