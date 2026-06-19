const cursor = document.getElementById('customCursor');
let hue = 0; // Para el color arcoíris

document.addEventListener('mousemove', (e) => {
    // El cursor sigue las coordenadas del ratón
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    // Crear partícula arcoíris
    createParticle(e.clientX, e.clientY);
});

// Función para generar partículas
function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'rainbow-particle';

    // Posición y tamaño aleatorio
    const size = Math.random() * 8 + 4; // Entre 4 y 12px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x - size / 2}px`;
    particle.style.top = `${y - size / 2}px`;

    // Asignar color rotativo
    particle.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    hue = (hue + 5) % 360; // Cambiar tonalidad gradualmente

    document.body.appendChild(particle);

    // Eliminar partícula después de la animación
    setTimeout(() => {
        particle.remove();
    }, 600);
}

// Añadir efecto de expansión al pasar sobre elementos interactivos
const interactives = document.querySelectorAll('a, button, input, textarea, [role="button"]');
interactives.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

// 2. Funcionalidad de Modo Claro / Oscuro (Theme Toggle con View Transition)
const themeToggleBtns = document.querySelectorAll('#themeToggle');
const lightIcons = document.querySelectorAll('.light-icon');
const darkIcons = document.querySelectorAll('.dark-icon');
const body = document.body;

// Revisar preferencia guardada
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark');
    updateIcons(true);
} else {
    body.classList.remove('dark');
    updateIcons(false);
}

function updateIcons(isDark) {
    if (isDark) {
        lightIcons.forEach(i => i.classList.remove('hidden'));
        darkIcons.forEach(i => i.classList.add('hidden'));
    } else {
        lightIcons.forEach(i => i.classList.add('hidden'));
        darkIcons.forEach(i => i.classList.remove('hidden'));
    }
}

// Lógica de cambio de tema
function toggleTheme() {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateIcons(isDark);
}

themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Ejecutar transición nativa si el navegador lo soporta
        if (!document.startViewTransition) {
            toggleTheme();
            return;
        }
        document.startViewTransition(() => {
            toggleTheme();
        });
    });
});

// 3. Scroll suave y botón Volver Arriba
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.remove('opacity-0', 'pointer-events-none');
        backToTopButton.classList.add('opacity-100');
    } else {
        backToTopButton.classList.add('opacity-0', 'pointer-events-none');
        backToTopButton.classList.remove('opacity-100');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 4. Lógica de Pestañas para Trayectoria
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => {
            b.classList.remove('bg-[var(--btn-bg)]');
            b.classList.add('hover:bg-black/5');
        });

        tabContents.forEach(c => c.classList.add('hidden'));

        btn.classList.add('bg-[var(--btn-bg)]');
        btn.classList.remove('hover:bg-black/5');

        const targetId = btn.getAttribute('data-target');
        document.getElementById(targetId).classList.remove('hidden');
    });
});