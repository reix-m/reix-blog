import '@mdi/font/css/materialdesignicons.css';

import 'vuetify/styles';
import { createVuetify, type ThemeDefinition } from 'vuetify';

const reixDark: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#1565C0',
    secondary: '#1E88E5',
    'font-primary': '#B0BEC5',
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
