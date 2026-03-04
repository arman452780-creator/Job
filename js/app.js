// Basic Vanilla JS Router
import { renderHome } from './pages/home.js';
import { renderJobs } from './pages/jobs.js';
import { renderPrep } from './pages/prep.js';
import { renderDSA } from './pages/dsa.js';
import { renderCompanies } from './pages/companies.js';

const routes = {
    '/': renderHome,
    '/jobs': renderJobs,
    '/prep': renderPrep,
    '/dsa': renderDSA,
    '/companies': renderCompanies,
};

const appRoot = document.getElementById('app-root');

// Router Logic
const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    let path = window.location.pathname;
    if (path.length > 1 && path.endsWith('/')) {
        path = path.slice(0, -1);
    }
    const viewRenderFunction = routes[path] || renderHome;

    // Simple fade transition
    appRoot.classList.add('fade-out');

    setTimeout(() => {
        appRoot.innerHTML = viewRenderFunction();
        // Fire a custom event to signify route rendered, so views can bind listeners
        document.dispatchEvent(new Event('route-rendered'));
        updateNavLinks(path);
        appRoot.classList.remove('fade-out');
        window.scrollTo(0, 0);
    }, 150);
};

const updateNavLinks = (currentPath) => {
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};

// Event Listeners for SPA Navigation
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]') || e.target.closest('[data-link]')) {
            e.preventDefault();
            const link = e.target.matches('[data-link]') ? e.target : e.target.closest('[data-link]');
            navigateTo(link.getAttribute('href'));
        }
    });

    router();
});

window.addEventListener('popstate', router);

// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const themeBody = document.body;

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    themeBody.classList.remove('theme-dark', 'theme-light');
    themeBody.classList.add(currentTheme);
    themeToggleBtn.innerText = currentTheme === 'theme-light' ? '☀️' : '🌙';
}

themeToggleBtn.addEventListener('click', () => {
    if (themeBody.classList.contains('theme-dark')) {
        themeBody.classList.replace('theme-dark', 'theme-light');
        localStorage.setItem('theme', 'theme-light');
        themeToggleBtn.innerText = '☀️';
    } else {
        themeBody.classList.replace('theme-light', 'theme-dark');
        localStorage.setItem('theme', 'theme-dark');
        themeToggleBtn.innerText = '🌙';
    }
});
