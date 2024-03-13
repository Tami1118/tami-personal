<script setup>
import skills from '@/data/skills'
</script>

<template>
  <ul class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
    <li v-for="skill in skills" :key="skill.is">
      <h3 class="text-primary font-bold mb-3">{{ skill.title }}</h3>
      <ul>
        <li v-for="item in skill.item" :key="`${item} 123`" class="list-disc ms-5">{{ item }}</li>
      </ul>
    </li>
  </ul>
</template>