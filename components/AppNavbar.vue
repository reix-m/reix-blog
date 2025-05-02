<template>
  <v-app-bar color="background" flat>
    <v-container class="d-flex align-center justify-end">
      <v-list class="d-flex align-center" bg-color="transparent">
        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.to"
          link
          variant="plain"
          density="compact"
          class="d-flex align-center justify-center"
          color="fontPrimary"
        >
          <v-list-item-title class="d-flex align-center">
            <v-icon :icon="item.icon" v-if="item.icon" class="mx-2" />
            <span v-if="item.title">{{ item.title }}</span>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
const menuItems: { title: string; icon: string; to: string }[] = [
  { title: null, icon: 'mdi-home', to: '#inicio' },
  { title: 'Sobre', icon: null, to: '#sobre' },
  { title: 'Contato', icon: null, to: '#contato' },
  { title: 'Projetos', icon: null, to: '#projetos' },
];
</script>
