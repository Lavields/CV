# Portafolio de Luis Paria

Sitio web personal de **Luis Francisco Paria Zuñiga**, desarrollador Full Stack y estudiante de Ingeniería en Ejecución Industrial. Reúne mi perfil, formación, herramientas y proyectos destacados.

**Vista en línea:** [lavields.github.io/CV](https://lavields.github.io/CV/)

## Contenido

- Portada con propuesta de valor y cifras clave.
- Proyectos con filtros: **StreamVoice**, **Life OS**, **Sismógrafo Global** y **Alke Wallet**.
- Página de caso de estudio de StreamVoice (`streamvoice.html`) con arquitectura, métricas y decisiones técnicas.
- Perfil, stack técnico (desarrollo, datos e IA aplicada) y formación.
- Contacto con WhatsApp, correo (con botón para copiar), LinkedIn y GitHub.
- Trayectoria académica y enlaces de contacto.
- Interfaz bilingüe (español e inglés) y tres modos visuales: claro, oscuro y Pixel Adventure.

## Tecnologías

- HTML5 semántico
- CSS3 responsivo
- JavaScript moderno (ES6+)
- Web Audio API para la experiencia opcional del modo Pixel Adventure

No requiere dependencias ni proceso de compilación: es un sitio estático listo para publicar con GitHub Pages.

## Ejecutarlo localmente

Abre `index.html` en un navegador. Si prefieres servirlo con un servidor local:

```bash
npx serve .
```

Luego visita la dirección que muestre el servidor.

## Estructura

```text
├── assets/                  # Imagen de perfil, ilustraciones (WebP), avatares y CV descargable
├── index.html               # Página principal para GitHub Pages
├── streamvoice.html         # Caso de estudio de StreamVoice
├── styles.css               # Estilos y temas visuales
├── main.js                  # Interacciones, idioma, temas y accesibilidad
├── index.ejs                # Vista alternativa para un servidor Express
└── home.controller.js       # Controlador Express opcional
```

## Publicación

El sitio se publica desde la rama `main` mediante GitHub Pages. Tras actualizar esa rama, estará disponible en:

<https://lavields.github.io/CV/>

## Contacto

- [LinkedIn](https://www.linkedin.com/in/parialuis/)
- [GitHub](https://github.com/Lavields)
- [Email](mailto:parialuis@gmail.com)
