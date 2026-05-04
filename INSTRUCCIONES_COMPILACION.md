# Instrucciones de compilación - Portafolio Economista

## ✅ Estado actual del proyecto

El proyecto está completamente desarrollado con todos los componentes, datos y estilos listos para ser compilados.

## 🚀 Pasos para compilar y ejecutar

### Opción 1: En tu terminal local

1. **Navega a la carpeta del proyecto:**
   ```bash
   cd C:\Users\vinic\OneDrive\Escritorio\PROYECTOS\PORTAFOLIO_PROFESIONAL\PORTAFOLIO_ECONOMISTA
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```
   
   Esto instalará:
   - Next.js 14.2.30
   - React 18.3.1
   - TypeScript 5.6.3
   - Tailwind CSS 3.4.17

3. **Compila el proyecto:**
   ```bash
   npm run build
   ```

4. **Verifica que compile sin errores:**
   - La salida debe mostrar: `✓ Compiled successfully`
   - Si hay errores, revisa los mensajes de error

5. **Ejecuta en desarrollo (recomendado para verificar):**
   ```bash
   npm run dev
   ```
   Luego abre `http://localhost:3000` en tu navegador

6. **Para producción:**
   ```bash
   npm run start
   ```

### Opción 2: Vercel (recomendado para deploy)

1. **Sube el código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portafolio profesional v1.0"
   git remote add origin https://github.com/tu-usuario/PORTAFOLIO_ECONOMISTA.git
   git push -u origin main
   ```

2. **Conecta a Vercel:**
   - Ve a https://vercel.com
   - Conecta tu repositorio GitHub
   - Vercel detectará automáticamente que es un proyecto Next.js
   - Haz clic en "Deploy"

3. **El sitio estará disponible en:**
   ```
   https://tu-proyecto.vercel.app
   ```

---

## 📋 Estructura del proyecto

```
PORTAFOLIO_ECONOMISTA/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout global
│   │   ├── page.tsx            # Página principal
│   │   └── globals.css         # Estilos globales
│   ├── components/
│   │   ├── Navbar.tsx          # Navegación
│   │   ├── Hero.tsx            # Sección hero
│   │   ├── SectionTitle.tsx    # Títulos de sección
│   │   ├── Card.tsx            # Componente reutilizable
│   │   ├── ContactCTA.tsx      # CTA de contacto
│   │   └── Footer.tsx          # Pie de página
│   └── data/
│       ├── profile.ts          # Datos del perfil
│       ├── services.ts         # Servicios (6)
│       ├── publications.ts     # Publicaciones (5)
│       ├── projects.ts         # Proyectos (5)
│       └── courses.ts          # Cursos (6)
├── public/
│   ├── cv/
│   │   └── vinicio-arcos-cv.pdf
│   └── images/
│       └── profile.jpg
├── package.json                # Dependencias
├── tsconfig.json               # Config TypeScript
├── tailwind.config.ts          # Config Tailwind
├── next.config.js              # Config Next.js
├── postcss.config.mjs          # Config PostCSS
├── CLAUDE.md                   # Instrucciones Claude
├── AGENTS.md                   # Principios de agentes
├── README.md                   # Descripción del proyecto
├── PROMPTS.md                  # Ideas de mejora
├── CHANGELOG.md                # Log de cambios (nuevo)
└── INSTRUCCIONES_COMPILACION.md # Este archivo
```

---

## ✨ Características implementadas

### 1. Diseño profesional
- ✅ Paleta de colores: azul petróleo, gris carbón, cobre/dorado
- ✅ Tipografía clara y jerarquía visual
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Transiciones y efectos suaves

### 2. Contenido completo
- ✅ 8 secciones principales
- ✅ 6 servicios profesionales
- ✅ 5 publicaciones académicas
- ✅ 5 proyectos completados
- ✅ 6 cursos y talleres
- ✅ 8 herramientas técnicas

### 3. Componentes reutilizables
- ✅ Navbar con navegación
- ✅ Hero con call-to-action
- ✅ SectionTitle para consistencia
- ✅ Card con variantes
- ✅ ContactCTA para contacto
- ✅ Footer informativo

### 4. Datos centralizados
- ✅ Todos los datos en `src/data/*.ts`
- ✅ Fácil de actualizar
- ✅ Estructura consistente

### 5. Optimización
- ✅ Sin dependencias innecesarias
- ✅ Next.js App Router
- ✅ TypeScript para seguridad
- ✅ Tailwind CSS para estilos

---

## 🔍 Verificación previa

Antes de compilar, verifica:

### Archivos principales (deben existir):
```bash
# En Windows PowerShell o CMD
cd C:\Users\vinic\OneDrive\Escritorio\PROYECTOS\PORTAFOLIO_PROFESIONAL\PORTAFOLIO_ECONOMISTA
dir src\components\
dir src\data\
type src\app\page.tsx | head -20
```

### Dependencias del proyecto:
- Next.js 14.2.30
- React 18.3.1
- TypeScript 5.6.3
- Tailwind CSS 3.4.17
- PostCSS 8.4.49
- Autoprefixer 10.4.20

---

## 🐛 Solución de problemas

### Error: "Cannot find module '@/components/Card'"
**Solución:** Ejecuta `npm install` para instalar las dependencias

### Error: "TypeScript error in src/app/page.tsx"
**Solución:** Verifica que todos los archivos existan en `src/components/` y `src/data/`

### El build toma mucho tiempo
**Solución:** Es normal en la primera compilación. Puede tomar 1-2 minutos

### Puerto 3000 en uso
**Solución:** Usa `npm run dev -- -p 3001` para usar otro puerto

---

## 📝 Personalización después del build

Una vez compilado, puedes:

1. **Actualizar datos:**
   - Edita los archivos en `src/data/`
   - El build se reconstruirá automáticamente en desarrollo

2. **Cambiar estilos:**
   - Modifica `tailwind.config.ts` para colores
   - Edita `src/app/globals.css` para estilos globales

3. **Agregar nueva sección:**
   - Crea componente en `src/components/`
   - Importa en `src/app/page.tsx`
   - Agrega datos si es necesario

4. **Cambiar paleta de colores:**
   - Ve a `tailwind.config.ts`
   - Modifica la sección `colors`

---

## 🚢 Deployment en Vercel

### Paso a paso:

1. **Inicializa Git (si no está hecho):**
   ```bash
   cd C:\Users\vinic\OneDrive\Escritorio\PROYECTOS\PORTAFOLIO_PROFESIONAL\PORTAFOLIO_ECONOMISTA
   git init
   git config user.email "vinicioarcos123@gmail.com"
   git config user.name "Vinicio Arcos"
   git add .
   git commit -m "Initial commit: Professional portfolio v1.0"
   ```

2. **Crea repositorio en GitHub:**
   - Ve a https://github.com/new
   - Crea repositorio: `PORTAFOLIO_ECONOMISTA`
   - No inicialices con README

3. **Conecta y sube:**
   ```bash
   git remote add origin https://github.com/tu-usuario/PORTAFOLIO_ECONOMISTA.git
   git branch -M main
   git push -u origin main
   ```

4. **Deploya en Vercel:**
   - Ve a https://vercel.com/new
   - Selecciona tu repositorio
   - Vercel configurará automáticamente:
     - Framework: Next.js ✓
     - Root Directory: ./ ✓
     - Build Command: npm run build ✓
     - Output Directory: .next ✓
   - Haz clic en "Deploy"

5. **Tu sitio estará en:**
   ```
   https://PORTAFOLIO_ECONOMISTA.vercel.app
   ```

---

## 📞 Contacto y soporte

- **Email:** vinicioarcos123@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/vinicio-arcos/
- **CV:** `/cv/vinicio-arcos-cv.pdf`

---

## ✅ Checklist de compilación exitosa

Después de `npm run build`, deberías ver:

```
✓ Compiled successfully
✓ Linted successfully
✓ Generated static pages (35)
```

Y la carpeta `.next/` se habrá creado con los archivos optimizados.

---

**Última actualización:** Mayo 3, 2026
**Versión:** 1.0
