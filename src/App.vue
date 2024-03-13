<script setup>
import HeaderView from './components/layout/HeaderView.vue';
import FooterView from './components/layout/FooterView.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="relative">
    <HeaderView />
    <RouterView />
    <FooterView />
  </div>
</template>