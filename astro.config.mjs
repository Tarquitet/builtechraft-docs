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
          label: '01. GUÍAS',
          items: [
            { label: '1. ¿Qué es Builtechraft?', slug: '01-guias/01-que-es-builtechraft' },
            { label: '2. Nuestro Discord', slug: '01-guias/02-nuestro-discord' },
            {
              label: '3. Cómo unirse al servidor',
              items: [
                { label: '3.1. Java', slug: '01-guias/03-como-unirse-al-servidor/03-1-java' },
                { label: '3.2. Bedrock', slug: '01-guias/03-como-unirse-al-servidor/03-2-bedrock' },
              ],
            },
            { label: '4. Acceso a la Whitelist', slug: '01-guias/04-acceso-a-la-whitelist' },
            { label: '5. Registro en el servidor', slug: '01-guias/05-registro-en-el-servidor' },
          ],
        },
        {
          label: '02. EQUIPO Y STAFF',
          items: [
            { label: '1. Equipo colaborador', slug: '02-equipo-y-staff/01-equipo-colaborador' },
            { label: '2. Fundador del proyecto', slug: '02-equipo-y-staff/02-fundador-del-proyecto' },
          ],
        },
        {
          label: '03. CARACTERÍSTICAS',
          items: [
            { label: '1. Teletransporte con brújulas y magnetitas', slug: '03-caracteristicas/01-lodestone-tp' },
            { label: '2. Mods permitidos', slug: '03-caracteristicas/02-mods-permitidos' },
            { label: '3. Sentarse y montarse en jugadores', slug: '03-caracteristicas/03-sentarse-y-montarse' },
            { label: '4. Cómo cambiar tu skin', slug: '03-caracteristicas/04-como-cambiar-tu-skin' },
            { label: '5. Waypoints y mapa web', slug: '03-caracteristicas/05-waypoints-y-mapa-web' },
            { label: '6. Cabezas decorativas customizadas', slug: '03-caracteristicas/06-cabezas-decorativas' },
          ],
        },
        {
          label: '04. SOPORTE',
          items: [
            { label: '0. Preguntas Frecuentes (FAQ)', slug: '04-soporte/00-preguntas-frecuentes' },
            {
              label: '1. Sobre Launchers',
              items: [
                { label: '1.1. Launcher para no premium', slug: '04-soporte/01-sobre-launchers/01-no-premium' },
                { label: '1.2. Launcher para Premium', slug: '04-soporte/01-sobre-launchers/02-premium' },
                { label: '1.3. Launchers no recomendados', slug: '04-soporte/01-sobre-launchers/03-no-recomendados' },
                { label: '1.4. Cuenta Ely.by', slug: '04-soporte/01-sobre-launchers/04-cuenta-ely-by' },
              ],
            },
            {
              label: '2. Paquete de mods y optimizaciones',
              items: [
                { label: '2.1. Mods permitidos', slug: '03-caracteristicas/02-mods-permitidos' },
                { label: '2.2. Mods prohibidos y sanciones', slug: '04-soporte/02-paquete-de-mods/02-prohibidos' },
                {
                  label: '2.3. Instalación y configuración segura',
                  slug: '04-soporte/02-paquete-de-mods/03-instalacion',
                },
              ],
            },
            {
              label: '3. ¿Qué mods usa el servidor?',
              items: [{ label: '3.1. Lista de mods y datapacks', slug: '04-soporte/03-que-mods-usa/01-lista' }],
            },
            { label: '4. Planes a futuro', slug: '04-soporte/04-planes-a-futuro' },
          ],
        },
        {
          label: '05. HISTORIA DEL SERVIDOR',
          items: [
            { label: '1. Los Inicios: Arte e Ingeniería', slug: '05-historia/01-los-inicios' },
            { label: '2. La evolución', slug: '05-historia/02-la-evolucion' },
            { label: '3. Replicando la seguridad Premium', slug: '05-historia/03-replicando-seguridad' },
            { label: '4. Un proyecto sin rendirse', slug: '05-historia/04-un-proyecto-sin-rendirse' },
            { label: '0. Inspiraciones', slug: '05-historia/00-inspiraciones' },
          ],
        },
      ],
      customCss: ['./src/styles/global.css'],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
