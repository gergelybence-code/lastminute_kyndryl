const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('main-nav');

const closeMenu = () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
};

// Aktuális oldal kiemelése (.html nélkül és mappanévvel is működik)
const norm = p => p.replace(/\/$/, '/index').replace(/\.html$/, '');
const current = norm(location.pathname);
nav.querySelectorAll('a').forEach(a => {
    a.classList.remove('active');
    a.removeAttribute('aria-current');
    if (norm(a.pathname) === current) a.setAttribute('aria-current', 'page');
});

toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
window.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });