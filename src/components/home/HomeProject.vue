<script setup>
import { computed, ref } from 'vue';
import projects from '@/data/projects';
const projectList = computed (() => {
  return projects.reverse()
})
const tempProject = ref({})
const isTempOpen = ref(false)
</script>

<template>
  <section id="projects" class="w-[90vw] md:w-[70vw] xl:w-[60vw] mx-auto duration-300 py-10 lg:py-20">
    <h2 data-aos="fade-up" class="bg-primary w-fit px-4 py-2 text-white section-rounded mx-auto text-5 font-500 mb-10 lg:mb-20">專案作品 Projects</h2>
    <ul v-if="projectList.length > 0" class="flex flex-col gap-12">
      <li v-for="project in projectList" :key="project.id" class="rounded-[20px] overflow-hidden group hover:border hover:border-gray-100 hover:shadow-[8px_6px_0px_1px_rgba(0,0,0,0.1)] hover:-translate-x-2 hover:-translate-y-2 duration-300 cursor-pointer">
        <div data-aos="fade-up" class="grid lg:grid-cols-2 lg:gap-3" @click="tempProject = project, isTempOpen = true">
          <div class="p-3">
            <div class="rounded-[20px] h-[240px] overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-110 duration-300" :src="project.imageUrl" :alt="project.title">
            </div>
          </div>
          <div class="p-4 flex flex-col h-full">
            <span class="text-gray-500 text-3">{{ project.date }}</span>
            <h3 class="font-bold text-4h my-3">{{ project.title }}</h3>
            <p class="text-gray-400 text-justify text-3h">{{ project.content }}</p>
            <ul class="flex gap-3 mt-3 lg:mt-auto">
              <li v-for="tag in project.tags" :key="`${tag} 123`" class="text-3 border rounded-[4px] px-2 text-gray-400">{{ tag }}</li>
            </ul>
            <button class="mt-4 ms-auto group-hover:text-primary" @click="tempProject = project, isTempOpen = true">查看詳細內容 <font-awesome-icon icon="fa-solid fa-angles-right" /></button>
          </div>
        </div>
      </li>
    </ul>
  </section>

  <div @click.stop="isTempOpen = false" v-if="isTempOpen" class="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-[1px] z-20 flex justify-center items-center">
    <div data-aos="fade-up" @click.stop class="relative bg-white md:rounded-[20px] w-full md:max-w-[60vw] h-full md:h-[80vh] overflow-auto">
      <div class="sticky top-0 flex bg-white justify-between px-4 py-3">
        <h3 class="font-bold">{{ tempProject.title }}</h3>
        <button @click="isTempOpen = false"><font-awesome-icon icon="fa-solid fa-circle-xmark" class="text-gray-700 hover:text-primary" /></button>
      </div>
      <div class="overflow-auto">
        <img :src="tempProject.imageUrl" class="h-[40vh] w-full object-cover" :alt="tempProject.title">
        <div class="p-6 lg:flex gap-6">
          <div class="lg:basis-7/12">
            <p class="text-justify text-gray-500">{{ tempProject.content }}</p>
            <ul>
              <li>
                <h4 class="text-gray-600 font-500">專案技術</h4>
                <ul>
                  <li v-for="skill in tempProject.skills" class="" :key="`${skill} 123`">{{ skill }}</li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="lg:basis-5/12">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.section-rounded {
  border-radius: 20px 20px 20px 0;
}
</style>