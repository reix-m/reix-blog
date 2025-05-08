<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-card variant="outlined" color="grey-darken-3" :height="150" rounded="lg">
        <template #prepend>
          <div class="card-icon-bg rounded-lg">
            <v-icon icon="mdi-console-line" color="primary" size="small" class="ma-1" />
          </div>
        </template>
        <template #title>
          <span class="text-white text-subtitle-1 font-weight-medium">Linguagens de Programação</span>
        </template>
        <v-card-text>
          <div class="d-flex align-center justify-start ga-2 flex-wrap">
            <v-chip v-for="(item, index) in skillsProgrammingList" :key="index">
              <template #prepend>
                <skill-icon :src="item.src" :icon="item.icon" />
              </template>
              <span class="mx-1 text-white">{{ item.name }}</span>
            </v-chip>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-card variant="outlined" color="grey-darken-3" prepend-icon="mdi-console-line" :height="150" rounded="lg">
        <template #prepend>
          <div class="card-icon-bg rounded-lg">
            <v-icon icon="mdi-bookshelf" color="primary" size="small" class="ma-1" />
          </div>
        </template>
        <template #title>
          <span class="text-white text-subtitle-1 font-weight-medium">Bibliotecas & Frameworks</span>
        </template>
        <v-card-text>
          <div class="d-flex align-center justify-start ga-2 flex-wrap">
            <v-chip v-for="(item, index) in skillsLibsFrameworksList" :key="index">
              <template #prepend>
                <skill-icon :src="item.src" :icon="item.icon" />
              </template>
              <span class="mx-1 text-white">{{ item.name }}</span>
            </v-chip>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" md="6">
      <v-card variant="outlined" color="grey-darken-3" prepend-icon="mdi-console-line" :height="150" rounded="lg">
        <template #prepend>
          <div class="card-icon-bg rounded-lg">
            <v-icon icon="mdi-database-outline" color="primary" size="small" class="ma-1" />
          </div>
        </template>
        <template #title>
          <span class="text-white text-subtitle-1 font-weight-medium">Banco de Dados</span>
        </template>
        <v-card-text>
          <div class="d-flex align-center justify-start ga-2 flex-wrap">
            <v-chip v-for="(item, index) in skillsDatabasesList" :key="index">
              <template #prepend>
                <skill-icon :src="item.src" :icon="item.icon" />
              </template>
              <span class="mx-1 text-white">{{ item.name }}</span>
            </v-chip>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-card variant="outlined" color="grey-darken-3" prepend-icon="mdi-console-line" :height="150" rounded="lg">
        <template #prepend>
          <div class="card-icon-bg rounded-lg">
            <v-icon icon="mdi-tools" color="primary" size="small" class="ma-1" />
          </div>
        </template>
        <template #title>
          <span class="text-white text-subtitle-1 font-weight-medium">Ferramentas</span>
        </template>
        <v-card-text>
          <div class="d-flex align-center justify-start ga-2 flex-wrap">
            <v-chip v-for="(item, index) in skillsToolsList" :key="index">
              <template #prepend>
                <skill-icon :src="item.src" :icon="item.icon" />
              </template>
              <span class="mx-1 text-white">{{ item.name }}</span>
            </v-chip>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
type SkillItem = {
  icon: string;
  name: string;
};
const skillsProgrammingList: SkillItem[] = [
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    name: 'JavaScript',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    name: 'TypeScript',
  },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg', name: 'Go' },
];

const skillsLibsFrameworksList: SkillItem[] = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg', name: 'NestJS' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', name: 'Node.js' },
  { icon: 'devicon-express-original', name: 'Express' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg', name: 'Axios' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg', name: 'Vue.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg', name: 'Nuxtjs' },
];

const skillsDatabasesList: SkillItem[] = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg', name: 'Redis' },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    name: 'MongoDB',
  },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', name: 'MySQL' },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    name: 'PostgresSQL',
  },
];

const skillsToolsList: SkillItem[] = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', name: 'Linux' },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    name: 'Docker',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg',
    name: 'Kubernetes',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    name: 'Git',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    name: 'AWS',
  },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg', name: 'Grafana' },
];
</script>

<style scoped>
.card-icon-bg {
  background: rgba(21, 101, 192, 0.3);
}
</style>
