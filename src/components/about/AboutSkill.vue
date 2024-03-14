<template>
  <section class="py-10 lg:py-20">
    <h2 data-aos="fade-up" class="flex flex-col items-center mb-10 lg:mb-20">
      <span class="block order-1 text-5 lg:text-6 font-600">專長技能</span> 
      <span class="block bg-primary w-fit px-2 text-white section-rounded text-3 font-600 mb-1">Skills</span>
    </h2>
    <div class="flex flex-col gap-12">
      <div data-aos="fade-up">
        <h3 class="mb-4 text-3h font-600 text-gray-500">- Web Layout</h3>
        <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          <li class="flex flex-col items-center" v-for="skill in skills.find(item => item.category === 'Web Layout').children" :key="skill.id">
            <div class="flex flex-col h-full items-center">
              <div class="w-[72px] h-[72px] p-3 border rounded-[15px] flex justify-center items-center">
                <img :src="skill.imageUrl" class="w-full object-cover" alt="">
              </div>
              <p class="text-center font-500 text-3h mt-1">{{ skill.title }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div data-aos="fade-up">
        <h3 class="mb-4 text-3h font-600 text-gray-500">- JavaScript</h3>
        <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          <li class="flex flex-col items-center" v-for="skill in skills.find(item => item.category === 'JavaScript').children" :key="skill.id">
            <div class="flex flex-col h-full items-center">
              <div class="w-[72px] h-[72px] p-3 border rounded-[15px] flex justify-center items-center">
                <img :src="skill.imageUrl" class="w-full object-cover" alt="">
              </div>
              <p class="text-center font-500 text-3h mt-1">{{ skill.title }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div data-aos="fade-up">
        <h3 class="mb-4 text-3h font-600 text-gray-500">- Framework</h3>
        <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          <li class="flex flex-col items-center" v-for="skill in skills.find(item => item.category === 'Framework').children" :key="skill.id">
            <div class="flex flex-col h-full items-center">
              <div class="w-[72px] h-[72px] p-3 border rounded-[15px] flex justify-center items-center">
                <img :src="skill.imageUrl" class="w-full object-cover" alt="">
              </div>
              <p class="text-center font-500 text-3h mt-1">{{ skill.title }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div data-aos="fade-up">
        <h3 class="mb-4 text-3h font-600 text-gray-500">- Tools</h3>
        <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          <li class="flex flex-col items-center" v-for="skill in skills.find(item => item.category === 'Tools').children" :key="skill.id">
            <div class="flex flex-col h-full items-center">
              <div class="w-[72px] h-[72px] p-3 border rounded-[15px] flex justify-center items-center">
                <img :src="skill.imageUrl" class="w-full object-cover" alt="">
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
</script>