# Cassidy's blog template

[![Cloudflare Pages Status](https://img.shields.io/badge/Cloudflare-Pages-orange)](https://pages.cloudflare.com/)

Hello, welcome. This is a blog ("blahg" is the proper spelling for Chicagoans) template. It's built with [Astro](https://astro.build), and uses [TinaCMS](https://tina.io) to edit the content!

![cover](https://github.com/cassidoo/blahg/assets/1454517/b56ff04f-9499-48e7-be62-d9b422c4287d)

## See the blahg

[Your Cloudflare Pages URL](https://your-project.pages.dev/)

## To use the template

### Para Cloudflare Pages:

1. **Conecta tu repositorio a Cloudflare Pages:**
   - Ve a [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Selecciona "Workers & Pages" > "Create" > "Pages"
   - Conecta tu repositorio de GitHub

2. **Configura las variables de entorno en Cloudflare Pages:**
   - Ve a tu proyecto en Cloudflare Pages
   - Configuración > Variables de entorno
   - Agrega las siguientes variables:
   ```
   NEXT_PUBLIC_TINA_CLIENT_ID=tu_client_id_aqui
   TINA_TOKEN=tu_token_aqui
   TINA_SEARCH_TOKEN=tu_search_token_aqui
   ```

3. **Obtén las credenciales de TinaCMS:**
   - Haz una cuenta en [tina.io](https://tina.io/)
   - Crea un nuevo proyecto
   - Copia las credenciales desde tu dashboard de TinaCMS

4. **Configura tu sitio:**
   - Actualiza `astro.config.mjs` con tu dominio de Cloudflare Pages
   - Edita `src/config.js` con tu configuración personalizada
   - Actualiza la línea 1 de `public/robots.txt` con tu URL
   - Agrega tus enlaces en `src/components/Header.astro`
   - Actualiza la introducción en `pages/about.md`
   - Edita las imágenes en `public/` (opcional)
   - Edita las etiquetas que quieras en `tina/config.js` (opcional)

5. **Configuración de build en Cloudflare Pages:**
   - Comando de build: `npm run build`
   - Directorio de build: `dist`
   - Variable de entorno: Node.js version = `18` o superior

Después de esto, puedes agregar tu contenido a `posts/` con archivos Markdown, ¡o con TinaCMS yendo a `tuurl.pages.dev/admin`!

### Para otras plataformas de hosting:

- Connect to your chosen hosting provider (see Deploy to Netlify button below if you want to go that route, otherwise use the GitHub template button above and pick a different one)
- Make an account at [tina.io](https://tina.io/)
- Add your TinaCMS keys (see below)
- Update `astro.config.mjs` with your domain
- Edit `src/config.js`
- Add your URL in line 1 of `public/robots.txt`
- Add your links in `src/components/Header.astro`
- Update the intro in `pages/about.md`
- Edit the images in `public/` (optional)
- Edit whatever tags you want in `tina/config.js` (optional)

After this, you can add your content to `posts/` with Markdown files, or with TinaCMS by going to `yoururl.com/admin`!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/blahg)

And finally, please ping me (via social media, or in a GitHub Issue, or whatever) if you use this template! I would love to see your writing and subscribe to your RSS feed!

## Run it yourself

All commands are run from the root of the project, from a terminal:

| Command                          | Action                                                        |
| :------------------------------- | :------------------------------------------------------------ |
| `npm install`                    | Installs dependencies                                         |
| `npm run dev`                    | Starts local dev server at `localhost:4321`                   |
| `npx tinacms dev -c 'astro dev'` | Manually run local server if the regular command doesn't work |
| `npm run build`                  | Build your production site to `./dist/`                       |
| `npm run preview`                | Preview your build locally, before deploying                  |

You go to `localhost:4321/admin/index.html` to see the CMS and use it.


Para Cloudflare Pages, configura estas mismas variables en tu dashboard de Cloudflare Pages.

If you get a remote GraphQL schema error, chances are you need to update TinaCMS, [details here](https://tina.io/docs/introduction/faq#how-do-i-resolve-the-local-graphql-schema-doesnt-match-the-remote-graphql-schema-errors)!

**Have fun!**
