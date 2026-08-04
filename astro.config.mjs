// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Builtechraft Wiki',
      credits: true,
      lastUpdated: true,
      editLink: {
        baseUrl: 'https://github.com/TU_USUARIO/builtechraft-docs/edit/main/',
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
          label: 'INTRODUCCIÓN',
          items: [{ autogenerate: { directory: 'introduction' } }],
        },
        {
          label: 'PRIMEROS PASOS',
          items: [{ autogenerate: { directory: 'getting-started' } }],
        },
        {
          label: 'MECÁNICAS',
          items: [{ autogenerate: { directory: 'gameplay' } }],
        },
        {
          label: 'TÉCNICO',
          items: [{ autogenerate: { directory: 'technical' } }],
        },
        {
          label: 'COMUNIDAD',
          items: [{ autogenerate: { directory: 'community' } }],
        },
        {
          label: 'EXTRAS',
          items: [{ autogenerate: { directory: 'extras' } }],
        },
      ],
      customCss: ['./src/styles/global.css'],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
