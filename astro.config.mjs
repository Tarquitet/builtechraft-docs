// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Builtechraft Wiki',
      credits: true, // ← Footer "Built with Starlight" como PaperMC
      lastUpdated: true, // ← "Last updated: <fecha>" abajo (usa el historial de git)
      editLink: {
        baseUrl: 'https://github.com/TU_USUARIO/builtechraft-docs/edit/main/', // ← Botón "Edit page"
      },
      logo: {
        src: './src/assets/logo.png',
      },
      description: 'Documentación y Wiki para Builtechraft SMP.',
      social: [
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/4KzRH5DPzx' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/Tarquitet/builtechraft-docs.git' },
      ],
      sidebar: [
        {
          label: 'Inicio',
          link: '/',
        },
        {
          label: '01. GUÍAS',
          items: [{ autogenerate: { directory: '01-guias' } }],
        },
        {
          label: '02. EQUIPO Y STAFF',
          items: [{ autogenerate: { directory: '02-equipo-y-staff' } }],
        },
        {
          label: '03. CARACTERÍSTICAS',
          items: [{ autogenerate: { directory: '03-caracteristicas' } }],
        },
        {
          label: '04. SOPORTE',
          items: [{ autogenerate: { directory: '04-soporte' } }],
        },
        {
          label: '05. HISTORIA DEL SERVIDOR',
          items: [{ autogenerate: { directory: '05-historia' } }],
        },
        {
          label: '06. EXTRAS',
          items: [{ autogenerate: { directory: '06-extras' } }],
        },
      ],
      customCss: ['./src/styles/global.css'],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
