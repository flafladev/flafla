// Menu mobile
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Efeito de scroll suave para links internos (se houver)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação de fade-in ao rolar a página (opcional)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .barbeiro-card, .depoimento-card').forEach(el => {
    observer.observe(el);
});
// ===== CHARME EXTRA PARA O INSTAGRAM =====
document.addEventListener('DOMContentLoaded', function() {
    const instagramSection = document.querySelector('.instagram');
    if (!instagramSection) return;

    // Detecta quando o feed termina de carregar (pode variar conforme widget)
    // Exemplo usando MutationObserver para esperar o conteúdo aparecer
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                // Se encontrou posts, aplica fade-in
                const posts = document.querySelectorAll('.instagram-post, .sk-post, .elfsight-instagram-feed-item');
                if (posts.length > 0) {
                    posts.forEach((post, index) => {
                        post.style.opacity = '0';
                        post.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
                    });
                    observer.disconnect(); // para de observar
                }
            }
        });
    });

    observer.observe(instagramSection, { childList: true, subtree: true });

    // Fallback: se após 5 segundos nada aparecer, mostra mensagem de erro amigável
    setTimeout(function() {
        const posts = document.querySelectorAll('.instagram-post, .sk-post, .elfsight-instagram-feed-item');
        if (posts.length === 0) {
            const feedContainer = document.querySelector('#instagram-feed, .sk-instagram-feed, .elfsight-app-instagram');
            if (feedContainer) {
                feedContainer.innerHTML = '<p style="color: #f57c00; text-align: center; padding: 2rem;">Não foi possível carregar o feed do Instagram. Tente novamente mais tarde.</p>';
            }
        }
    }, 5000);
});

// (A animação fadeInUp já existe no CSS, mas se não tiver, adicione:)
// @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
import App from "https://cdn.fouita.com/public/instagram-feed.js";
        new App({ 
            target: document.getElementById("instagram-feed"), 
            props: {
                "settings": {
                    "layout": "grid",
                    "header": false,
                    "cols": 3,
                    "cardHeight": 300,
                    "bgColor": "#2c2c2c",
                    "txtColor": "#ffffff",
                    "ukey": "seu-codigo-aqui"
                }
            }
        });
 // Menu mobile
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação de fade-in ao rolar
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .hero-content, .barbeiro-card, .depoimento-card').forEach(el => {
    observer.observe(el);
});