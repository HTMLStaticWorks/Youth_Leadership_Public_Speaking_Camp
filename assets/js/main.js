/* 
============================================================
Youth Leadership & Public Speaking Camp
Main JavaScript
============================================================ 
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Theme Toggle (Dark/Light)
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-mode');
        } else if (currentTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
        }

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
        });
    }

    // 2. RTL Toggle
    const rtlToggle = document.getElementById('rtl-toggle');
    if (rtlToggle) {
        const currentDir = localStorage.getItem('dir');
        if (currentDir === 'rtl') {
            document.documentElement.setAttribute('dir', 'rtl');
        }

        rtlToggle.addEventListener('click', () => {
            const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
            if (isRTL) {
                document.documentElement.setAttribute('dir', 'ltr');
                localStorage.setItem('dir', 'ltr');
            } else {
                document.documentElement.setAttribute('dir', 'rtl');
                localStorage.setItem('dir', 'rtl');
            }
        });
    }

    // 3. Scroll Effects & Animations
    const fadeElements = document.querySelectorAll('.fade-up');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));

    // 4. Sticky Header
    const navbar = document.querySelector('.navbar-premium');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-sm');
                navbar.style.padding = '10px 0';
            } else {
                navbar.classList.remove('shadow-sm');
                navbar.style.padding = '15px 0';
            }
        });
    }

    // 5. Scroll to Top Button
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }


    // Prevent body scroll when hamburger menu is open
    const mainNav = document.getElementById('mainNav');
    if (mainNav) {
        mainNav.addEventListener('show.bs.collapse', () => {
            document.body.style.overflow = 'hidden';
        });
        mainNav.addEventListener('hidden.bs.collapse', () => {
            document.body.style.overflow = '';
        });
    }
});
