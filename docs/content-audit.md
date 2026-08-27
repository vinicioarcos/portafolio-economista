# Auditoría de contenido — consolidación vinicioarcos.net

Fecha de auditoría: 2026-08-27
Repositorio destino confirmado: `vinicioarcos/portafolio-economista` (este repo)

## 1. Mapa de dominios → proyecto Vercel → repositorio (verificado con `vercel domains inspect` / `vercel project inspect`, no asumido)

| Dominio | Proyecto Vercel | Repositorio | Notas |
| --- | --- | --- | --- |
| `vinicioarcos.net`, `www.vinicioarcos.net` | `vinicioarcos` | `vinicioarcos/portafolio-economista` (este repo, local: `0.-VINICIO_ARCOS_PORTAFOLIO`) | **Destino canónico** |
| `vinicioarcos.arcdata.app` | `vinicioarcos` | mismo repo que arriba | Es el **mismo despliegue** que vinicioarcos.net, no una versión distinta. No hay contenido separado que fusionar desde aquí. |
| `vinicioarcos.arcdataconsulting.com` | `economista` | `vinicioarcos/economista` (local: `C:\1.-CODIGO\Portafolio_Economista`) | Proyecto "Economista": Next.js 16, contiene `content/profile.json` con datos extraídos y parcialmente confirmados de la hoja de vida 2025. Fuente principal de trayectoria/publicaciones/blog. |
| `vinicioarcos.github.io` | — (GitHub Pages, no Vercel) | no localizado un clon local | Solo inspeccionado vía fetch remoto (contenido renderizado). Contiene libros, docencia, recursos y datos de contacto propios. |
| `arcdata.app` / `www.arcdata.app` | `arcdata` | local: `C:\1.-CODIGO\1.-Arcdata` | App raíz del ecosistema (router multi-tenant), sin contenido propio de Vinicio. |

**Conclusión:** no existen "versiones" en conflicto de código para vinicioarcos.net — el conflicto es de **contenido** repartido entre el repo `economista` y GitHub Pages, más lo ya existente en este repo.

## 2. Discrepancias detectadas (sin resolver por inferencia)

### 2.1 Correo electrónico
- `vinicioarcos123@gmail.com` — usado en: este repo (`profile.ts`), GitHub Pages, y es el correo asociado a la cuenta desde la que se ejecuta esta sesión.
- `vinicioarcosnaranjo@gmail.com` — usado en: `economista/content/profile.json`, con nota interna que dice "autorización de correo... confirmada por el titular" el 2026-08-06.
- **Estado: `pending`.** Tres fuentes independientes coinciden en `vinicioarcos123@gmail.com`; una fuente (con nota de confirmación propia, pero no verificable por mí) indica lo contrario. No elijo por mayoría ni por inferencia — requiere confirmación explícita del titular.

### 2.2 Ubicación
- Fuentes mencionan Ambato (GitHub Pages), Milagro (`economista`), y "Ecuador" genérico (sitio actual).
- **Resuelto por instrucción explícita del propietario:** mostrar únicamente *"Ecuador · Disponible para colaboraciones nacionales e internacionales"* hasta confirmar residencia/ubicación profesional vigente. No se publica ciudad ni dirección.

### 2.3 Teléfono
- `0992535336` aparece de forma consistente en `economista/content/profile.json` y en GitHub Pages (dos fuentes independientes coinciden).
- **Estado: `pending` por instrucción explícita** — no publicar hasta confirmar vigencia y que el titular desea mostrarlo, pese a la consistencia entre fuentes.

### 2.4 LinkedIn
- Este repo usa `linkedin.com/in/vinicio-arcos/` (con guion).
- `economista/content/profile.json` usa `linkedin.com/in/vinicioarcos/` (sin guion).
- LinkedIn bloquea el acceso automatizado (HTTP 999 al intentar verificar), por lo que **no pude confirmar cuál URL resuelve a un perfil real**.
- **Estado: `pending`.** Requiere que el titular confirme la URL exacta.

### 2.5 Denominación profesional
- Este repo tenía `"MSc. Economista | Docencia | ..."` — denominación incorrecta señalada por el propietario.
- `economista/content/profile.json` usa `"Econ. Edwin Vinicio Arcos Naranjo, MSc."` y headline `"Economista, docente e investigador · Candidato a doctor en Políticas Públicas"`, derivado directamente de la hoja de vida 2025.
- **Resuelto:** adoptar `"Economista · MSc. en Economía del Desarrollo · Candidato a doctor en Políticas Públicas"`, consistente con la hoja de vida y con la instrucción del propietario.

### 2.6 Métricas ("10+ años", "50+ proyectos", "100+ clases", "4+ universidades", "7 publicaciones")
- Ninguna de estas cifras aparece respaldada en `economista/content/profile.json` (la fuente más rigurosa disponible, derivada de la hoja de vida).
- **Estado: sin fuente reproducible → recomendado eliminar de la portada**, salvo que el titular las confirme con una base de cálculo (p. ej. "7 publicaciones" sí es un conteo verificable a partir de la lista real de publicaciones, no una cifra redondeada — ese caso es distinto y podría mostrarse como conteo exacto, no como "aproximado").

### 2.7 ORCID / OSF
- ORCID `0000-0002-5491-7127` y OSF `https://osf.io/z92qh` aparecen en `economista/content/profile.json`.
- No pude verificar el contenido del perfil ORCID vía fetch automatizado (la página requiere JavaScript). **Pendiente de verificación visual por el titular antes de publicar en `sameAs`.**

### 2.8 Libros — clasificación por estado
Confirmado por GitHub Pages (fuente que ya distingue publicado vs. en preparación):
- **Publicado:** *Econometría I* (modelos de regresión lineal, R y Stata), *La trampa del voto popular* (2022, Amazon — también confirmado en `economista/content/profile.json`).
- **En preparación (no publicado):** *Econometría Financiera con Python*, *Evaluación de Impacto en la Era Digital*.
- Ninguno de estos libros existe hoy en el repo canónico (`vinicioarcos.net`) — hay que incorporarlos con el estado correcto, sin presentar los dos últimos como publicados.

### 2.9 Proyecto de la Carrera de Economía (PDF institucional)
- El PDF `1.-Proyecto_Carrera_ECONOMIA_2_FEB_2021_V2.pdf` documenta el proyecto de nueva Carrera de Economía en la Universidad Técnica de Cotopaxi (semipresencial, aprobado 2 feb. 2021, 8 períodos, 5.760 horas, 43 asignaturas), pero **identifica como coordinador a Renato Pérez López, no a Vinicio Arcos**.
- **Estado: `pendingVerification`, no publicable.** No se atribuye autoría ni coordinación a Vinicio sin evidencia adicional de su rol específico (redacción, diseño curricular, estudio de pertinencia, etc.).

### 2.10 Proyectos genéricos de consultoría (sitio actual)
- Los 5 casos actuales del repo canónico ("Agenda económica para gobierno local", "Estudio de mercado y demanda sectorial", "Evaluación de impacto para programa de formación", "Retorno laboral de programa de capacitación", "Diagnóstico de desigualdad") **no tienen respaldo en ninguna de las fuentes auditadas** (ni `economista`, ni GitHub Pages, ni hoja de vida). No hay captura, URL, tecnología ni cliente identificable.
- **Estado: sin fuente → no cumplen el estándar de "proyecto verificable" del brief.** Deben ocultarse o marcarse `pendingVerification` hasta que el titular aporte documentación real, en lugar de presentarse como casos verificados.

### 2.11 Investigación (proyectos OSF) — nota explícita de la fuente
- Los tres proyectos de investigación (ENEMDU, Censo, Latacunga) están confirmados con enlace OSF en `economista/content/profile.json`, pero la propia fuente advierte: *"Métodos y resultados detallados no constan en la hoja de vida; consultar el repositorio OSF."*
- **Regla aplicada:** en las fichas de investigación no se inventa metodología ni hallazgos; solo se muestra título, institución, período y enlace a OSF.

## 3. Contenido confirmado y listo para usar (múltiples fuentes coinciden)

- 3 experiencias profesionales (IESS, Superintendencia de la Información, FES-ILDIS) — período no especificado en ninguna fuente.
- 8 experiencias docentes (7 universidades + FLACSO como becario), con materias/áreas detalladas — mayoría sin fechas exactas.
- Formación: Economista (Universidad Católica de Cuenca, 2011), Magíster en Economía del Desarrollo (FLACSO, 2015), Candidato a Doctor en Políticas Públicas (FLACSO).
- 8 publicaciones con DOI/enlace verificable (incluye las 3 ya presentes en el sitio actual + 5 adicionales: autoidentificación étnica 2026, empresas fantasmas 2025, analfabetismo digital 2025, entrevista Rolando Franco 2015, libro 2022).
- 3 artículos de blog con texto completo ya escrito (no son solo tarjetas): IA y estudio de economía, sobreeducación (título a corregir: "en boga", no "en voga"), regulación de IA en la UE.
- 13 capacitaciones/formación docente recibidas por Vinicio (distintas de los cursos que él dicta — no deben mezclarse).
- Habilidades técnicas reales: Python, R, Stata, SPSS, KoboToolbox, QGIS, GeoDa, ArcGIS, Power BI, Tableau.

## 3.1 Fase 1 aplicada (2026-08-27)

Cambios implementados sobre este repo con contenido ya verificado:

- `src/data/profile.ts`: corregida la denominación (`role`) a "Economista · MSc. en Economía del Desarrollo · Candidato a doctor en Políticas Públicas"; `location` actualizada al texto genérico acordado; eliminadas las métricas "10+/50+/100+" sin fuente (se retiró también su uso en `page.tsx`).
- `src/data/publications.ts`: reestructurado con tipos (`Publication`, `PublicationStatus`) y campos `id/title/authors/year/journal/citation/status/abstract?/topics/url/doi?`. Se agregaron las 4 publicaciones adicionales confirmadas en `economista/content/profile.json` (autoidentificación étnica 2026, empresas fantasmas 2025, analfabetismo digital 2025, entrevista Rolando Franco 2015), totalizando 7. Ninguna incluye `abstract` inventado: solo las 3 que ya tenían resumen verificado lo conservan.
- Nuevo componente `src/components/PublicationCard.tsx`: muestra estado editorial, cita normalizada, resumen (si existe), temas y enlace/DOI.
- Nueva ruta `src/app/publicaciones/page.tsx`: listado completo de las 7 publicaciones, con metadata propia (title/description).
- Portada (`src/app/page.tsx`): la sección de publicaciones ahora muestra solo las 4 más recientes con enlace "Ver todas las publicaciones" hacia `/publicaciones`.
- `src/components/Navbar.tsx`: el ítem "Publicaciones" ahora enlaza a `/publicaciones` en vez de un ancla interna.
- El libro *La trampa del voto popular* se dejó fuera de `publications.ts` a propósito — corresponde a la futura sección `/libros`, no a publicaciones académicas.

**No tocado en esta fase (pendiente de las fases siguientes o de tu confirmación):** proyectos genéricos de consultoría, correo/teléfono/LinkedIn en disputa, investigación (OSF), docencia, libros, blog, SEO global (JSON-LD, sitemap, OG, canonical).

**Verificación ejecutada:** `tsc --noEmit` sin errores; `next lint` sin advertencias; `next build` compila y prerrenderiza `/` y `/publicaciones` como estático; arranque en `next start` con `curl` confirmando HTTP 200 en ambas rutas y contenido esperado en el HTML servido (denominación corregida, sin rastro de "MSc. Economista", las 7 publicaciones presentes en `/publicaciones`).

## 3.2 Fase 2 aplicada (2026-08-27)

- Nuevo `src/data/status.ts` compartido (`ContentStatus`/`statusLabels`) reutilizado por publicaciones e investigación, evitando duplicar el catálogo de estados editoriales.
- Nuevo `src/data/research.ts` con los 3 proyectos de investigación confirmados en OSF (ENEMDU, Censo de Ecuador, Latacunga). Solo se muestran título, institución, período, estado y enlace — sin inventar pregunta, metodología ni hallazgos, tal como advierte la fuente ("no constan en la hoja de vida").
- Nuevo `src/components/ResearchCard.tsx` y ruta `src/app/investigacion/page.tsx`.
- Portada: nueva sección "Investigación en curso" (entre Servicios y Publicaciones) con los 3 proyectos y enlace a `/investigacion`.
- Nav: nuevo ítem "Investigación" → `/investigacion`.
- Verificación ejecutada: `tsc --noEmit`, `next lint` y `next build` limpios (`/`, `/investigacion`, `/publicaciones` prerrenderizadas); `next start` + `curl` confirmaron HTTP 200 en las tres rutas y los 3 enlaces OSF correctos en el HTML servido.

## 3.3 Fase 3 aplicada (2026-08-27)

- Nuevos `src/data/education.ts`, `src/data/experience.ts` (profesional y docente) y `src/data/skills.ts`, con los datos ya verificados de `economista/content/profile.json` (formación FLACSO/UCC, 3 cargos profesionales, 8 experiencias docentes, herramientas técnicas). Períodos sin fecha exacta se muestran como "Periodo no especificado" en vez de omitirse o inventarse.
- Nuevo `src/components/TimelineItem.tsx` reutilizado para formación y experiencia.
- Nueva ruta `src/app/perfil/page.tsx`: bio, formación, experiencia profesional, experiencia docente y capacidades técnicas (sin barras de porcentaje).
- Portada: nueva sección "Trayectoria" (cargo actual + 2 experiencias representativas + enlace a `/perfil`), insertada entre Especialidades y Servicios.
- La sección "Herramientas" de la portada ahora usa `skills.ts` en vez del arreglo hardcodeado anterior, que incluía "SQL" y "Análisis político" sin fuente verificable — quedan solo categorías con respaldo (métodos, software, SIG, visualización).
- El ítem de nav "Perfil" y el enlace del footer ahora apuntan a `/perfil` (antes anclaban a `#sobre-mi`); el id de esa sección en la portada se renombró a `perfil` para mantener el resaltado de nav consistente con el patrón usado en Investigación/Publicaciones.
- Verificación ejecutada: `tsc --noEmit`, `next lint` y `next build` limpios (`/`, `/perfil`, `/investigacion`, `/publicaciones` prerrenderizadas); `next start` + `curl` confirmaron HTTP 200 en las 4 rutas y el contenido esperado (formación e instituciones correctas en `/perfil`, "SQL" ya no aparece en la portada).

## 3.4 Fase 4 aplicada (2026-08-27): docencia + hoja de vida 2026

- Nuevo `src/data/training.ts` + ruta `src/app/docencia/page.tsx`: cursos y talleres (top 3 en portada, catálogo completo en `/docencia`) y formación docente continua. El enlace externo a ARCDATA Campus se movió de la portada a `/docencia`.
- **Vinicio entregó la hoja de vida oficial actualizada 2026** (`2_VITAE - VINICIO ARCOS NARANJO - 2026.pdf`), la fuente de mayor jerarquía según §4 de este documento. Se reemplazó `public/cv/vinicio-arcos-cv.pdf` con este archivo.
- Esta hoja de vida **resuelve** varios pendientes:
  - **Correo (§2.1):** confirma `vinicioarcosnaranjo@gmail.com` como el correo profesional vigente (coincide con lo que ya afirmaba `economista/content/profile.json`). Se actualizó `profile.ts`. El correo anterior (`vinicioarcos123@gmail.com`, usado en GitHub Pages y ligado a la cuenta de esta sesión) queda como alterno no publicado.
  - **Ubicación (§2.2):** confirma Ambato como ciudad de residencia. `profile.location` ahora es "Ambato, Ecuador · Disponible para colaboraciones nacionales e internacionales" (sin publicar la dirección domiciliaria exacta, que sí aparece en el PDF pero no se muestra en el sitio).
  - **Teléfono (§2.3):** confirma que `0992535336` sigue vigente. Se actualizó `profile.phone` con el valor real, pero **sigue sin renderizarse en ningún componente** — falta la confirmación explícita de que Vinicio quiere mostrarlo públicamente (vigencia ≠ autorización de publicación).
  - **Institución de posgrado:** se corrigió `profile.credentials.university`, que decía "Universidad Tecnológica Cordillera (UTC)" — una institución que no aparece en ninguna fuente auditada — por "FLACSO Ecuador", que sí es la institución real del Máster (confirmada en las tres fuentes).
- Se agregaron **2 publicaciones nuevas** confirmadas con DOI en la hoja de vida (no estaban en `economista/content/profile.json`): "Exposición de las ocupaciones ecuatorianas a la inteligencia artificial generativa..." (2026) y "Diversificación Económica y Crecimiento Sostenible en el Ecuador..." (2026). Total: 9 publicaciones.
- Se actualizó `skills.ts` con herramientas nuevas de la hoja de vida: AWS, WordPress, y una categoría nueva "IA y desarrollo" (Visual Studio Code, Docker, Claude CLI, Codex CLI, Gemini CLI).
- **No se publicó una sección "Referencias"**: la hoja de vida incluye nombre, cargo, celular y correo personal de 3 referencias profesionales (terceros). Publicar los datos de contacto de otras personas en un sitio web público sin su consentimiento no es apropiado; se omite deliberadamente.
- **No se publicaron datos sensibles** presentes en el PDF: cédula, estado civil, fecha de nacimiento, dirección domiciliaria exacta.
- Verificación ejecutada: `tsc --noEmit`, `next lint` y `next build` limpios (`/`, `/perfil`, `/investigacion`, `/publicaciones`, `/docencia` prerrenderizadas); `next start` + `curl` confirmaron HTTP 200 en las 5 rutas, el correo y ubicación nuevos en el HTML, las 2 publicaciones nuevas, las nuevas herramientas, "Universidad Tecnológica Cordillera" ya no aparece, y el CV descarga con el tamaño del archivo nuevo (559.150 bytes).

### 3.4.1 Discrepancias resueltas directamente por Vinicio (2026-08-27)

- **Candidatura doctoral: no está vigente.** Vinicio confirmó que la candidatura a "Doctor en Políticas Públicas" no sigue activa. Se eliminó la mención de todo el sitio: `profile.role`, `profile.summary`, `profile.credentials.candidate` (campo retirado) y el badge correspondiente en `Hero.tsx`. Se conserva únicamente la entrada de experiencia "Becario de doctorado y maestría — FLACSO Ecuador" (`experience.ts`, ya existente), que describe el rol de becario sin afirmar una candidatura activa. También se retiró de `education.ts` la ficha de formación "Candidato a Doctor en Políticas Públicas" que no constaba en la hoja de vida 2026.
- **Título de tesis de maestría: confirmado "Impacto de la eliminación de la tercerización y los resultados en la capacitación laboral en el Ecuador".** Vinicio proporcionó el enlace verificable al repositorio institucional: https://repositorio.flacsoandes.edu.ec/items/1d8d9e22-9538-483e-8af0-bee67aa210ea. Se agregó como campo `url` en `education.ts` y se muestra como enlace "Ver tesis" en `/perfil` (nueva prop `url` en `TimelineItem.tsx`).

## 3.5 Fase 5 aplicada (2026-08-27): libros y blog

- Nuevo `src/data/books.ts` + `BookCard.tsx` + ruta `/libros`. Datos verificados con un fetch específico a `vinicioarcos.github.io` (no la versión resumida del fetch inicial): **publicados** — Econometría I, La trampa del voto popular (con enlace a Amazon); **en preparación** — Econometría Financiera con Python, Evaluación de Impacto en la Era Digital. No se incluyó el enlace `libro-web.html` que reportó el fetch para dos libros distintos porque es sospechoso (la misma URL para dos libros diferentes sugiere un artefacto de extracción, no un enlace real) — mejor no enlazar que enlazar mal. Los libros en preparación tienen un botón "Notificarme" real (mailto con asunto prellenado a `profile.email`), no un botón decorativo.
- Nuevo `src/data/blogPosts.ts` (metadatos) + `src/data/blogPostBodies.tsx` (contenido completo) + rutas `/blog` y `/blog/[slug]` (con `generateStaticParams`, metadata por artículo y 404 real para slugs inexistentes). Los 3 artículos completos se recuperaron de `economista/app/blog/posts.tsx`, que ya tenía el texto íntegro escrito (no son tarjetas sin artículo).
- **Corrección editorial aplicada** (pedida explícitamente en el brief): "un fenómeno en voga" → "un fenómeno en boga", tanto en el título como en el cuerpo del artículo y en el slug de la URL (`sobreeducacion-fenomeno-en-boga`, no se conserva el slug con el error).
- La portada no ganó dos secciones más: dado que ya es larga (problema señalado explícitamente en el brief), Libros y Blog se enlazan desde la sección de Docencia ("Ver libros") y desde el Footer, no como secciones propias. Tampoco se agregaron al nav principal (ya tiene 7 ítems; agregar 2 más arriesgaba desborde horizontal) — pendiente una navegación agrupada ("Trabajo" / "Conocimiento") como sugiere el brief, no implementada todavía.
- Verificación ejecutada: `tsc --noEmit`, `next lint` y `next build` limpios (13 rutas generadas, incluyendo los 3 posts estáticos vía SSG); `next start` + `curl` confirmaron HTTP 200 en `/libros`, `/blog` y los 3 posts, **404 real** en un slug inexistente, "en boga" presente y "en voga" ausente, y los 2 libros en preparación con su enlace de notificación funcional.

## 4. Pendiente de confirmación directa del titular

1. ~~Correo público a mostrar (§2.1).~~ **Resuelto en Fase 4** con la hoja de vida 2026: `vinicioarcosnaranjo@gmail.com`.
2. Si se publica el teléfono en el sitio (vigencia ya confirmada: `0992535336`; falta la autorización explícita de mostrarlo públicamente) (§2.3).
3. URL correcta de LinkedIn — la hoja de vida 2026 no incluye LinkedIn en absoluto, así que tampoco lo resuelve (§2.4).
4. Vigencia y validez del enlace ORCID/OSF como `sameAs` (§2.7) — sí están confirmados en la hoja de vida 2026, pero sigue pendiente la verificación visual del perfil ORCID.
5. Métricas cuantitativas, si existen con base reproducible (§2.6).
6. Rol real de Vinicio en el Proyecto de Carrera de Economía UTC (§2.9).
7. Documentación (capturas, enlaces, tecnología) de los 5 "proyectos" genéricos actuales, o autorización para retirarlos (§2.10).
8. Confirmación de que el enlace de cursos ARCDATA (`arcdataconsulting.com/app/campus/courses/`) sigue vigente — es una SPA, el contenido no pudo verificarse por fetch automatizado.
9. ~~Candidatura doctoral (§3.4.1).~~ **Resuelto**: no está vigente, se retiró del sitio.
10. ~~Título de tesis de maestría (§3.4.1).~~ **Resuelto**: "Impacto de la eliminación de la tercerización...", con enlace verificable al repositorio FLACSO.
