<script setup>
const { titleZh, titleEn } = defineProps(["titleZh", "titleEn"])
</script>

<template>
  <h2 data-aos="fade-up" class="flex flex-col items-center mb-10 lg:mb-20">
    <span class="block order-1 text-5 lg:text-6 font-600">{{ titleZh }}</span>
    <span class="block bg-primary text-white px-2 section-rounded text-3 font-600 mb-1">{{ titleEn }}</span>
  </h2>
</template>