// Encapsulamiento del código (Buenas prácticas)
(() => {
    // 1. Cursor Minimalista y Partículas Canvas (Optimizado)
    const cursor = document.getElementById('customCursor');
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');

    let particlesArray = [];
    let hue = 0;

    // Ajustar el tamaño del canvas al redimensionar  la ventana
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Objeto Partícula
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 8 + 4;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
            this.color = `hsl(${hue}, 100%, 50%)`;
            this.life = 1; // Opacidad
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.size -= 0.1;
            this.life -= 0.02;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = Math.max(this.life, 0); // Previene valores negativos
            ctx.fill();
        }
    }

    // Capturar el movimiento para el cursor y las partículas
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        // Generar solo 2 partículas por evento para mejor rendimiento
        for (let i = 0; i < 2; i++) {
            particlesArray.push(new Particle(e.clientX, e.clientY));
        }
        hue = (hue + 5) % 360;
    });

    // Bucle de animación (60FPS sin tocar el DOM)
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            if (particlesArray[i].size > 0 && particlesArray[i].life > 0) {
                particlesArray[i].draw();
            } else {
                particlesArray.splice(i, 1);
                i--;
            }
        }
        requestAnimationFrame(animateParticles);
    }
    animateParticles();

    // Efecto hover del cursor sobre botones
    const interactives = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    interactives.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // 2. Lógica de Scroll Reveal
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                observer.unobserve(entry.target); // Dejar de observar una vez que aparece
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(element => {
        observer.observe(element);
    });

    // 3. Funcionalidad de Modo Claro / Oscuro (Theme Toggle)
    const themeToggleBtns = document.querySelectorAll('#themeToggle');
    const lightIcons = document.querySelectorAll('.light-icon');
    const darkIcons = document.querySelectorAll('.dark-icon');
    const body = document.body;

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

    function toggleTheme() {
        body.classList.toggle('dark');
        const isDark = body.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateIcons(isDark);
    }

    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (!document.startViewTransition) {
                toggleTheme();
                return;
            }
            document.startViewTransition(() => {
                toggleTheme();
            });
        });
    });

    // 4. Lógica de Scroll suave y botón Volver Arriba
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

    // 5. Lógica de Pestañas (Tailwind Classes Update)
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Reiniciar todos los botones
            tabBtns.forEach(b => {
                b.classList.remove('bg-[var(--btn-bg)]', 'text-[var(--text-color)]');
                b.classList.add('hover:bg-black/5', 'text-[var(--text-muted)]');
            });

            // Ocultar todos los contenidos
            tabContents.forEach(c => {
                c.classList.add('hidden', 'opacity-0');
                c.classList.remove('opacity-100');
            });

            // Activar el botón clicado
            btn.classList.add('bg-[var(--btn-bg)]', 'text-[var(--text-color)]');
            btn.classList.remove('hover:bg-black/5', 'text-[var(--text-muted)]');

            // Mostrar el contenido correspondiente
            const targetId = btn.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);

            // Quitar la clase 'hidden' para que exista en el DOM
            targetContent.classList.remove('hidden');

            // Forzar el renderizado del navegador antes de cambiar la opacidad
            void targetContent.offsetWidth;

            // Ejecutar la animación de aparición
            targetContent.classList.remove('opacity-0');
            targetContent.classList.add('opacity-100');
        });
    });
})();