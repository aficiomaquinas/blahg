# Blog personal de Víctor González

[![Cloudflare Pages Status](https://img.shields.io/badge/Cloudflare-Pages-orange)](https://pages.cloudflare.com/)

Este es mi blog personal ("blahg" es la ortografía adecuada para los habitantes de Chicago) construido con [Astro](https://astro.build), y utiliza [TinaCMS](https://tina.io) para editar el contenido.

![cover](https://github.com/cassidoo/blahg/assets/1454517/b56ff04f-9499-48e7-be62-d9b422c4287d)

## Ver el blog

[Tu URL de Cloudflare Pages](https://your-project.pages.dev/)

## Para usar la plantilla

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

## Ejecutar localmente

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando                          | Acción                                                        |
| :------------------------------- | :------------------------------------------------------------ |
| `npm install`                    | Instala las dependencias                                      |
| `npm run dev`                    | Inicia el servidor de desarrollo local en `localhost:4321`    |
| `npx tinacms dev -c 'astro dev'` | Ejecutar manualmente el servidor local si el comando regular no funciona |
| `npm run build`                  | Construye tu sitio de producción en `./dist/`                 |
| `npm run preview`                | Previsualiza tu build localmente, antes de desplegarlo        |

Ve a `localhost:4321/admin/index.html` para ver el CMS y usarlo.

Para Cloudflare Pages, configura estas mismas variables en tu dashboard de Cloudflare Pages.

Si obtienes un error de esquema GraphQL remoto, probablemente necesites actualizar TinaCMS, [detalles aquí](https://tina.io/docs/introduction/faq#how-do-i-resolve-the-local-graphql-schema-doesnt-match-the-remote-graphql-schema-errors)!

**¡Diviértete!**
