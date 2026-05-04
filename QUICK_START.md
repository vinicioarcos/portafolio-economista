# ⚡ Quick Start - Publica en GitHub en 15 minutos

## 📋 Requisitos
- ✅ Git instalado
- ✅ Cuenta de GitHub
- ✅ Proyecto descargado

---

## 🚀 Opción 1: Usar el script (RECOMENDADO)

### En Windows:
```bash
# 1. Abre PowerShell o CMD
# 2. Navega a tu carpeta
cd C:\Users\vinic\OneDrive\Escritorio\PROYECTOS\PORTAFOLIO_PROFESIONAL\PORTAFOLIO_ECONOMISTA

# 3. Ejecuta el script
SETUP_GIT.bat

# El script te pedirá que:
# - Ingreses tu nombre de usuario de GitHub
# - Crees un repositorio en GitHub
# - Ejecutes los comandos de git remote add origin
```

### En Mac/Linux:
```bash
cd ~/PROYECTOS/PORTAFOLIO_PROFESIONAL/PORTAFOLIO_ECONOMISTA
bash SETUP_GIT.sh
```

---

## 🚀 Opción 2: Comandos manuales

### Paso 1: Inicializar repositorio local
```bash
cd C:\Users\vinic\OneDrive\Escritorio\PROYECTOS\PORTAFOLIO_PROFESIONAL\PORTAFOLIO_ECONOMISTA

git init
git config user.name "Tu Nombre"
git config user.email "vinicioarcos123@gmail.com"
git add .
git commit -m "Initial commit: Portafolio profesional v1.0"
```

### Paso 2: Crear repositorio en GitHub
1. Ve a https://github.com/new
2. Nombre: `portafolio-economista`
3. Público: ✓
4. Click "Create repository"

### Paso 3: Conectar repositorio
```bash
git remote add origin https://github.com/TU_USUARIO/portafolio-economista.git
git branch -M main
git push -u origin main
```

**Reemplaza `TU_USUARIO` con tu username de GitHub**

### Paso 4: Desplegar en Vercel
1. Ve a https://vercel.com/new
2. "Import Git Repository"
3. Selecciona "portafolio-economista"
4. Click "Import"
5. Click "Deploy"

---

## ✅ Listo!

Tu sitio estará disponible en: `https://portafolio-economista.vercel.app`

---

## 📚 Documentación completa

Lee estos archivos para más detalles:
- `GITHUB_SETUP.md` - Guía paso a paso con capturas (hipotéticas)
- `GITHUB_READY.md` - Resumen de preparación
- `README_GITHUB.md` - README profesional para GitHub

---

## 🆘 Problemas?

**Error: Git no está instalado**
- Descarga desde: https://git-scm.com/download

**Error: "fatal: not a git repository"**
- Asegúrate de estar en la carpeta correcta
- Verifica con: `pwd` (Mac/Linux) o `cd` (Windows)

**Error al hacer push**
- Verifica tu nombre de usuario en la URL
- Verifica que creaste el repositorio en GitHub
- Verifica tu conexión de internet

**Build falla en Vercel**
- Ve a Vercel Dashboard → Deployments
- Lee los logs de error
- Arregla el problema en tu código
- Haz push de nuevo

---

**¿Preguntas?** Lee la documentación incluida o consulta:
- https://docs.github.com
- https://vercel.com/docs
- https://nextjs.org/docs
