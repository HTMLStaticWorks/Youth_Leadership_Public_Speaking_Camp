/* 
============================================================
Youth Leadership & Public Speaking Camp
Dashboard JavaScript
============================================================ 
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // Sidebar Toggle for Mobile
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('dashboard-sidebar');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('show');
        });
    }

    // Demo Charts initialization (using basic DOM manipulation for now, 
    // ideally would use Chart.js or similar if allowed, but strict vanilla requested)
    // We will use CSS variables and inline styles to create visual charts.
    
    const progressBars = document.querySelectorAll('.skill-progress-fill');
    progressBars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-progress');
        if (targetWidth) {
            setTimeout(() => {
                bar.style.width = targetWidth + '%';
            }, 500);
        }
    });

    // Theme Toggle (Dark/Light)
    const setupThemeToggle = (btnId) => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
                const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
                localStorage.setItem('theme', theme);
            });
        }
    };
    setupThemeToggle('theme-toggle');
    setupThemeToggle('theme-toggle-mob');

    // RTL Toggle
    const setupRTLToggle = (btnId) => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.addEventListener('click', () => {
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
    };
    setupRTLToggle('rtl-toggle');
    setupRTLToggle('rtl-toggle-mob');
});

