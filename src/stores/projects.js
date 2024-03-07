import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProjectStore = defineStore('projectStore', () => {
  const projects = ref([
    {
      id: '',
      title: '',
      date: '',
      descrtiption: '',
      tag: [],
      url: '',
      imageUrl: '',
    },
  ])

  return { projects }
})
