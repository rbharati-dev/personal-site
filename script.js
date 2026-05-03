// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        } else {
            window.location.href = href;
        }
    });
});

function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function startFinanceTyping(el) {
    const finalText = el.getAttribute('data-text') || '';
    if (!finalText) return;

    if (prefersReducedMotion()) {
        el.textContent = finalText;
        return;
    }

    const charset = '0123456789$%+-=';
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    cursor.textContent = '▍';

    let i = 0;
    let scrambleTicks = 0;
    const maxScrambleTicks = 2;

    const tick = () => {
        const revealed = finalText.slice(0, i);
        const nextChar = finalText[i] || '';

        let scrambling = '';
        if (i < finalText.length) {
            const ch = nextChar === ' ' ? ' ' : charset[Math.floor(Math.random() * charset.length)];
            scrambling = ch;
        }

        el.textContent = revealed + scrambling;
        el.appendChild(cursor);

        if (i >= finalText.length) return;

        if (nextChar === ' ') {
            i += 1;
            scrambleTicks = 0;
        } else if (scrambleTicks < maxScrambleTicks) {
            scrambleTicks += 1;
        } else {
            i += 1;
            scrambleTicks = 0;
        }

        window.setTimeout(tick, 35);
    };

    tick();
}

document.addEventListener('DOMContentLoaded', () => {
    const lead = document.querySelector('.lead-animated[data-text]');
    if (lead) startFinanceTyping(lead);
});