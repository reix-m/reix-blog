<template>
  <v-row>
    <v-col cols="12" md="4" v-for="(item, index) in projectsList">
      <v-card variant="outlined" color="grey-darken-3" rounded="lg">
        <template #append v-if="item.inDevelopment">
          <span class="text-subtitle-2 text-font-primary">Em Desenvolvimento</span>
          <v-icon icon="mdi-account-hard-hat" color="grey-lighten-1" />
        </template>
        <template #title>
          <span class="text-white text-subtitle-1 font-weight-medium">{{ item.title }}</span>
        </template>
        <v-card-text>
          <div class="text-body-1 card-text text-font-primary">{{ item.description }}</div>
          <div class="d-flex align-center ga-1 mt-4 flex-wrap">
            <v-chip color="secondary" v-for="(badge, badgeIndex) in item.pills" :key="badgeIndex">{{ badge }}</v-chip>
          </div>
        </v-card-text>
        <v-card-actions>
          <div class="d-flex align-center ga-1 text-white">
            <v-btn
              v-for="(link, linkIndex) in item.links"
              :key="linkIndex"
              variant="outlined"
              density="comfortable"
              target="_blank"
              color="grey-darken-3"
              rounded="lg"
              :href="link.src"
            >
              <template #prepend>
                <v-icon :icon="link.icon" color="white" />
              </template>
              <span class="text-white text-none">{{ link.name }}</span>
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
type ProjectLiks = { src: string; icon: string; name: string };
type Project = { title: string; description: string; pills: string[]; links: ProjectLinks[]; inDevelopment: boolean };
const projectsList: Project[] = [
  {
    title: 'Mrj Mobility',
    description:
      'Plataforma de aluguel de bicicletas com monitoramento em tempo real, basta escanear o QR code e sair pedalando. Desenvolvido com NestJS, Postgres e Vue.',
    pills: ['nodejs', 'nestjs', 'typescript', 'vue', 'nuxt', 'postgres'],
    links: [{ src: 'https://github.com/reix-m/mrj-mobility-api', icon: 'mdi-github', name: 'GitHub' }],
    inDevelopment: true,
  },
  {
    title: 'Livefit',
    description:
      'Plataforma que conecta pacientes à nutricionistas. Permite que nutricionistas criem e gerenciem rotinas de alimentação para seus paciantes. Desenvolvido com Typescript, Mysql e Vue.',
    pills: ['nodejs', 'express', 'typescript', 'vue', 'nuxt', 'mysql'],
    links: [{ src: 'https://github.com/reix-m/livefit-api', icon: 'mdi-github', name: 'GitHub' }],
    inDevelopment: false,
  },
];
</script>

<style scoped>
.card-text {
  height: 150px;
}
</style>
