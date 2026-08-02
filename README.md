# Builtechraft

[![Builtechraft docs](src/assets/00.avif)](https://builtechraftwiki.tarquitet.com/)

Builtechraft is a private Minecraft community focused on creativity, exploration, and collaboration. This repository contains the public documentation for the project, including guides, server information, support resources, and onboarding help for new players.

## What Builtechraft is

Builtechraft is built around a friendly and structured server experience with:

- Creative and Survival gameplay in a private community
- Whitelist-based access with Discord support and staff coordination
- Useful features such as waypoints, a web map, decorative heads, and optional mods
- Clear documentation so players can find answers quickly and join with confidence

## About this documentation project

This documentation site was migrated from GitBook to a custom solution built with Astro and Starlight. The move was made to gain more control over the structure, design, and maintenance of the content, while avoiding the limitations that became frustrating over time with GitBook.

The new setup brings several advantages:

- More flexibility to organize the content the way the community needs
- A cleaner and more modern documentation experience
- Simpler long-term maintenance and updates
- Automated deployments so changes are published faster
- A single domain to host the public site and the documentation experience together

### Previous and current documentation

<div style="display:flex; flex-wrap:wrap; gap:0.75rem; margin:0.75rem 0 1rem;">
  <a href="https://tarquitet.gitbook.io/builtechaft-wiki" style="display:inline-block; padding:0.7rem 1rem; border-radius:999px; background:#374151; color:white; text-decoration:none; font-weight:600;">Legacy GitBook</a>
  <a href="https://builtechraftwiki.tarquitet.com/" style="display:inline-block; padding:0.7rem 1rem; border-radius:999px; background:#2563eb; color:white; text-decoration:none; font-weight:600;">Current docs site</a>
</div>

## Quick links

<div style="display:flex; flex-wrap:wrap; gap:0.75rem; margin:0.75rem 0 1rem;">
  <a href="https://builtechraftwiki.tarquitet.com/" style="display:inline-block; padding:0.7rem 1rem; border-radius:999px; background:#2563eb; color:white; text-decoration:none; font-weight:600;">Visit the documentation site</a>
  <a href="https://builtechraft.tarquitet.com/" style="display:inline-block; padding:0.7rem 1rem; border-radius:999px; background:#0f766e; color:white; text-decoration:none; font-weight:600;">Official website</a>
  <a href="https://builtechraftwiki.tarquitet.com/01-guias/03-como-unirse-al-servidor/03-0-como-hacerlo" style="display:inline-block; padding:0.7rem 1rem; border-radius:999px; background:#7c3aed; color:white; text-decoration:none; font-weight:600;">How to join</a>
  <a href="https://builtechraftwiki.tarquitet.com/01-guias/04-acceso-a-la-whitelist" style="display:inline-block; padding:0.7rem 1rem; border-radius:999px; background:#c2410c; color:white; text-decoration:none; font-weight:600;">Whitelist access</a>
  <a href="https://builtechraftwiki.tarquitet.com/04-soporte/00-preguntas-frecuentes" style="display:inline-block; padding:0.7rem 1rem; border-radius:999px; background:#be185d; color:white; text-decoration:none; font-weight:600;">Frequently asked questions</a>
  <a href="README.es.md" style="display:inline-block; padding:0.7rem 1rem; border-radius:999px; background:#475569; color:white; text-decoration:none; font-weight:600;">Versión en español</a>
</div>

[![Official website](src/assets/2_3.avif)](https://builtechraft.tarquitet.com/)

## Development

This documentation site is built with Astro and Starlight.

- Install dependencies: `npm install`
- Start the local preview: `npm run dev`
- Build for production: `npm run build`

Deploys are automated from this repository, and the public site and documentation are published through the same domain ecosystem for a more consistent experience.
