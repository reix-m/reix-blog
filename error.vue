<template>
  <v-container class="fill-height">
    <v-row class="full-height d-flex flex-column align-center justify-center">
      <img src="~/assets/image/404.svg" alt="404" width="300" class="mb-6" />
      <h1 class="display-1 font-weight-bold">404</h1>
      <h2 class="font-weight-light mb-4">Página não encontrada</h2>
      <v-btn @click="goHome" variant="flat" rounded="lg" color="blue-darken-3">Voltar para a página inicial</v-btn>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  router.push('/');
};
</script>

<style scoped>
.full-height {
  height: 100dvh;
}
</style>
