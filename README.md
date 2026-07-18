# 🌍 Explorador de Datos Sísmicos - Sismógrafo Global

Un tablero interactivo y responsivo de monitoreo geológico que conecta en tiempo real con los servidores gubernamentales del **USGS (United States Geological Survey)** para procesar y visualizar la actividad sísmica mundial. Desarrollado desde cero en un entorno de desarrollo puro (Vanilla JS) para demostrar el dominio de la asincronía avanzada y la arquitectura de software en el frontend.

## 🚀 Características Clave
* **Arquitectura Desacoplada (POO):** Separación estricta de responsabilidades mediante clases controladoras de UI y servicios de datos.
* **Consumo Multiorigen Asíncrono:** Uso de `Promise.all()` para consultar de manera concurrente múltiples endpoints de la API.
* **Analítica Reactiva:** Gráficos dinámicos e interactivos implementados con **Chart.js** que se actualizan automáticamente según los filtros del usuario.
* **Caché Persistente:** Optimización de peticiones mediante el uso de `localStorage` con un sistema de expiración lógica a los 5 minutos.
* **Filtro Geográfico Local:** Segmentación de datos en el cliente para aislar y destacar de forma exclusiva la actividad sísmica ocurrida en Chile.
* **UI/UX Avanzada:** Diseño moderno y 100% responsivo con Tailwind CSS, que incluye un conmutador de tema claro/oscuro (con persistencia de preferencia), indicadores visuales de carga y control integral de errores.

## 🛠️ Tecnologías utilizadas
* HTML5 Semántico
* Tailwind CSS (vía CDN)
* JavaScript Puro (Vanilla JS - ES6+)
* Chart.js (vía CDN)
* API GeoJSON de la USGS
