<script setup>
import { computed, ref } from 'vue';
import SectionTitle from '../SectionTitle.vue'

// 取得專案資料
import projects from '@/data/projects';
const projectList = computed(() => {
  return projects
})

// 資料傳到 modal
const tempProject = ref({})

// modal 模板開啟關閉，背景利用 hidden 固定
const isTempOpen = ref(false)
const openModal = () => {
  isTempOpen.value = true
  document.body.style.overflow = 'hidden';
}
const closeModal = () => {
  isTempOpen.value = false
  document.body.style.overflow = 'scroll';
}
</script>

<template>
  <section class="w-[90vw] md:w-[70vw] xl:w-[60vw] mx-auto duration-300 py-12 lg:py-20">
    <SectionTitle titleZh="專案作品" titleEn="Projects" />
    <ul v-if="projectList.length > 0" class="flex flex-col gap-12">
      <li v-for="project in projectList" :key="project.id" class="rounded-[20px] overflow-hidden group border lg:border-0 lg:hover:border lg:hover:border-gray-100 hover:shadow-[8px_6px_0px_1px_rgba(0,0,0,0.1)] hover:-translate-x-2 hover:-translate-y-2 duration-300">
        <div data-aos="fade-up" class="grid lg:grid-cols-2 lg:gap-3 cursor-pointer" @click="tempProject = project, openModal()">
          <div class="p-3 lg:py-5">
            <div class="rounded-[20px] h-[240px] overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-110 duration-300" :src="project.imageUrl" :alt="project.title">
            </div>
          </div>
          <div class="p-4 flex flex-col h-full">
            <span class="text-gray-500 text-3">{{ project.date }}</span>
            <h3 class="font-bold text-4h my-3">{{ project.title }}</h3>
            <p class="text-justify text-gray-400 text-3h">{{ project.content }}</p>
            <ul class="flex gap-3 mt-3 lg:mt-auto">
              <li v-for="tag in project.tags" :key="`${tag} 123`" class="text-3 border rounded-[4px] px-2 text-gray-400">{{ tag }}</li>
            </ul>
            <button class="mt-4 ms-auto group-hover:text-primary">查看詳細內容 <font-awesome-icon icon="fa-solid fa-angles-right" /></button>
          </div>
        </div>
      </li>
    </ul>
  </section>

  <div v-if="isTempOpen" @click.stop="closeModal()" class="fixed top-0 left-0 w-full h-full bg-black/40 backdrop-blur-[1px] z-20 overflow-auto flex justify-center items-center">
    <div data-aos="fade-up" class="bg-white w-full h-full md:max-w-[70vw] xl:max-w-[60vw] md:h-[80vh] md:rounded-[20px] duration-300 overflow-auto modal">
      <div class="sticky top-0 bg-white flex justify-between items-center px-4 py-3 border-b">
        <h3 class="ellipsis font-bold lg:text-4h">{{ tempProject.title }}</h3>
        <button @cllick="closeModal()"><font-awesome-icon icon="fa-solid fa-circle-xmark" class="text-gray-700 hover:text-primary" /></button>
      </div>
      <div>
        <img :src="tempProject.imageUrl" class="w-full h-[320px] object-cover" :alt="tempProject.title">
        <div class="px-6 py-4">
          <div class="flex flex-col lg:flex-row gap-10">
            <div class="lg:basis-7/12">
              <ul class="flex flex-wrap gap-3 mb-3">
                <li v-for="tag in tempProject.tags" :key="`${tag} 123`" class="text-3 border rounded-[4px] px-2 text-gray-400">{{ tag }}</li>
              </ul>
              <h4 class="text-gray-500 font-500 mb-1 text-3">專案介紹</h4>
              <p class="text-justify">{{ tempProject.content }}</p>
            </div>
            <div class="lg:basis-5/12 flex flex-col gap-3 text-3h">
              <div>
                <h4 class="text-gray-500 font-500 mb-1 text-3">專案日期</h4>
                <p class="text-gray-600">{{ tempProject.date }}</p>
              </div>
              <div>
                <h4 class="text-gray-500 font-500 mb-1 text-3">專案連結</h4>
                <a class="hover:text-primary" :href="tempProject.demoUrl" target="_blank">網站 Demo</a> /
                <a class="hover:text-primary" :href="tempProject.githubUrl" target="_blank">專案原始碼</a>
              </div>
              <div>
                <h4 class="text-gray-500 font-500 mb-1 text-3">專案模式</h4>
                <p class="text-gray-600">{{ tempProject.type }}</p>
              </div>
            </div>
          </div>
          <div class="grid lg:grid-cols-2 gap-5 mt-8 text-3h">
            <div>
              <h4 class="text-gray-500 font-500 mb-2 text-3">功能介紹</h4>
              <ul class="list-disc ms-4 flex flex-col gap-1">
                <li v-for="feature in tempProject.features" :key="`${feature} 123`">{{ feature }}</li>
              </ul>
            </div>
            <div>
              <h4 class="text-gray-500 font-500 mb-2 text-3">專案技術</h4>
              <ul class="list-disc ms-4 flex flex-col gap-1">
                <li v-for="skill in tempProject.skills" :key="`${skill} 123`">{{ skill }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.modal::-webkit-scrollbar {
  display: none;
}
</style>