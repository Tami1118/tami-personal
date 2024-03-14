<template>
  <div data-aos="fade-up" data-aos-during="300" v-if="showButton" @click="goTop()" class="fixed bottom-[10%] right-[4%] lg:right-[12%] text-gray-400 hover:text-primary font-bold flex flex-col justify-center items-center cursor-pointer">
    <font-awesome-icon icon="fa-solid fa-circle-arrow-up" class="text-7 mb-2" />
    <span class="block">Top</span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const showButton = ref(false);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  if (window.scrollY > 200) {
    showButton.value = true;
  } else {
    showButton.value = false;
  }
}

const goTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>