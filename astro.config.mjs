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
      description: 'Documentación y Wiki para Builtechraft SMP.',
      social: [
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/4KzRH5DPzx' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/tarquitet' },
      ],
      sidebar: [
        {
          label: 'Inicio',
          link: '/', //LISTO
        },
        {
          label: '01. GUÍAS',
          items: [
            { label: '1. ¿Qué es Builtechraft?', slug: '01-guias/01-que-es-builtechraft' }, //LISTO
            { label: '2. Nuestro Discord', slug: '01-guias/02-nuestro-discord' }, //LISTO
            {
              label: '3. Cómo unirse al servidor',
              items: [
                { label: '3.0. Como Unirse', slug: '01-guias/03-como-unirse-al-servidor/03-0-como-hacerlo' },
                { label: '3.1. Java', slug: '01-guias/03-como-unirse-al-servidor/03-1-java' },
                { label: '3.2. Bedrock', slug: '01-guias/03-como-unirse-al-servidor/03-2-bedrock' },
              ],
            },
            { label: '4. Acceso a la Whitelist', slug: '01-guias/04-acceso-a-la-whitelist' }, //LISTO
            { label: '5. Registro en el servidor', slug: '01-guias/05-registro-en-el-servidor' }, //LISTO
          ],
        },
        {
          label: '02. EQUIPO Y STAFF',
          items: [
            { label: '1. Equipo colaborador', slug: '02-equipo-y-staff/01-equipo-colaborador' }, //LISTO
            { label: '2. Fundador del proyecto', slug: '02-equipo-y-staff/02-fundador-del-proyecto' }, //LISTO
          ],
        },
        {
          label: '03. CARACTERÍSTICAS',
          items: [
            { label: '1. Teletransporte con brújulas y magnetitas', slug: '03-caracteristicas/01-lodestone-tp' }, //LISTO
            { label: '2. Cómo sentarse y montar', slug: '03-caracteristicas/02-como-sentar-montar' }, //LISTO
            { label: '3. Cómo cambiar tu skin', slug: '03-caracteristicas/03-como-cambiar-tu-skin' }, //LISTO
            { label: '4. Waypoints y mapa web', slug: '03-caracteristicas/04-waypoints-y-mapa-web' }, //LISTO
            { label: '5. Cabezas decorativas customizadas', slug: '03-caracteristicas/05-cabezas-decorativas' }, //LISTO
          ],
        },
        {
          label: '04. SOPORTE',
          items: [
            { label: '0. Preguntas Frecuentes (FAQ)', slug: '04-soporte/00-preguntas-frecuentes' }, //LISTO
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
                { label: '2.1. Mods permitidos', slug: '04-soporte/02-paquete-de-mods/01-permitidos' },
                { label: '2.2. Mods prohibidos', slug: '04-soporte/02-paquete-de-mods/02-prohibidos' },
                {
                  label: '2.3. Instalación y configuración segura',
                  slug: '04-soporte/02-paquete-de-mods/03-instalacion',
                },
              ],
            },
            {
              label: '3. ¿Qué mods usa el servidor?',
              items: [
                { label: '3.0. Que mods usamos', slug: '04-soporte/03-que-mods-usa/00-que-usa-servidor' }, //LISTO
                { label: '3.1. Lista de mods y datapacks', slug: '04-soporte/03-que-mods-usa/01-lista-mods' }, //LISTO
              ],
            },
            { label: '4. Planes a futuro', slug: '04-soporte/04-planes-a-futuro' }, //LISTO
          ],
        },
        {
          label: '05. HISTORIA DEL SERVIDOR',
          items: [
            { label: '1. Los Inicios: Arte e Ingeniería', slug: '05-historia/01-los-inicios' }, //LISTO
            { label: '2. La evolución', slug: '05-historia/02-la-evolucion' }, //LISTO
            { label: '3. Replicando la seguridad Premium', slug: '05-historia/03-replicando-seguridad' }, //LISTO
            { label: '4. Un proyecto sin rendirse', slug: '05-historia/04-un-proyecto-sin-rendirse' }, //LISTO
          ],
        },
        {
          label: '06. EXTRAS',
          items: [{ label: '0. Inspiraciones', slug: '06-extras/00-inspiraciones' }], //LISTO
        },
      ],
      customCss: ['./src/styles/global.css'],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
