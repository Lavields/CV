/**
 * script.js — Luis Paria Portafolio
 * Módulos: Cursor · Tema · ScrollReveal · Nav · Tabs · MenúMóvil · BotónArriba
 */

(() => {
  'use strict';

  /* ══════════════════════════════════════════
     CURSOR PERSONALIZADO
  ══════════════════════════════════════════ */
  const initCursor = () => {
    const el = document.getElementById('cursor');
    if (!el) return;

    // Ocultar en dispositivos táctiles
    if (window.matchMedia('(pointer: coarse)').matches) {
      el.style.display = 'none';
      document.body.style.cursor = 'auto';
      document.querySelectorAll('a, button, [role="button"]').forEach(n => {
        n.style.cursor = 'auto';
      });
      return;
    }

    let x = -100, y = -100;

    document.addEventListener('mousemove', e => {
      x = e.clientX;
      y = e.clientY;
      el.style.left = x + 'px';
      el.style.top  = y + 'px';
    }, { passive: true });

    // Efecto grow en interactivos
    document.querySelectorAll('a, button, [role="button"]').forEach(node => {
      node.addEventListener('mouseenter', () => el.classList.add('grow'),    { passive: true });
      node.addEventListener('mouseleave', () => el.classList.remove('grow'), { passive: true });
    });
  };


  /* ══════════════════════════════════════════
     MODO OSCURO / CLARO
  ══════════════════════════════════════════ */
  const initTheme = () => {
    const btn  = document.getElementById('theme-btn');
    const root = document.documentElement;

    // Detectar preferencia guardada o preferencia del sistema
    const getPreference = () => {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const apply = (theme) => {
      root.classList.toggle('dark', theme === 'dark');
    };

    // Aplicar al cargar (sin transición)
    apply(getPreference());

    if (!btn) return;

    btn.addEventListener('click', () => {
      const next = root.classList.contains('dark') ? 'light' : 'dark';
      localStorage.setItem('theme', next);

      // Usar View Transitions API si está disponible
      if (!document.startViewTransition) {
        apply(next);
        return;
      }
      document.startViewTransition(() => apply(next));
    });
  };


  /* ══════════════════════════════════════════
     SCROLL REVEAL (Intersection Observer)
  ══════════════════════════════════════════ */
  const initScrollReveal = () => {
    const nodes = document.querySelectorAll('.reveal');
    if (!nodes.length) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    nodes.forEach(n => io.observe(n));
  };


  /* ══════════════════════════════════════════
     NAVBAR — sombra al hacer scroll
  ══════════════════════════════════════════ */
  const initNavbar = () => {
    const header = document.getElementById('site-header');
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // ejecutar al cargar
  };


  /* ══════════════════════════════════════════
     MENÚ MÓVIL
  ══════════════════════════════════════════ */
  const initMobileMenu = () => {
    const btn   = document.getElementById('menu-btn');
    const menu  = document.getElementById('mobile-menu');
    const icoM  = document.getElementById('icon-menu');
    const icoC  = document.getElementById('icon-close');
    if (!btn || !menu) return;

    let open = false;

    const toggle = () => {
      open = !open;
      menu.classList.toggle('open', open);
      menu.classList.toggle('hidden', !open);
      menu.setAttribute('aria-hidden', String(!open));
      btn.setAttribute('aria-expanded', String(open));
      icoM?.classList.toggle('hidden', open);
      icoC?.classList.toggle('hidden', !open);
    };

    btn.addEventListener('click', toggle);

    // Cerrar al hacer clic en un link del menú
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (open) toggle();
      });
    });

    // Cerrar al hacer clic fuera
    document.addEventListener('click', e => {
      if (open && !menu.contains(e.target) && !btn.contains(e.target)) toggle();
    }, { passive: true });
  };


  /* ══════════════════════════════════════════
     TABS DE EDUCACIÓN
  ══════════════════════════════════════════ */
  const initTabs = () => {
    const btns = document.querySelectorAll('.edu-tab');
    if (!btns.length) return;

    const activate = (targetId) => {
      // Resetear todos los botones
      btns.forEach(b => {
        b.classList.remove('edu-tab--active');
        b.setAttribute('aria-selected', 'false');
      });

      // Ocultar todos los paneles
      document.querySelectorAll('.edu-panel').forEach(p => {
        p.classList.add('hidden');
      });

      // Activar botón y panel seleccionado
      const activeBtn = document.querySelector(`[data-target="${targetId}"]`);
      const activePanel = document.getElementById(targetId);

      if (activeBtn) {
        activeBtn.classList.add('edu-tab--active');
        activeBtn.setAttribute('aria-selected', 'true');
      }
      if (activePanel) {
        activePanel.classList.remove('hidden');
        // Re-disparar animación CSS
        void activePanel.offsetWidth;
        activePanel.style.animation = 'none';
        requestAnimationFrame(() => {
          activePanel.style.animation = '';
        });
      }
    };

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        if (target) activate(target);
      });
    });
  };


  /* ══════════════════════════════════════════
     SCROLL SUAVE + BOTÓN VOLVER ARRIBA
  ══════════════════════════════════════════ */
  const initScroll = () => {
    const backBtn = document.getElementById('back-top');

    // Scroll suave para anclas internas
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Botón volver arriba
    if (!backBtn) return;
    window.addEventListener('scroll', () => {
      backBtn.classList.toggle('show', window.scrollY > 400);
    }, { passive: true });
  };


  /* ══════════════════════════════════════════
     INICIALIZACIÓN
  ══════════════════════════════════════════ */
  initTheme();       // Primero para evitar flash
  initCursor();
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initTabs();
  initScroll();

})();