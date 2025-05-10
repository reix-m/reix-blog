<template>
  <v-main class="mt-4 text-font-primary">
    <section id="inicio">
      <v-container class="d-flex justify-center">
        <v-row class="d-flex justify-center align-center">
          <v-col cols="12" md="6" class="d-flex justify-center justify-md-end" v-if="mobile">
            <div>
              <profile-image />
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="mb-4">
              <h1 class="text-h2 font-weight-bold text-white">Olá, eu sou Maycon Reis</h1>
              <h2 class="text-h4 text-primary">Backend Developer</h2>
              <p class="text-subtitle-1">
                Desenvolvedor de software backend focado em criar soluções escaláveis, performáticas e robustas.
              </p>
            </div>
            <div>
              <v-btn
                variant="flat"
                rounded="lg"
                color="blue-darken-3"
                class="mr-2 text-none text-high-emphasis"
                to="#contato"
              >
                Contate-me
              </v-btn>
              <v-btn variant="outlined" class="mr-2 text-none text-white" to="#projetos" rounded="lg"
                >Ver Projetos</v-btn
              >
            </div>
          </v-col>
          <v-col cols="12" md="6" class="d-flex justify-center justify-md-end" v-if="!mobile">
            <div>
              <profile-image />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section id="sobre">
      <v-container class="d-flex justify-start">
        <v-row>
          <v-col cols="12" md="8">
            <div class="mb-6">
              <h2 class="text-h4 font-weight-bold text-white">Sobre</h2>
              <v-divider color="primary" class="mb-4 border-opacity-100 rounded" :thickness="4" :length="40" />
              <p class="text-body-1">
                Sou um desenvolvedor backend com mais de 4 anos de experiência em desenvolvimento de APIs RESTful,
                microsserviços e integrações entre sistemas. Tenho conhecimento em Node.js, Go, NestJS, Typescript,
                MongoDB, PostgresSQL, Docker e outras tecnologias que utilizo para entregar soluções sólidas e de
                qualidade.
              </p>
              <p class="text-body">
                Atualmente, trabalho como Desenvolvedor Backend na
                <span href="" class="text-primary text-decoration-none font-weight-medium">Multi</span>, desenvolvendo
                soluções para o departamento de pós-venda. Também sou formado em
                <span class="text-primary text-decoration-none font-weight-medium">
                  Análise e Desenvolvimento de Sistemas
                </span>
                pela Impacta.
              </p>
            </div>
            <div class="mb-12">
              <v-btn
                variant="text"
                rounded="lg"
                class="mr-2 text-none text-high-emphasis"
                href="/resume.pdf"
                append-icon="mdi-open-in-new"
				target="_blank"
              >
                Ver Currículo Completo
              </v-btn>
            </div>
            <div class="mb-4">
              <div class="d-flex align-center ga-2">
                <v-icon icon="mdi-briefcase-outline" color="primary" />
                <h3 class="text-h6 text-white">Experiências</h3>
              </div>
              <my-experience />
            </div>
            <div class="mb-4">
              <div class="d-flex align-center ga-2">
                <v-icon icon="mdi-account-school-outline" color="primary" />
                <h3 class="text-h6 text-white">Educação</h3>
              </div>
              <my-education />
            </div>
            <div class="mb-4">
              <div class="d-flex align-center ga-2 mb-2">
                <v-icon icon="mdi-code-block-braces" color="primary" />
                <h3 class="text-h6 text-white">Habilidades</h3>
              </div>
              <skill-icons-list />
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <section id="contato">
              <div class="d-flex flex-column align-start align-md-end">
                <h2 class="text-h4 font-weight-bold text-white">Contato</h2>
                <v-divider color="primary" class="mb-4 border-opacity-100 rounded" :thickness="4" :length="40" />
                <p class="text-body-1 text-start text-md-end mb-2">
                  Tem alguma pergunta ou gostaria de criar algo juntos? Sinta-se livre para me enviar uma mensagem.
                </p>
                <h3 class="text-h6 text-white mb-2">Informações de Contato</h3>
                <v-sheet color="transparent" class="mb-2">
                  <div class="d-flex align-center justify-start justify-md-end ga-1">
                    <v-icon icon="mdi-email-outline" color="primary" size="small" />
                    <span class="text-white text-subtitle-1 font-weight-medium">Email</span>
                  </div>
                  <div class="d-flex justify-end align-center">
                    <span>{{ appConfig.mail }}</span>
                  </div>
                </v-sheet>
                <v-sheet color="transparent" class="mb-2">
                  <div class="d-flex align-center justify-start justify-md-end ga-1">
                    <v-icon icon="mdi-map-marker-outline" color="primary" size="small" />
                    <span class="text-white text-subtitle-1 font-weight-medium">Localização</span>
                  </div>
                  <div class="d-flex justify-start justify-md-end align-center">
                    <span>{{ appConfig.city }}, {{ appConfig.state }}</span>
                  </div>
                </v-sheet>
                <h3 class="text-h6 text-white mb-2">Conecte-se comigo</h3>
                <div class="d-flex align-center justify-start justify-md-end ga-1">
                  <v-btn
                    :href="`mailto:${appConfig.mail}`"
                    round
                    variant="tonal"
                    color="font-primary"
                    icon="mdi-email-outline"
                  >
                  </v-btn>
                  <v-btn
                    :href="appConfig.links.github"
                    variant="tonal"
                    icon="mdi-github"
                    target="_blank"
                    round
                    color="font-primary"
                  >
                  </v-btn>
                  <v-btn
                    :href="appConfig.links.linkedin"
                    variant="tonal"
                    icon="mdi-linkedin"
                    target="_blank"
                    round
                    color="font-primary"
                  >
                  </v-btn>
                </div>
              </div>
            </section>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section id="projetos">
      <v-container class="d-flex justify-start">
        <v-row>
          <v-col cols="12">
            <div class="mb-4">
              <h2 class="text-h4 font-weight-bold text-white">Projetos</h2>
              <v-divider color="primary" class="mb-4 border-opacity-100 rounded" :thickness="4" :length="40" />
              <projects-list />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-main>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';

const { mobile } = useDisplay();
const appConfig = useAppConfig();
</script>
