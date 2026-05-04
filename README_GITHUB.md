# Portafolio Profesional de Edwin Vinicio Arcos Naranjo

[![Build Status](https://github.com/vinicio-arcos/portafolio-economista/workflows/Build%20and%20Deploy/badge.svg)](https://github.com/vinicio-arcos/portafolio-economista/actions)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 📋 Descripción

Portafolio profesional de **Edwin Vinicio Arcos Naranjo**, economista, docente, investigador y consultor especializado en:

- 📊 Economía laboral y educativa
- 📈 Análisis macroeconómico y sectorial
- 🔬 Investigación aplicada con métodos cuantitativos
- 📋 Políticas públicas y evaluación de impacto
- 💻 Ciencia de datos y econometría
- 🎓 Docencia universitaria y capacitación ejecutiva

**Ver sitio en vivo:** [vinicioarcos.vercel.app](https://vinicioarcos.vercel.app)

---

## ✨ Características

### 🎨 Diseño profesional y académico
- Paleta de colores sobria: azul petróleo, gris carbón, cobre/dorado
- Tipografía clara con jerarquía visual
- Responsive design (mobile, tablet, desktop)
- Transiciones suaves y efectos profesionales

### 📦 Contenido completo
- **8 secciones** principales
- **6 servicios** profesionales
- **5 publicaciones** académicas
- **5 proyectos** completados
- **6 cursos** y talleres
- **8 herramientas** técnicas

### 🛠️ Stack moderno
- **Next.js 14** con App Router
- **TypeScript** para seguridad de tipos
- **Tailwind CSS** para estilos
- **React 18** para componentes
- Sin dependencias innecesarias

### 🔧 Fácil de mantener
- Datos centralizados en `src/data/`
- Componentes reutilizables
- Configuración clara
- Documentación completa

---

## 🚀 Inicio rápido

### Requisitos previos
- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/portafolio-economista.git
cd portafolio-economista

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Abrir en navegador
# http://localhost:3000
```

### Compilación para producción

```bash
# Compilar
npm run build

# Ejecutar build
npm start
```

### Linting

```bash
# Verificar errores
npm run lint
```

---

## 📁 Estructura del proyecto

```
portafolio-economista/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout global
│   │   ├── page.tsx            # Página principal
│   │   └── globals.css         # Estilos globales
│   ├── components/
│   │   ├── Navbar.tsx          # Navegación
│   │   ├── Hero.tsx            # Sección hero
│   │   ├── SectionTitle.tsx    # Títulos de sección
│   │   ├── Card.tsx            # Tarjetas reutilizables
│   │   ├── ContactCTA.tsx      # Llamada a acción
│   │   └── Footer.tsx          # Pie de página
│   └── data/
│       ├── profile.ts          # Datos del perfil
│       ├── services.ts         # Servicios profesionales
│       ├── publications.ts     # Publicaciones académicas
│       ├── projects.ts         # Proyectos completados
│       └── courses.ts          # Cursos y talleres
├── public/
│   ├── cv/                     # Documentos en PDF
│   └── images/                 # Imágenes públicas
├── .github/workflows/          # CI/CD con GitHub Actions
├── package.json                # Dependencias
├── tsconfig.json               # Configuración TypeScript
├── tailwind.config.ts          # Configuración Tailwind
├── next.config.js              # Configuración Next.js
├── postcss.config.mjs          # Configuración PostCSS
└── README.md                   # Este archivo
```

---

## 🎯 Secciones principales

### 1. **Perfil**
Resumen profesional con métricas de experiencia y áreas de especialización.

### 2. **Especialidades**
Listado de 7 áreas de fortaleza y experiencia.

### 3. **Servicios**
6 servicios profesionales:
- Consultoría económica
- Evaluación de proyectos
- Investigación aplicada
- Análisis laboral y educación
- Formación ejecutiva
- Ciencia de datos

### 4. **Publicaciones**
5 trabajos académicos en:
- Competitividad territorial
- Programas de apoyo productivo
- Economía laboral
- Retorno de la educación
- Políticas públicas e inclusión

### 5. **Proyectos**
5 casos de trabajo:
- Agenda económica municipal
- Estudio de mercado
- Evaluación de impacto
- Análisis laboral
- Diagnóstico de desigualdad

### 6. **Cursos**
6 programas de formación:
- Economía para directivos
- Evaluación de proyectos
- Econometría aplicada
- Política pública
- Ciencia de datos con Python
- Economía laboral

### 7. **Herramientas**
8 tecnologías y metodologías utilizadas.

### 8. **Contacto**
Formulario y canales de comunicación profesional.

---

## 🎨 Personalización

### Cambiar colores
Edita `tailwind.config.ts`:
```typescript
colors: {
  petrol: "#0d5a5a",      // Azul petróleo
  copper: "#b87333",      // Cobre/dorado
  charcoal: "#1a1f3a",    // Gris carbón
  // ... más colores
}
```

### Actualizar datos
Edita los archivos en `src/data/`:
- `profile.ts` - Información personal
- `services.ts` - Servicios profesionales
- `publications.ts` - Publicaciones
- `projects.ts` - Proyectos
- `courses.ts` - Cursos

### Agregar nueva sección
1. Crea componente en `src/components/`
2. Importa en `src/app/page.tsx`
3. Agrega datos si es necesario

---

## 🚢 Deployment

### En Vercel (recomendado)

```bash
# Vercel detecta automáticamente Next.js
# Solo conecta tu repositorio en https://vercel.com/new

# Tu sitio estará en:
# https://portafolio-economista.vercel.app
```

### En Netlify

```bash
# Build command: npm run build
# Publish directory: .next
```

### En tu servidor

```bash
# Compilar
npm run build

# Ejecutar
npm start
```

---

## 📊 Desempeño

Optimizado con:
- ✅ Next.js App Router
- ✅ Static Generation (SSG)
- ✅ Image Optimization
- ✅ CSS en Tailwind (sin JS innecesario)
- ✅ Minimal bundle size

---

## 📝 Scripts disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Compila para producción |
| `npm start` | Ejecuta el build |
| `npm run lint` | Verifica errores con ESLint |

---

## 🤝 Contribuciones

Las sugerencias y mejoras son bienvenidas. Para contribuir:

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo licencia MIT. Ver archivo [LICENSE](LICENSE) para más detalles.

---

## 📞 Contacto

- **Email:** vinicioarcos123@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/vinicio-arcos/
- **CV:** [Descargar CV](/cv/vinicio-arcos-cv.pdf)

---

## 🙋 Preguntas frecuentes

### ¿Puedo usar este portafolio como plantilla?
Sí, está bajo licencia MIT. Puedes usarlo y modificarlo libremente.

### ¿Cómo actualizo los datos?
Edita los archivos en `src/data/` con tu propia información.

### ¿Dónde publico el sitio?
Recomendamos [Vercel](https://vercel.com) (gratis, integración con Next.js).

### ¿Cómo agrego una sección nueva?
1. Crea el componente en `src/components/`
2. Importa en `page.tsx`
3. Agrega datos si es necesario

---

## 🙏 Créditos

- **Framework:** [Next.js](https://nextjs.org)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org)
- **Tipografía:** [Manrope](https://manropefont.com)

---

## 📈 Roadmap

- [ ] Agregar blog de artículos
- [ ] Implementar dark mode
- [ ] Agregar sección de testimonios
- [ ] Crear landing de servicios
- [ ] Agregar formulario de contacto con backend
- [ ] Implementar analytics
- [ ] Agregar novedades/news

---

**Última actualización:** Mayo 3, 2026  
**Versión:** 1.0  
**Autor:** Edwin Vinicio Arcos Naranjo
