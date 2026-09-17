# Sitio web de Edwin Vinicio Arcos

Página estática con una escena 3D (three.js) que cambia de figura con el scroll.

## Estructura

- `index.html`: todo el sitio (HTML, CSS y JavaScript en un solo archivo).
- `vercel.json`: configuración mínima para Vercel.

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
