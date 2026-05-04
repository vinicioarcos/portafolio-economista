# 🚀 Desplegar en Vercel - Guía Paso a Paso

## ⏱️ Tiempo total: 15 minutos

---

## 📋 Requisitos

- ✅ Git instalado en tu computadora
- ✅ Cuenta de GitHub (gratuita en https://github.com)
- ✅ Cuenta de Vercel (gratuita en https://vercel.com)
- ✅ Proyecto descargado en tu computadora

---

## 🔴 Paso 1: Preparar tu computadora local (5 minutos)

### 1.1 Abre PowerShell o CMD

**En Windows:**
- Presiona `Win + R`
- Escribe `powershell`
- Presiona Enter

**O haz clic derecho en la carpeta del proyecto** → "Open in Terminal"

### 1.2 Navega a la carpeta del proyecto

```bash
cd "C:\Users\vinic\OneDrive\Escritorio\PROYECTOS\PORTAFOLIO_PROFESIONAL\PORTAFOLIO_ECONOMISTA"
```

### 1.3 Verifica que Git esté instalado

```bash
git --version
```

Deberías ver algo como: `git version 2.45.0`

Si NO ves esto, descarga Git desde: https://git-scm.com/download/windows

### 1.4 Inicializa el repositorio Git

```bash
git init
```

### 1.5 Configura tu usuario de Git

```bash
git config user.name "Edwin Vinicio Arcos"
git config user.email "vinicioarcos123@gmail.com"
```

### 1.6 Agrega todos los archivos

```bash
git add .
```

### 1.7 Haz el primer commit

```bash
git commit -m "Initial commit: Portafolio profesional v1.0"
```

Verás algo como:
```
[master (root-commit) abc1234] Initial commit: Portafolio profesional v1.0
 XX files changed, XXXXX insertions(+)
```

✅ **Git está listo en tu computadora**

---

## 🔵 Paso 2: Crear repositorio en GitHub (5 minutos)

### 2.1 Ve a GitHub

Abre https://github.com/new en tu navegador

### 2.2 Completa el formulario

| Campo | Valor |
|-------|-------|
| **Repository name** | `portafolio-economista` |
| **Description** | `Portafolio profesional de economista` |
| **Visibility** | ✅ Public |
| **.gitignore** | Deja en blanco (ya lo tenemos) |
| **License** | Deja en blanco (ya lo tenemos) |

### 2.3 Click en "Create repository"

GitHub te mostrará algo así:

```
Quick setup — if you've done this kind of thing before
…or push an existing repository from the command line

git remote add origin https://github.com/TU_USUARIO/portafolio-economista.git
git branch -M main
git push -u origin main
```

**COPIA ESTOS COMANDOS** (necesitarás en el Paso 3)

✅ **Repositorio creado en GitHub**

---

## 🟢 Paso 3: Conectar tu repositorio local a GitHub (2 minutos)

Vuelve a tu PowerShell/CMD y ejecuta los comandos que GitHub te mostró:

```bash
git remote add origin https://github.com/TU_USUARIO/portafolio-economista.git
git branch -M main
git push -u origin main
```

**Importante:** Reemplaza `TU_USUARIO` con tu username de GitHub

Ejemplo:
```bash
git remote add origin https://github.com/vinicio-arcos/portafolio-economista.git
git branch -M main
git push -u origin main
```

Si te pide autenticación, sigue las instrucciones (puede abrir una ventana en el navegador)

Verás:
```
Enumerating objects: XX, done.
Counting objects: 100% (XX/XX), done.
...
To https://github.com/TU_USUARIO/portafolio-economista.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

✅ **Tu código está en GitHub**

---

## 🟣 Paso 4: Desplegar en Vercel (3 minutos)

### 4.1 Ve a Vercel

Abre https://vercel.com/new en tu navegador

### 4.2 Conecta GitHub (primera vez)

Si es tu primera vez:
- Click "Continue with GitHub"
- GitHub te pedirá autorizar a Vercel
- Click "Authorize vercel"

### 4.3 Importa tu repositorio

Busca: `portafolio-economista`

Click en "Import"

### 4.4 Configura el proyecto

**Vercel detectará automáticamente:**
- ✅ Framework: Next.js
- ✅ Root Directory: ./
- ✅ Build Command: npm run build
- ✅ Output Directory: .next

**No cambies nada**, todo está correcto.

Click en "Deploy"

### 4.5 Espera el deployment (2-3 minutos)

Verás una pantalla con:
```
Building...
```

Espera a que termine. Cuando vea "Deployment successful", tu sitio está listo.

---

## ✅ ¡Hecho!

Tu portafolio ahora está en vivo en:

```
https://portafolio-economista.vercel.app
```

O si configuraste un dominio personalizado:

```
https://tu-dominio.com
```

---

## 🔗 Compartir tu portafolio

Copia la URL y comparte:
- En tu LinkedIn
- En tu CV
- En tu perfil de GitHub
- Con clientes potenciales
- En tu bio de redes sociales

---

## 📝 Hacer cambios en el futuro

Cada vez que hagas cambios en tu código:

```bash
# 1. Haz cambios en los archivos
# 2. Luego ejecuta:

git add .
git commit -m "Descripción del cambio"
git push
```

Vercel se actualizará automáticamente en 1-2 minutos.

---

## 🆘 Problemas comunes

### Error: "git is not recognized"

**Solución:**
1. Descarga Git: https://git-scm.com/download/windows
2. Instala con las opciones por defecto
3. Reinicia PowerShell/CMD
4. Intenta de nuevo

### Error: "fatal: not a git repository"

**Solución:**
1. Asegúrate de estar en la carpeta correcta:
   ```bash
   cd "C:\Users\vinic\OneDrive\Escritorio\PROYECTOS\PORTAFOLIO_PROFESIONAL\PORTAFOLIO_ECONOMISTA"
   ```
2. Verifica con:
   ```bash
   pwd
   ```

### Error: "Permission denied (publickey)"

**Solución:**
Usa HTTPS en lugar de SSH:
```bash
git remote set-url origin https://github.com/TU_USUARIO/portafolio-economista.git
git push -u origin main
```

### El build falla en Vercel

**Solución:**
1. Ve a https://vercel.com/dashboard
2. Selecciona tu proyecto "portafolio-economista"
3. Click en la última "Deployment" que falló
4. Lee los logs (mostrarán el error)
5. Arregla el error en tu código
6. Haz `git push` de nuevo

### Vercel dice "Can't find .next"

**No es un error**, es solo una advertencia. Tu sitio está deployado correctamente.

---

## 📊 Monitor tu deployment

Después de desplegar, puedes ver:

**Vercel Dashboard:**
- https://vercel.com/dashboard

**Analytics:**
- Número de visitas
- Países
- Navegadores
- Rendimiento

**Logs:**
- Errores de compilación
- Requests
- Rendimiento

---

## 🎯 Próximos pasos (opcional)

### 1. Configurar dominio personalizado

1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Agrega tu dominio personalizado
4. Sigue las instrucciones de DNS

### 2. Configurar email de contacto

Configura un formulario de contacto en `src/components/ContactCTA.tsx`

### 3. Agregar Google Analytics

1. Crea cuenta en https://analytics.google.com
2. Obtén tu ID de seguimiento
3. Agrega a `next.config.js`

---

## 📚 Recursos

- **Documentación Vercel:** https://vercel.com/docs
- **Documentación Next.js:** https://nextjs.org/docs
- **Documentación GitHub:** https://docs.github.com
- **Tailwind CSS:** https://tailwindcss.com/docs

---

## ✨ Resumen

| Paso | Tiempo | Acción |
|------|--------|--------|
| 1 | 5 min | Preparar Git localmente |
| 2 | 5 min | Crear repositorio en GitHub |
| 3 | 2 min | Conectar a GitHub |
| 4 | 3 min | Desplegar en Vercel |
| **Total** | **15 min** | **¡Tu sitio está en vivo!** |

---

## 🎉 Conclusion

Tu portafolio profesional ahora está:
- ✅ En GitHub (versionado y respaldado)
- ✅ En Vercel (deployado y accesible)
- ✅ En vivo en Internet
- ✅ Con actualizaciones automáticas
- ✅ Con SSL/HTTPS gratuito
- ✅ Con CDN global
- ✅ Con analytics

**¡Tu portafolio está profesional y listo para captar oportunidades!** 🚀

---

**¿Necesitas ayuda?**
- Lee este documento de nuevo
- Revisa los logs en Vercel
- Consulta la documentación oficial
- Abre un issue en GitHub

---

**Última actualización:** Mayo 3, 2026
**Versión:** 1.0
