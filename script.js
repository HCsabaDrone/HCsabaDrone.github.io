const cursor = document.querySelector('.cursor-dot');

const translations = {
  en: {
    welcome: "Hi, I'm Csaba Hajdu.",
    heroEyebrow: '<span class="eyebrow-line"></span> Drone hobbyist · Open to new ideas',
    heroIntro: 'I create cinematic aerial stories for places, people, and ideas that deserve a different perspective.',
    scrollCue: '<span></span> Scroll to descend',
    approachEyebrow: '01 / The approach',
    statement: 'The sky is not a viewpoint.<br><span>It is a language.</span>',
    portfolioEyebrow: '02 / Portfolio',
    portfolioTitle: 'From up here,<br><em>everything moves.</em>',
    portfolioAside: 'A collection of personal projects and experiments, made with curiosity, patience, and a little altitude.',
    morePhotos: 'More photos',
    aboutEyebrow: '03 / A little context',
    aboutTitle: 'Good work starts<br>with <em>looking closer.</em>',
    aboutTextOne: 'Drones and aerial imagery are currently part of my hobby, but I would like to make a living from it one day. This website is the first step on that journey: a place to share what I see and what I can create.',
    aboutTextTwo: 'I do not have a big production team or a polished story behind me. I bring my curiosity, creativity, willingness to learn, and all the knowledge I have gathered so far.',
    contactEyebrow: '04 / Your turn',
    contactTitle: 'Have a view<br><em>in mind?</em>'
  },
  hu: {
    welcome: 'Szia, Hajdu Csaba vagyok.',
    heroEyebrow: '<span class="eyebrow-line"></span> Drón hobbista · Nyitott az új ötletekre',
    heroIntro: 'Légi képeket és történeteket készítek olyan helyekről, emberekről és gondolatokról, amelyek megérdemelnek egy másik nézőpontot.',
    scrollCue: '<span></span> Görgess tovább',
    approachEyebrow: '01 / A megközelítés',
    statement: 'Az ég nem csak egy nézőpont.<br><span>Hanem egy nyelv.</span>',
    portfolioEyebrow: '02 / Portfólió',
    portfolioTitle: 'Innen fentről<br><em>minden mozgásban van.</em>',
    portfolioAside: 'Személyes projektek és kísérletek gyűjteménye, kíváncsisággal, türelemmel és egy kis magassággal készítve.',
    morePhotos: 'További képek',
    aboutEyebrow: '03 / Egy kis háttér',
    aboutTitle: 'A jó munka<br><em>közelebbi figyelemmel kezdődik.</em>',
    aboutTextOne: 'A drónok és a légi képek jelenleg a hobbim részei, de szeretnék egyszer ebből megélni. Ez az oldal ennek az útnak az első lépése: egy hely, ahol megmutathatom, mit látok és mit tudok létrehozni.',
    aboutTextTwo: 'Nincs mögöttem nagy stáb vagy tökéletesre csiszolt történet. A kíváncsiságomat, a kreativitásomat, a tanulási vágyamat és mindazt a tudást adom bele, amit eddig összegyűjtöttem.',
    contactEyebrow: '04 / Te jössz',
    contactTitle: 'Van egy nézőpontod<br><em>a fejedben?</em>'
  },
  sk: {
    welcome: 'Ahoj, som Csaba Hajdu.',
    heroEyebrow: '<span class="eyebrow-line"></span> Nadšenec do dronov · Otvorený novým nápadom',
    heroIntro: 'Vytváram letecké zábery a príbehy o miestach, ľuďoch a myšlienkach, ktoré si zaslúžia inú perspektívu.',
    scrollCue: '<span></span> Posuňte sa nižšie',
    approachEyebrow: '01 / Prístup',
    statement: 'Obloha nie je len pohľad.<br><span>Je to jazyk.</span>',
    portfolioEyebrow: '02 / Portfólio',
    portfolioTitle: 'Z výšky<br><em>je všetko v pohybe.</em>',
    portfolioAside: 'Zbierka osobných projektov a experimentov vytvorených so zvedavosťou, trpezlivosťou a trochou nadhľadu.',
    morePhotos: 'Ďalšie fotografie',
    aboutEyebrow: '03 / Trochu kontextu',
    aboutTitle: 'Dobrá práca začína<br><em>pozornejším pohľadom.</em>',
    aboutTextOne: 'Drony a letecké zábery sú zatiaľ súčasťou môjho koníčka, no raz by som sa tým chcel živiť. Táto stránka je prvým krokom na tejto ceste: miesto, kde môžem ukázať, čo vidím a čo dokážem vytvoriť.',
    aboutTextTwo: 'Nemám za sebou veľký produkčný tím ani dokonale vyrozprávaný príbeh. Prinášam zvedavosť, kreativitu, chuť učiť sa a všetky vedomosti, ktoré som doteraz získal.',
    contactEyebrow: '04 / Teraz vy',
    contactTitle: 'Máte predstavu<br><em>v hlave?</em>'
  }
};

const languageButtons = document.querySelectorAll('.language-button');
const setLanguage = (language) => {
  const selectedLanguage = translations[language] ? language : 'en';
  document.documentElement.lang = selectedLanguage;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.innerHTML = translations[selectedLanguage][element.dataset.i18n];
  });
  languageButtons.forEach((button) => button.classList.toggle('is-active', button.dataset.language === selectedLanguage));
  localStorage.setItem('portfolio-language', selectedLanguage);
};
languageButtons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.language)));
setLanguage(localStorage.getItem('portfolio-language') || 'en');

const imageLightbox = document.querySelector('#image-lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');
const closeLightbox = () => {
  if (!imageLightbox) return;
  imageLightbox.hidden = true;
  document.body.style.overflow = '';
};

if (imageLightbox && lightboxImage && lightboxClose) {
  document.querySelectorAll('.project-image').forEach((projectImage) => {
    projectImage.addEventListener('click', (event) => {
      event.preventDefault();
      lightboxImage.style.backgroundImage = getComputedStyle(projectImage).backgroundImage;
      imageLightbox.hidden = false;
      document.body.style.overflow = 'hidden';
      lightboxClose.focus();
    });
  });
  lightboxClose.addEventListener('click', closeLightbox);
  imageLightbox.addEventListener('click', (event) => {
    if (event.target === imageLightbox) closeLightbox();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLightbox();
  });
}

const moreProjectsButton = document.querySelector('.more-projects-button');
const projectGrid = document.querySelector('.project-grid');
if (moreProjectsButton && projectGrid) {
  const extraProjects = projectGrid.querySelectorAll('.extra-project');
  const buttonLabel = moreProjectsButton.querySelector('.button-label');
  moreProjectsButton.addEventListener('click', () => {
    const isOpen = moreProjectsButton.getAttribute('aria-expanded') === 'true';
    moreProjectsButton.setAttribute('aria-expanded', String(!isOpen));
    const selectedLanguage = document.documentElement.lang;
    const lessPhotos = { en: 'Less photos', hu: 'Kevesebb kép', sk: 'Menej fotografií' };
    buttonLabel.textContent = isOpen ? translations[selectedLanguage].morePhotos : lessPhotos[selectedLanguage];
    projectGrid.classList.toggle('is-expanded', !isOpen);
    extraProjects.forEach((project) => project.classList.toggle('is-visible', !isOpen));
  });
}

if (cursor) {
  window.addEventListener('pointermove', (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });

  document.querySelectorAll('a, button, input, textarea, select').forEach((interactiveElement) => {
    interactiveElement.addEventListener('pointerenter', () => {
      cursor.style.width = '28px';
      cursor.style.height = '28px';
    });
    interactiveElement.addEventListener('pointerleave', () => {
      cursor.style.width = '12px';
      cursor.style.height = '12px';
    });
  });
}

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const videoIntro = document.querySelector('.video-intro');
const backToTop = document.querySelector('.back-to-top');
if (videoIntro && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const updateVideoFade = () => {
    const progress = Math.min(Math.max(window.scrollY / window.innerHeight, 0), 1);
    videoIntro.style.opacity = `${1 - progress}`;
    backToTop?.classList.toggle('is-visible', window.scrollY >= window.innerHeight * .9);
  };

  window.addEventListener('scroll', updateVideoFade, { passive: true });
  updateVideoFade();
} else if (backToTop) {
  backToTop.classList.toggle('is-visible', window.scrollY >= window.innerHeight * .9);
}

const heroVisual = document.querySelector('.hero-visual');
if (heroVisual && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const heroImage = heroVisual.querySelector('.hero-image');
  window.addEventListener('scroll', () => {
    const offset = Math.min(window.scrollY * 0.08, 45);
    heroVisual.style.transform = `translateY(${offset}px)`;
    const heroProgress = Math.min(Math.max((window.scrollY - window.innerHeight * .55) / (window.innerHeight * .55), 0), 1);
    if (heroImage) {
      heroImage.style.opacity = heroProgress;
      heroImage.style.transform = `translateY(${80 - heroProgress * 80}px) scale(${1.08 - heroProgress * .08})`;
    }
  }, { passive: true });
} else {
  document.querySelector('.hero-image')?.classList.add('is-in-place');
}
