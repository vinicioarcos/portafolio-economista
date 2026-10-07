# Sitio web de Edwin Vinicio Arcos

Página estática con una escena 3D (three.js) que cambia de figura con el scroll.

## Estructura

- `index.html`: todo el sitio (HTML, CSS y JavaScript en un solo archivo).
- `vercel.json`: configuración mínima para Vercel.

## Idiomas

El sitio está en inglés y un botón en la navegación muestra la versión en español.

- El **inglés** vive en el HTML: es lo que ven los buscadores y quien tenga el JavaScript desactivado.
- El **español** vive en el diccionario `ES` del primer bloque `<script>` de `index.html`.
- Cada texto traducible lleva `data-i18n="clave"` en el HTML y una entrada con la misma clave en `ES`. Para cambiar contenido hay que editar los dos lados.
- Los pies de las figuras 3D usan `data-caption` (inglés) y `data-caption-es` en cada `<section>`.
- El título de la página, la meta descripción y el texto del botón están en el objeto `DOC`.
- Los títulos de artículos y libros no se traducen: se citan como se publicaron.
- La elección del visitante se guarda en `localStorage`; por defecto se abre en inglés.

## Ver en local

Abre `index.html` con doble clic, o sirve la carpeta:

```powershell
npx serve .
```

## Desplegar en Vercel

```powershell
cd "C:\1.-CODIGO\0.-VinicioArcos"
npx vercel          # primera vez: vista previa y vinculación del proyecto
npx vercel --prod   # publicación en producción
```

No hay paso de compilación: en Vercel, Framework Preset = "Other", sin Build Command y con Output Directory vacío.
