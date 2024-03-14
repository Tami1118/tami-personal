<script setup>
import HeaderView from './components/layout/HeaderView.vue';
import FooterView from './components/layout/FooterView.vue';
import GoTop from './components/GoTop.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="relative">
    <HeaderView />
    <RouterView />
    <GoTop />
    <FooterView />
  </div>
</template>