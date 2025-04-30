import '@mdi/font/css/materialdesignicons.css';

import 'vuetify/styles';
import { createVuetify, type ThemeDefinition } from 'vuetify';

const reixDark: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#0F0F10',
    fontPrimary: '#F1F1F1',
    fontSecondary: '#A1A1A1',
    primary: '#1976D2',
    secondary: '#26C6DA',
    'border-color': '#1A1A1A',
  },
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'reixDark',
      themes: { reixDark },
    },
  });
  app.vueApp.use(vuetify);
});
