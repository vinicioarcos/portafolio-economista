#!/bin/bash

# Script para inicializar el repositorio Git local
# Uso: bash SETUP_GIT.sh

echo "🚀 Inicializando repositorio Git..."
echo ""

# Verificar si git está instalado
if ! command -v git &> /dev/null; then
    echo "❌ Git no está instalado. Por favor instálalo primero."
    exit 1
fi

# Inicializar repositorio
echo "📁 Inicializando repositorio local..."
git init

# Configurar usuario local (opcional)
echo ""
echo "👤 Configurando usuario (opcional)..."
echo "Ingresa tu nombre de usuario de GitHub (o presiona Enter para omitir):"
read github_user

if [ ! -z "$github_user" ]; then
    git config user.name "$github_user"
    git config user.email "vinicioarcos123@gmail.com"
    echo "✅ Usuario configurado: $github_user"
fi

# Agregar archivos
echo ""
echo "📝 Agregando archivos al repositorio..."
git add .

# Hacer primer commit
echo ""
echo "💾 Creando primer commit..."
git commit -m "Initial commit: Portafolio profesional v1.0

- Diseño profesional con paleta azul petróleo, gris carbón y cobre
- 6 servicios profesionales
- 5 publicaciones académicas
- 5 proyectos completados
- 6 cursos especializados
- Stack: Next.js 14, TypeScript, Tailwind CSS
- Datos centralizados y fáciles de editar
- Responsive design y optimizado para producción"

echo ""
echo "✅ Repositorio Git inicializado correctamente"
echo ""
echo "📋 Próximos pasos:"
echo ""
echo "1️⃣  Crea un repositorio en GitHub:"
echo "   - Ve a https://github.com/new"
echo "   - Nombre: portafolio-economista"
echo "   - Descripción: Portafolio profesional de economista"
echo "   - No inicialices con README"
echo ""
echo "2️⃣  Conecta tu repositorio local a GitHub:"
echo "   git remote add origin https://github.com/TU_USUARIO/portafolio-economista.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3️⃣  Deploy en Vercel:"
echo "   - Ve a https://vercel.com/new"
echo "   - Conecta tu repositorio GitHub"
echo "   - Haz clic en Deploy"
echo ""
echo "🎉 ¡Hecho! Tu portafolio estará disponible en Vercel en minutos."
echo ""
