const dictionary = {
  es: {
    skipLink: 'Saltar al contenido', menu: 'Menú', navProjects: 'Proyectos', navAbout: 'Sobre mí', navStack: 'Stack', navEducation: 'Educación', navContact: 'Contacto', navContactCta: 'Contactar',
    themeGroup: 'Selector de modo visual', themeLight: 'Modo claro', themeDark: 'Modo oscuro', themePixel: 'Modo Pixel Adventure',
    musicOn: 'Música: ON', musicOff: 'Música: OFF', musicOnLabel: 'Desactivar música', musicOffLabel: 'Activar música',
    eyebrow: 'FULL STACK · DATOS · IA APLICADA — TALCA, CHILE',
    heroTitle: 'Software que conecta personas, datos <em>y operación.</em>',
    heroLead: 'Soy <strong>Luis Paria</strong>, desarrollador Full Stack con más de cinco años en producción industrial. Construyo herramientas que se usan en el mundo real: desde un <strong>TTS multistream para OBS</strong> hasta un <strong>asistente personal con IA</strong> en Telegram.',
    seeProjects: 'Ver proyectos <span aria-hidden="true">↓</span>', seeProjectsShort: 'Ver proyectos', downloadCv: 'Descargar CV', availability: 'Disponible para colaborar',
    proofProjects: 'proyectos publicados', proofTests: 'pruebas automatizadas', proofPlatforms: 'plataformas de streaming en vivo', proofYears: 'años en industria',
    nowKicker: 'AHORA CONSTRUYENDO', nowTitle: 'StreamVoice — TTS multistream', nowSub: 'Twitch · YouTube · Kick · TikTok en una sola cola',
    projectsKicker: 'PROYECTOS', projectsTitle: 'Cosas que construí y funcionan.',
    filterLabel: 'Filtrar proyectos', filterAll: 'Todos', filterRealtime: 'Tiempo real', filterAi: 'IA aplicada', filterData: 'Datos', filterFintech: 'Fintech',
    filterStatus: n => `${n} ${n === 1 ? 'proyecto visible' : 'proyectos visibles'}`,
    badgeFeatured: 'NUEVO · DESTACADO', badgeAi: 'NUEVO · IA APLICADA', viewCase: 'Caso de estudio →', viewRepo: 'Ver repositorio ↗', viewRepoShort: 'Repo ↗', viewDemo: 'Demo ↗',
    svYear: '2026 · Usado en directos reales', svTitle: 'StreamVoice — TTS multistream para OBS', svDesc: 'El chat de Twitch, YouTube, Kick y TikTok en una sola cola de voz, con avatares que mueven la boca al ritmo del audio.',
    svSample: '¡Hola desde Talca! qué buena la transmisión', svVoice1: 'voz chilena', svVoice2: 'voz verity', svVoice3: 'efecto {20}', svVoice4: 'voz neutra',
    kpiPlatforms: 'plataformas', kpiTests: 'pruebas', kpiEmojis: 'emojis narrados', kpiDesktop: 'app Electron',
    loTitle: 'Life OS — asistente en Telegram', loDesc: 'Agenda, Moodle, correo y recordatorios en un solo chat, con un agente local protegido por un control de seguridad que revisa cada acción.',
    loMsg1: '¿qué tengo mañana?', loMsg2: '📅 Mañana: Estadística 08:30 · Entrega informe 23:59 · Dentista 15:00', loMsg3: 'recuérdame a las 20:30 entregar el informe', loMsg4: '0:04 · Listo, quedó en tus Recordatorios',
    seismicType: 'TIEMPO REAL · DATOS', seismicYear: '2026 · Hackatón', seismicTitle: 'Sismógrafo Global', seismicDesc: 'Seis fuentes sísmicas en paralelo, con caché local y deduplicación de eventos, visualizadas en un panel analítico.',
    seismicImageAlt: 'Ilustración pixel art de una estación de análisis sísmico', seismicImageAltPro: 'Visual editorial de un panel de análisis sísmico',
    walletType: 'FINTECH', walletYear: '2026 · Bootcamp', walletTitle: 'Alke Wallet', walletDesc: 'Billetera con sesión, depósitos, transferencias y un libro de movimientos que se mantiene consistente entre sesiones, sin backend.',
    walletImageAlt: 'Ilustración pixel art de una billetera y libro contable', walletImageAltPro: 'Visual editorial de una interfaz de billetera digital',
    profileKicker: 'SOBRE MÍ', profileTitle: 'Tecnología que entiende la operación.', profileText: 'Desarrollador de software Full Stack y estudiante de Ingeniería en Ejecución Industrial. Combino más de cinco años de experiencia en producción automatizada y soporte analítico con desarrollo web, datos e inteligencia artificial aplicada.', location: 'Ubicación', education: 'Formación', educationValue: 'Ingeniería Industrial · UCM', focus: 'Enfoque', focusValue: 'Software · Datos · IA',
    skillsKicker: 'STACK', skillsTitle: 'Stack técnico y herramientas.', dev: 'Desarrollo', data: 'Datos', ai: 'IA aplicada',
    educationKicker: 'EDUCACIÓN', educationTitle: 'Aprendizaje aplicado y continuo.', educationBootcampTab: 'Bootcamp JS', educationIndustrialTab: 'Ingeniería UCM', educationAiTab: 'Certificación IA',
    educationBootcampMeta: '2026 — Presente', educationBootcampTitle: 'Desarrollador Full Stack JavaScript Trainee', educationBootcampProvider: 'Talento Digital para Chile', educationBootcampPoint1: 'Programa intensivo becado: JavaScript, Node.js y React.js como stack principal.', educationBootcampPoint2: 'Desarrollo de aplicaciones web con HTML, CSS, Bootstrap, jQuery y APIs REST.', educationBootcampPoint3: 'Control de versiones con Git/GitHub y buenas prácticas de código modular.', educationBootcampPoint4: 'Metodologías ágiles y trabajo colaborativo en equipo.',
    educationIndustrialMeta: '4.º semestre — En curso', educationIndustrialTitle: 'Ingeniería en Ejecución Industrial', educationIndustrialProvider: 'Universidad Católica del Maule (UCM)', educationIndustrialPoint1: 'Optimización de procesos, modelado matemático y gestión de operaciones.', educationIndustrialPoint2: 'Visión analítica y sistémica aplicada a la resolución de problemas complejos.', educationIndustrialPoint3: 'Base en eficiencia industrial, análisis de datos e inteligencia de negocios.',
    educationAiMeta: 'Certificado', educationAiTitle: 'Google AI Essentials', educationAiProvider: 'Google', educationAiPoint1: 'Fundamentos de inteligencia artificial y modelos generativos.', educationAiPoint2: 'Optimización de flujos de trabajo cotidianos mediante herramientas de IA.', educationAiPoint3: 'Aplicación práctica de IA para aumentar la productividad en desarrollo y análisis.',
    contactKicker: 'CONTACTO', contactTitle: '¿Construimos algo útil?', contactText: 'Estoy abierto a conversar sobre software, datos y operaciones. Elige el canal que te acomode.',
    contactWaHint: 'Respuesta más rápida', contactMail: 'Correo', copy: 'Copiar', copied: 'Copiado ✓', copyFailed: 'Cópialo a mano', dockLabel: 'Acciones rápidas',
    csKicker: 'CASO DE ESTUDIO · TIEMPO REAL', csTitle: 'StreamVoice: el chat de cuatro plataformas, en una sola voz.',
    csSummary: 'Quienes transmiten en varias plataformas a la vez no tenían una forma gratuita de que su audiencia “hablara” en el directo. Construí un servidor que une los chats, los lee con voces configurables y anima un avatar dentro de OBS.',
    csBack: '← Todos los proyectos', csRole: 'Rol', csRoleValue: 'Diseño, backend y frontend', csYear: 'Año', csPlatforms: 'Plataformas', csStatus: 'Estado', csStatusValue: 'Usado en directos reales', csVoice: 'Voz',
    csTocLabel: 'Secciones del caso', csTocProblem: 'Problema', csTocArch: 'Arquitectura', csTocResults: 'Resultados', csTocDecisions: 'Decisiones técnicas', csTocGallery: 'Galería',
    csProblemKicker: '01 · EL PROBLEMA', csProblem: 'Cada plataforma tiene su propio chat y sus propios límites. Las herramientas de TTS existentes son de pago, funcionan con una sola plataforma o no se integran bien con OBS.',
    csSolutionKicker: '02 · LA SOLUCIÓN', csSolution: 'Una cola compartida de hasta 100 mensajes que conserva la plataforma de origen, filtros de moderación, cambio de voz dentro del mensaje (<code>{verity}</code>) y un overlay que sincroniza la boca del avatar con el volumen.',
    csArchKicker: '03 · ARQUITECTURA', csNodeIn: 'ENTRADA', csNodeInTitle: 'Chats en vivo', csNodeInText: 'WebSocket, polling y webhooks firmados', csNodeCore: 'NÚCLEO', csNodeCoreText: 'Cola compartida, filtros, permisos por cuenta y token de overlay aislado',
    csNodeVoice: 'VOZ', csNodeVoiceTitle: 'Motores TTS', csNodeVoiceText: 'Edge (gratis) · Fish · ElevenLabs · Qwen3 local', csNodeOut: 'SALIDA · SSE', csNodeOutTitle: 'Overlay OBS', csNodeOutText: 'Avatar, boca según el volumen y subtítulos',
    csKpi1: 'plataformas simultáneas', csKpi2: 'pruebas con node:test', csKpi3: 'emojis convertidos a voz', csKpi4: 'costo base con Edge TTS',
    csDecisionsKicker: '04 · DECISIONES TÉCNICAS',
    csDecision1: '<strong>SSE en vez de WebSocket para el overlay:</strong> OBS solo necesita recibir estado, y SSE se reconecta solo.',
    csDecision2: '<strong>Claves que nunca vuelven al navegador:</strong> el servidor guarda los secretos, y en la app de escritorio se cifran con <code>safeStorage</code>.',
    csDecision3: '<strong>Contraseñas con scrypt y permisos validados en el servidor</strong> para cada canal y avatar.',
    csDecision4: '<strong>Texto pensado para el habla:</strong> expande abreviaciones del chat y describe emojis con los nombres de Unicode CLDR.',
    csGalleryKicker: '05 · GALERÍA DE AVATARES', csNext: 'OTRO PROYECTO', csNextTitle: 'Life OS — asistente en Telegram ↗',
    csAlt1: 'Avatar gato con camiseta de Chile', csAlt2: 'Avatar chibi de pelo rojo', csAlt3: 'Avatar gato con camiseta de Japón', csAlt4: 'Avatar gato calicó', csAlt5: 'Avatar gato con camiseta de México', csAlt6: 'Avatar marioneta de calcetín', csAlt7: 'Avatar de chica', csAlt8: 'Avatar gato negro'
  },
  en: {
    skipLink: 'Skip to content', menu: 'Menu', navProjects: 'Projects', navAbout: 'About', navStack: 'Stack', navEducation: 'Education', navContact: 'Contact', navContactCta: 'Contact me',
    themeGroup: 'Visual mode selector', themeLight: 'Light mode', themeDark: 'Dark mode', themePixel: 'Pixel Adventure mode',
    musicOn: 'Music: ON', musicOff: 'Music: OFF', musicOnLabel: 'Turn music off', musicOffLabel: 'Turn music on',
    eyebrow: 'FULL STACK · DATA · APPLIED AI — TALCA, CHILE',
    heroTitle: 'Software that connects people, data <em>and operations.</em>',
    heroLead: 'I’m <strong>Luis Paria</strong>, a Full Stack developer with more than five years in industrial production. I build tools people actually use: from a <strong>multistream TTS for OBS</strong> to a <strong>personal AI assistant</strong> on Telegram.',
    seeProjects: 'See projects <span aria-hidden="true">↓</span>', seeProjectsShort: 'See projects', downloadCv: 'Download résumé', availability: 'Available to collaborate',
    proofProjects: 'published projects', proofTests: 'automated tests', proofPlatforms: 'live streaming platforms', proofYears: 'years in industry',
    nowKicker: 'CURRENTLY BUILDING', nowTitle: 'StreamVoice — multistream TTS', nowSub: 'Twitch · YouTube · Kick · TikTok in a single queue',
    projectsKicker: 'PROJECTS', projectsTitle: 'Things I built that work.',
    filterLabel: 'Filter projects', filterAll: 'All', filterRealtime: 'Real time', filterAi: 'Applied AI', filterData: 'Data', filterFintech: 'Fintech',
    filterStatus: n => `${n} ${n === 1 ? 'project shown' : 'projects shown'}`,
    badgeFeatured: 'NEW · FEATURED', badgeAi: 'NEW · APPLIED AI', viewCase: 'Case study →', viewRepo: 'View repository ↗', viewRepoShort: 'Repo ↗', viewDemo: 'Demo ↗',
    svYear: '2026 · Used in real streams', svTitle: 'StreamVoice — multistream TTS for OBS', svDesc: 'Twitch, YouTube, Kick and TikTok chat in a single voice queue, with avatars whose mouths move to the audio.',
    svSample: 'Hi from Talca! great stream', svVoice1: 'Chilean voice', svVoice2: 'verity voice', svVoice3: 'sound effect {20}', svVoice4: 'neutral voice',
    kpiPlatforms: 'platforms', kpiTests: 'tests', kpiEmojis: 'emojis read aloud', kpiDesktop: 'Electron app',
    loTitle: 'Life OS — Telegram assistant', loDesc: 'Calendar, Moodle, email and reminders in a single chat, with a local agent guarded by a safety check that reviews every action.',
    loMsg1: 'what do I have tomorrow?', loMsg2: '📅 Tomorrow: Statistics 08:30 · Report due 23:59 · Dentist 15:00', loMsg3: 'remind me at 20:30 to hand in the report', loMsg4: '0:04 · Done, it’s in your Reminders',
    seismicType: 'REAL TIME · DATA', seismicYear: '2026 · Hackathon', seismicTitle: 'Global Seismograph', seismicDesc: 'Six seismic sources in parallel, with local caching and event deduplication, shown in an analytical dashboard.',
    seismicImageAlt: 'Pixel art illustration of a seismic analysis station', seismicImageAltPro: 'Editorial visual of a seismic analysis dashboard',
    walletType: 'FINTECH', walletYear: '2026 · Bootcamp', walletTitle: 'Alke Wallet', walletDesc: 'A wallet with sessions, deposits, transfers and a movement ledger that stays consistent across sessions, without a backend.',
    walletImageAlt: 'Pixel art illustration of a wallet and accounting ledger', walletImageAltPro: 'Editorial visual of a digital wallet interface',
    profileKicker: 'ABOUT', profileTitle: 'Technology that understands operations.', profileText: 'Full Stack software developer and Industrial Engineering student. I combine more than five years in automated production and analytical support with web development, data, and applied artificial intelligence.', location: 'Location', education: 'Education', educationValue: 'Industrial Engineering · UCM', focus: 'Focus', focusValue: 'Software · Data · AI',
    skillsKicker: 'STACK', skillsTitle: 'Technical stack and tools.', dev: 'Development', data: 'Data', ai: 'Applied AI',
    educationKicker: 'EDUCATION', educationTitle: 'Applied, continuous learning.', educationBootcampTab: 'JS Bootcamp', educationIndustrialTab: 'UCM Engineering', educationAiTab: 'AI certificate',
    educationBootcampMeta: '2026 — Present', educationBootcampTitle: 'Full Stack JavaScript Developer Trainee', educationBootcampProvider: 'Talento Digital para Chile', educationBootcampPoint1: 'Intensive scholarship programme focused on JavaScript, Node.js, and React.js.', educationBootcampPoint2: 'Web application development with HTML, CSS, Bootstrap, jQuery, and REST APIs.', educationBootcampPoint3: 'Git/GitHub version control and modular-code best practices.', educationBootcampPoint4: 'Agile methods and collaborative teamwork.',
    educationIndustrialMeta: '4th semester — In progress', educationIndustrialTitle: 'Industrial Execution Engineering', educationIndustrialProvider: 'Universidad Católica del Maule (UCM)', educationIndustrialPoint1: 'Process optimisation, mathematical modelling, and operations management.', educationIndustrialPoint2: 'Analytical and systemic thinking applied to complex problem solving.', educationIndustrialPoint3: 'A foundation in industrial efficiency, data analysis, and business intelligence.',
    educationAiMeta: 'Certificate', educationAiTitle: 'Google AI Essentials', educationAiProvider: 'Google', educationAiPoint1: 'Fundamentals of artificial intelligence and generative models.', educationAiPoint2: 'Optimising everyday workflows through AI tools.', educationAiPoint3: 'Practical AI application to improve productivity in development and analysis.',
    contactKicker: 'CONTACT', contactTitle: 'Shall we build something useful?', contactText: 'I am open to conversations about software, data, and operations. Pick whichever channel suits you.',
    contactWaHint: 'Fastest reply', contactMail: 'Email', copy: 'Copy', copied: 'Copied ✓', copyFailed: 'Copy it manually', dockLabel: 'Quick actions',
    csKicker: 'CASE STUDY · REAL TIME', csTitle: 'StreamVoice: four platforms’ chat, in a single voice.',
    csSummary: 'Streamers broadcasting on several platforms at once had no free way to let their audience “speak” on stream. I built a server that merges the chats, reads them with configurable voices and animates an avatar inside OBS.',
    csBack: '← All projects', csRole: 'Role', csRoleValue: 'Design, backend and frontend', csYear: 'Year', csPlatforms: 'Platforms', csStatus: 'Status', csStatusValue: 'Used in real streams', csVoice: 'Voice',
    csTocLabel: 'Case study sections', csTocProblem: 'Problem', csTocArch: 'Architecture', csTocResults: 'Results', csTocDecisions: 'Technical decisions', csTocGallery: 'Gallery',
    csProblemKicker: '01 · THE PROBLEM', csProblem: 'Every platform has its own chat and its own limits. Existing TTS tools are paid, support a single platform, or don’t integrate well with OBS.',
    csSolutionKicker: '02 · THE SOLUTION', csSolution: 'A shared queue of up to 100 messages that keeps each message’s platform, moderation filters, in-message voice switching (<code>{verity}</code>) and an overlay that syncs the avatar’s mouth to the volume.',
    csArchKicker: '03 · ARCHITECTURE', csNodeIn: 'INPUT', csNodeInTitle: 'Live chats', csNodeInText: 'WebSocket, polling and signed webhooks', csNodeCore: 'CORE', csNodeCoreText: 'Shared queue, filters, per-account permissions and an isolated overlay token',
    csNodeVoice: 'VOICE', csNodeVoiceTitle: 'TTS engines', csNodeVoiceText: 'Edge (free) · Fish · ElevenLabs · local Qwen3', csNodeOut: 'OUTPUT · SSE', csNodeOutTitle: 'OBS overlay', csNodeOutText: 'Avatar, volume-driven mouth and subtitles',
    csKpi1: 'simultaneous platforms', csKpi2: 'tests with node:test', csKpi3: 'emojis turned into speech', csKpi4: 'base cost with Edge TTS',
    csDecisionsKicker: '04 · TECHNICAL DECISIONS',
    csDecision1: '<strong>SSE instead of WebSocket for the overlay:</strong> OBS only needs to receive state, and SSE reconnects on its own.',
    csDecision2: '<strong>Keys never go back to the browser:</strong> the server holds the secrets, and the desktop app encrypts them with <code>safeStorage</code>.',
    csDecision3: '<strong>scrypt password hashes and server-side permission checks</strong> for every channel and avatar.',
    csDecision4: '<strong>Text made for speech:</strong> expands chat abbreviations and describes emojis using Unicode CLDR names.',
    csGalleryKicker: '05 · AVATAR GALLERY', csNext: 'ANOTHER PROJECT', csNextTitle: 'Life OS — Telegram assistant ↗',
    csAlt1: 'Cat avatar wearing a Chile shirt', csAlt2: 'Red-haired chibi avatar', csAlt3: 'Cat avatar wearing a Japan shirt', csAlt4: 'Calico cat avatar', csAlt5: 'Cat avatar wearing a Mexico shirt', csAlt6: 'Sock puppet avatar', csAlt7: 'Girl avatar', csAlt8: 'Black cat avatar'
  }
};

const root = document.documentElement;
const languageButton = document.querySelector('#language-toggle');
const themeButtons = [...document.querySelectorAll('[data-theme-choice]')];
const themeSwitcher = document.querySelector('.theme-switcher');
const musicButton = document.querySelector('#music-toggle');
const educationTabs = [...document.querySelectorAll('[data-education-tab]')];
const educationPanels = [...document.querySelectorAll('[data-education-panel]')];
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const projectCards = [...document.querySelectorAll('.project-card[data-category]')];
const filterStatus = document.querySelector('#filter-status');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const storage = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { /* almacenamiento no disponible */ } }
};

let language = storage.get('portfolio-language') === 'en' ? 'en' : 'es';
let musicOn = false;
let audioContext;
let musicTimer;
let musicStep = 0;
let currentFilter = 'all';

const t = key => dictionary[language][key];

function updateControls() {
  const current = root.dataset.theme;
  themeSwitcher?.setAttribute('aria-label', t('themeGroup'));
  themeButtons.forEach(button => {
    const label = t({ light: 'themeLight', dark: 'themeDark', pixel: 'themePixel' }[button.dataset.themeChoice]);
    button.setAttribute('aria-pressed', String(button.dataset.themeChoice === current));
    button.setAttribute('aria-label', label);
    button.title = label;
  });
  if (!musicButton) return;
  musicButton.hidden = current !== 'pixel';
  musicButton.setAttribute('aria-pressed', String(musicOn));
  musicButton.querySelector('.music-label').textContent = t(musicOn ? 'musicOn' : 'musicOff');
  musicButton.setAttribute('aria-label', t(musicOn ? 'musicOnLabel' : 'musicOffLabel'));
}

function setLanguage(next) {
  language = next;
  root.lang = language;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = t(el.dataset.i18n);
    if (typeof value === 'string') el.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => { el.alt = t(el.dataset.i18nAlt); });
  document.querySelectorAll('[data-i18n-label]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nLabel)); });
  languageButton.textContent = language === 'es' ? 'EN' : 'ES';
  languageButton.setAttribute('aria-label', language === 'es' ? 'Change language to English' : 'Cambiar idioma a español');
  storage.set('portfolio-language', language);
  if (filterButtons.length) setFilter(currentFilter);
  updateControls();
}

function setTheme(theme) {
  root.dataset.theme = theme;
  storage.set('portfolio-theme', theme);
  if (theme !== 'pixel') stopMusic();
  updateControls();
}

function setEducationTab(name, focus = false) {
  educationTabs.forEach(tab => {
    const active = tab.dataset.educationTab === name;
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
    if (active && focus) tab.focus();
  });
  educationPanels.forEach(panel => { panel.hidden = panel.dataset.educationPanel !== name; });
}

function setFilter(filter) {
  currentFilter = filter;
  let visible = 0;
  filterButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
  projectCards.forEach(card => {
    const show = filter === 'all' || card.dataset.category.split(' ').includes(filter);
    card.hidden = !show;
    if (show) { visible += 1; card.classList.add('is-visible'); }
  });
  if (filterStatus) filterStatus.textContent = t('filterStatus')(visible);
}

async function copyText(button) {
  let ok = false;
  try { await navigator.clipboard.writeText(button.dataset.copy); ok = true; } catch { ok = false; }
  button.textContent = t(ok ? 'copied' : 'copyFailed');
  window.setTimeout(() => { button.textContent = t('copy'); }, 2000);
}

function getAudio() {
  if (!audioContext) audioContext = new AudioContext();
  if (audioContext.state === 'suspended') audioContext.resume();
  return audioContext;
}

function tone(freq, duration, volume, offset = 0) {
  if (!musicOn || reduceMotion.matches) return;
  const context = getAudio();
  const start = context.currentTime + offset;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = 'triangle';
  oscillator.frequency.setValueAtTime(freq, start);
  gain.gain.setValueAtTime(.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + .02);
  gain.gain.exponentialRampToValueAtTime(.0001, start + duration);
  oscillator.connect(gain).connect(context.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + .03);
}

let lastHover = 0;
function playEffect(kind) {
  if (root.dataset.theme !== 'pixel' || !musicOn || reduceMotion.matches) return;
  const now = Date.now();
  if (kind === 'hover' && now - lastHover < 120) return;
  if (kind === 'hover') lastHover = now;
  tone(kind === 'section' ? 523.25 : kind === 'click' ? 880 : 1046.5, kind === 'section' ? .1 : .055, kind === 'section' ? .012 : .007, kind === 'click' ? .02 : 0);
}

const melody = [523.25, 659.25, 783.99, 659.25, 587.33, 698.46, 880, 698.46, 493.88, 587.33, 739.99, 587.33];
function musicStepPlay() {
  if (!musicOn || root.dataset.theme !== 'pixel' || reduceMotion.matches) return;
  tone(melody[musicStep % melody.length], .25, .014);
  if (musicStep % 4 === 0) tone(130.81, .34, .009);
  musicStep += 1;
  musicTimer = window.setTimeout(musicStepPlay, 390);
}
function stopMusic() { window.clearTimeout(musicTimer); musicTimer = undefined; }
function startMusic() { if (!musicTimer && musicOn && root.dataset.theme === 'pixel' && !reduceMotion.matches) musicStepPlay(); }

const savedTheme = storage.get('portfolio-theme');
setTheme(['light', 'dark', 'pixel'].includes(savedTheme) ? savedTheme : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
setLanguage(language);
if (educationTabs.length) setEducationTab('bootcamp');

languageButton.addEventListener('click', () => setLanguage(language === 'es' ? 'en' : 'es'));
themeButtons.forEach(button => button.addEventListener('click', () => setTheme(button.dataset.themeChoice)));
musicButton?.addEventListener('click', () => { musicOn = !musicOn; if (musicOn) startMusic(); else stopMusic(); updateControls(); });
filterButtons.forEach(button => button.addEventListener('click', () => setFilter(button.dataset.filter)));
document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', () => copyText(button)));
educationTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => setEducationTab(tab.dataset.educationTab));
  tab.addEventListener('keydown', event => {
    const keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];
    if (!keys.includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? educationTabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + educationTabs.length) % educationTabs.length;
    setEducationTab(educationTabs[next].dataset.educationTab, true);
  });
});
document.querySelectorAll('.mobile-menu a').forEach(link => link.addEventListener('click', () => { link.closest('details').open = false; }));
document.querySelectorAll('a,button,summary').forEach(el => {
  el.addEventListener('pointerenter', () => playEffect('hover'));
  el.addEventListener('click', () => playEffect(el.matches('a[href^="#"]') ? 'section' : 'click'));
});
document.querySelector('#year').textContent = new Date().getFullYear();

// La barra móvil se oculta cuando el contacto o el pie ya están en pantalla, para no taparlos.
const dock = document.querySelector('.mobile-dock');
const dockTargets = [document.querySelector('#contacto'), document.querySelector('footer')].filter(Boolean);
if (dock && 'IntersectionObserver' in window) {
  const onScreen = new Set();
  const dockObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) onScreen.add(entry.target); else onScreen.delete(entry.target); });
    dock.classList.toggle('is-hidden', onScreen.size > 0);
  });
  dockTargets.forEach(el => dockObserver.observe(el));
}

// El contenido es visible por defecto: solo se oculta para animarlo si el navegador puede revelarlo.
// El margen inferior revela cada bloque antes de que entre en pantalla, así nunca se ve un hueco vacío.
if (!reduceMotion.matches) {
  window.addEventListener('pointermove', event => {
    root.style.setProperty('--mouse-x', `${event.clientX}px`);
    root.style.setProperty('--mouse-y', `${event.clientY}px`);
  }, { passive: true });
  if ('IntersectionObserver' in window) {
    root.classList.add('reveal-ready');
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }), { rootMargin: '100% 0px 25% 0px' });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }
}
