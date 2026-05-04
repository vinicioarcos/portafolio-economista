# 🚀 Guía Completa: Crear Repositorio en GitHub

Esta guía te ayudará a crear un repositorio en GitHub para tu portafolio profesional y desplegarlo en Vercel.

---

## 📋 Requisitos previos

- ✅ Cuenta en GitHub (https://github.com/signup)
- ✅ Git instalado en tu computadora
- ✅ El proyecto portafolio-economista descargado

---

## Paso 1: Verificar Git

Abre tu terminal (PowerShell, CMD o Git Bash en Windows) y verifica que Git esté instalado:

```bash
git --version
```

Deberías ver algo como: `git version 2.40.0`

Si no lo ves, descarga Git desde: https://git-scm.com/download

---

## Paso 2: Navega a la carpeta del proyecto

```bash
cd C:\Users\vinic\OneDrive\Escritorio\PROYECTOS\PORTAFOLIO_PROFESIONAL\PORTAFOLIO_ECONOMISTA
```

O simplemente haz clic derecho en la carpeta y selecciona "Git Bash here"

---

## Paso 3: Inicializa el repositorio local

### Opción A: Usar el script (RECOMENDADO)

**En Windows:**
```bash
SETUP_GIT.bat
```

**En Mac/Linux:**
```bash
bash SETUP_GIT.sh
```

### Opción B: Manual (si no funciona el script)

```bash
# Inicializar git
git init

# Configurar usuario (reemplaza con tu nombre)
git config user.name "Tu Nombre"
git config user.email "vinicioarcos123@gmail.com"

# Agregar todos los archivos
git add .

# Hacer primer commit
git commit -m "Initial commit: Portafolio profesional v1.0"
```

---

## Paso 4: Crear repositorio en GitHub

### 4.1 Ve a GitHub

Abre https://github.com/new en tu navegador

### 4.2 Configura el repositorio

**Nombre del repositorio:**
```
portafolio-economista
```

**Descripción:**
```
Portafolio profesional de economista - Next.js, TypeScript, Tailwind CSS
```

**Privacidad:**
- ✅ Public (para que sea visible)
- ☐ Private (si prefieres privado)

### 4.3 NO inicialices con:
- ☐ README
- ☐ .gitignore (ya lo tenemos)
- ☐ License (ya lo tenemos)

### 4.4 Click en "Create repository"

---

## Paso 5: Conectar repositorio local a GitHub

GitHub te mostrará instrucciones. Sigue estas en tu terminal:

```bash
# Agregar el repositorio remoto
git remote add origin https://github.com/TU_USUARIO/portafolio-economista.git

# Renombrar rama a 'main'
git branch -M main

# Enviar código a GitHub
git push -u origin main
```

**Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub**

Ejemplo:
```bash
git remote add origin https://github.com/vinicio-arcos/portafolio-economista.git
git branch -M main
git push -u origin main
```

---

## Paso 6: Verificar en GitHub

1. Abre https://github.com/TU_USUARIO/portafolio-economista
2. Deberías ver todos tus archivos
3. Los badges en el README mostrarán "Build: Unknown" hasta que Vercel se conecte

---

## Paso 7: Deploy en Vercel

### 7.1 Ve a Vercel

Abre https://vercel.com/new en tu navegador

### 7.2 Conecta tu repositorio

- Haz clic en "Import Git Repository"
- Selecciona "GitHub"
- Busca "portafolio-economista"
- Haz clic en "Import"

### 7.3 Configura el proyecto

**Framework Preset:** Next.js (detectado automáticamente)

**Root Directory:** ./

**Build Command:** 
```
npm run build
```

**Output Directory:** 
```
.next
```

Deja todo como está (Vercel lo configura automáticamente)

### 7.4 Variables de entorno

No necesitas agregar nada. Deja en blanco y haz clic en "Deploy"

### 7.5 ¡Deployment en progreso!

Vercel compilará y desplegará tu sitio. Espera 2-3 minutos.

---

## Paso 8: Accede a tu sitio

Una vez desplegado, Vercel te mostrará la URL:

```
https://portafolio-economista-tu-username.vercel.app
```

O si configuraste un dominio personalizado:

```
https://tudominio.com
```

---

## 🎉 ¡Hecho!

Tu portafolio ahora está:
- ✅ En GitHub
- ✅ Deployado en Vercel
- ✅ Accesible al público
- ✅ Con CI/CD automático

---

## Próximas acciones (Opcionales)

### Configurar dominio personalizado

1. Ve a https://vercel.com/dashboard/domains
2. Haz clic en "Add Domain"
3. Ingresa tu dominio
4. Sigue las instrucciones para configurar el DNS

### Agregar al perfil

1. Ve a https://github.com/settings/profile
2. En "Website", ingresa: https://portafolio-economista.vercel.app
3. En "Bio", escribe: Economista | Investigador | Consultor

### Hacer cambios en el futuro

Cada vez que hagas cambios y hagas push a GitHub:

```bash
# Hacer cambios en los archivos
# Luego:

git add .
git commit -m "Descripción del cambio"
git push
```

Vercel se actualizará automáticamente en 1-2 minutos.

---

## 🆘 Solución de problemas

### Error: "fatal: not a git repository"

**Solución:** Asegúrate de estar en la carpeta correcta:
```bash
cd C:\Users\vinic\OneDrive\Escritorio\PROYECTOS\PORTAFOLIO_PROFESIONAL\PORTAFOLIO_ECONOMISTA
git status
```

### Error: "fatal: 'origin' does not appear to be a 'git' repository"

**Solución:** Configura el remote nuevamente:
```bash
git remote add origin https://github.com/TU_USUARIO/portafolio-economista.git
git push -u origin main
```

### Error: "Permission denied (publickey)"

**Solución:** Configura SSH en GitHub:
1. Ve a https://github.com/settings/keys
2. Agrega tu clave SSH pública
3. O usa HTTPS en lugar de SSH

### El build falla en Vercel

**Solución:**
1. Ve a https://vercel.com/dashboard
2. Selecciona tu proyecto
3. Ve a la pestaña "Deployments"
4. Haz clic en el deployment fallido
5. Lee los logs de error
6. Arregla el problema en tu código
7. Haz push de nuevo a GitHub

---

## 📊 Monitoreo y estadísticas

### Ver logs de deploy

```
Vercel Dashboard → Tu proyecto → Deployments → Click en un deploy
```

### Ver analytics

```
Vercel Dashboard → Tu proyecto → Analytics
```

### Ver variables de entorno

```
Vercel Dashboard → Tu proyecto → Settings → Environment Variables
```

---

## 🔐 Seguridad

### .gitignore está configurado para excluir:
- `node_modules/` - Dependencias (pesadas)
- `.env.local` - Variables de entorno
- `.next/` - Build compilado
- `.DS_Store` - Archivos del sistema

### No commits de:
- API keys
- Contraseñas
- Información sensible

---

## 📚 Recursos

- **Documentación de GitHub:** https://docs.github.com
- **Documentación de Vercel:** https://vercel.com/docs
- **Documentación de Next.js:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs

---

## 💡 Tips

1. **Mantén commits pequeños:** Un cambio = un commit
2. **Escribe mensajes claros:** Explica qué cambiaste y por qué
3. **Usa ramas para features:** `git checkout -b feature/nueva-seccion`
4. **Revisa antes de push:** `git status` y `git diff`

---

## 🎯 Próximos pasos recomendados

1. ✅ Crear repositorio en GitHub
2. ✅ Desplegar en Vercel
3. ⬜ Configurar dominio personalizado
4. ⬜ Agregar GitHub Actions CI/CD
5. ⬜ Configurar analytics
6. ⬜ Agregar footer con link a GitHub

---

**¿Necesitas ayuda?**

- Consulta los logs en Vercel
- Revisa los errores en la terminal
- Lee la documentación oficial
- Abre un issue en GitHub

---

**Última actualización:** Mayo 3, 2026  
**Versión:** 1.0
