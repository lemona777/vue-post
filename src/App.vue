<template>
  <TheHeader></TheHeader>
  <TheView></TheView>
  <AppAlert :items="alerts"></AppAlert>
</template>

<script setup>
import TheView from '@/layouts/TheView.vue';
import TheHeader from '@/layouts/TheHeader.vue';
import { useAlert } from './composables/alert';
const { alerts } = useAlert();
</script>

<style lang="scss" scoped></style>
