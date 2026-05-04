# PORTAFOLIO_ECONOMISTA

Scaffold inicial de un portafolio profesional para un economista construido con Next.js, TypeScript y Tailwind CSS.

## Estructura
- `src/app`: layout global y pagina principal.
- `src/components`: bloques reutilizables de interfaz.
- `src/data`: contenido editable del sitio.
- `public/cv`: hoja de vida en PDF.
- `public/images`: imagenes publicas del sitio.

## Inicio rapido
```bash
npm install
npm run dev
```

## Personalizacion
1. Edita `src/data/profile.ts` para cambiar nombre, bio, metricas y contactos.
2. Actualiza servicios, publicaciones, proyectos y cursos en `src/data`.
3. Reemplaza los placeholders:
   - `public/cv/vinicio-arcos-cv.pdf`
   - `public/images/profile.jpg`

## Scripts
- `npm run dev`: entorno local.
- `npm run build`: compilacion de produccion.
- `npm run start`: ejecutar build.
- `npm run lint`: lint del proyecto.
