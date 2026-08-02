// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Builtechraft Wiki',
      logo: {
        src: './src/assets/logo.png',
      },
      description: 'Documentación y Wiki para el proyecto Builtechraft.',
      social: [
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/4KzRH5DPzx' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/tarquitet' },
      ],
      sidebar: [
        {
          label: 'Inicio',
          link: '/',
        },
        {
          label: 'GUÍAS',
          items: [
            { label: '1. ¿Qué es Builtechraft?', slug: 'guias/que-es-builtechraft' },
            { label: '2. Nuestro Discord', slug: 'guias/nuestro-discord' },
            {
              label: '3. Cómo unirse al servidor',
              items: [
                { label: '3.1. Java', slug: 'guias/como-unirse-al-servidor/java' },
                { label: '3.2. Bedrock', slug: 'guias/como-unirse-al-servidor/bedrock' },
              ],
            },
            { label: '4. Acceso a la Whitelist', slug: 'guias/acceso-a-la-whitelist' },
            { label: '5. Registro en el servidor', slug: 'guias/registro-en-el-servidor' },
          ],
        },
        {
          label: 'EQUIPO Y STAFF',
          items: [
            { label: '1. Equipo colaborador', slug: 'equipo-y-staff/equipo-colaborador' },
            { label: '2. Fundador del proyecto', slug: 'equipo-y-staff/fundador-del-proyecto' },
          ],
        },
        {
          label: 'CARACTERÍSTICAS DEL SERVIDOR',
          items: [
            { label: '1. Teletransporte con brújulas y magnetitas', slug: 'caracteristicas/lodestone-tp' },
            { label: '2. Sentarse y montarse en jugadores', slug: 'caracteristicas/sentarse-y-montarse' },
            { label: '3. Cómo cambiar tu skin', slug: 'caracteristicas/como-cambiar-tu-skin' },
            { label: '3. Waypoints y mapa web', slug: 'caracteristicas/waypoints-y-mapa-web' },
            { label: '4. Cabezas decorativas customizadas', slug: 'caracteristicas/cabezas-decorativas' },
          ],
        },
        {
          label: 'SOPORTE',
          items: [
            { label: '0. Preguntas Frecuentes (FAQ)', slug: 'soporte/preguntas-frecuentes' },
            {
              label: '1. Sobre Launchers',
              items: [
                { label: '1.1. Launcher para no premium', slug: 'soporte/sobre-launchers/no-premium' },
                { label: '1.2. Launcher para Premium', slug: 'soporte/sobre-launchers/premium' },
                { label: '1.3. Launchers no recomendados', slug: 'soporte/sobre-launchers/no-recomendados' },
                { label: '1.4. Cuenta Ely.by', slug: 'soporte/cuenta-ely-by' },
              ],
            },
            {
              label: '2. Paquete de mods y optimizaciones',
              items: [
                { label: '2.1. Mods permitidos', slug: 'caracteristicas/mods-permitidos' },
                { label: '2.2. Mods prohibidos y sanciones', slug: 'soporte/paquete-de-mods/prohibidos' },
                { label: '2.3. Instalación y configuración segura', slug: 'soporte/paquete-de-mods/instalacion' },
              ],
            },
            {
              label: '3. ¿Qué mods usa el servidor?',
              items: [{ label: '3.1. Lista de mods y datapacks', slug: 'soporte/que-mods-usa/lista' }],
            },
            { label: '4. Planes a futuro', slug: 'soporte/planes-a-futuro' },
          ],
        },
        {
          label: 'HISTORIA DEL SERVIDOR',
          items: [
            { label: '1. Los Inicios: Arte e Ingeniería', slug: 'historia/los-inicios' },
            { label: '2. La evolución', slug: 'historia/la-evolucion' },
            { label: '3. Replicando la seguridad Premium', slug: 'historia/replicando-seguridad' },
            { label: '4. Un proyecto sin rendirse', slug: 'historia/un-proyecto-sin-rendirse' },
          ],
        },
        {
          label: 'EXTRA',
          items: [{ label: '0. Inspiraciones', slug: 'historia/inspiraciones' }],
        },
      ],
      customCss: ['./src/styles/global.css'],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
