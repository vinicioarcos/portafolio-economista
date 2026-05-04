@echo off
REM Script para inicializar el repositorio Git local en Windows
REM Uso: SETUP_GIT.bat

echo.
echo ========================================
echo   Portafolio - Inicializar Git
echo ========================================
echo.

REM Verificar si git está instalado
git --version >nul 2>&1
if errorlevel 1 (
    echo Error: Git no esta instalado.
    echo Descargalo desde: https://git-scm.com/download/win
    pause
    exit /b 1
)

REM Inicializar repositorio
echo Inicializando repositorio local...
git init

REM Configurar usuario (opcional)
echo.
echo Ingresa tu nombre de usuario de GitHub (o presiona Enter para omitir):
set /p github_user=

if not "%github_user%"=="" (
    git config user.name "%github_user%"
    git config user.email "vinicioarcos123@gmail.com"
    echo Usuario configurado: %github_user%
)

REM Agregar archivos
echo.
echo Agregando archivos al repositorio...
git add .

REM Hacer primer commit
echo.
echo Creando primer commit...
git commit -m "Initial commit: Portafolio profesional v1.0"

echo.
echo ========================================
echo   Repositorio Git inicializado!
echo ========================================
echo.
echo Proximos pasos:
echo.
echo 1. Crea un repositorio en GitHub:
echo    - Ve a https://github.com/new
echo    - Nombre: portafolio-economista
echo    - NO inicialices con README
echo.
echo 2. Conecta tu repositorio local a GitHub:
echo    git remote add origin https://github.com/TU_USUARIO/portafolio-economista.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 3. Deploy en Vercel:
echo    - Ve a https://vercel.com/new
echo    - Conecta tu repositorio GitHub
echo    - Haz clic en Deploy
echo.
echo Listo!
echo.
pause
