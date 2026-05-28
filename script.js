// Translations
const translations = {
    ru: {
        'nav.home': 'Главная',
        'nav.faq': 'FAQ',
        'nav.contacts': 'Контакты',
        'hero.badge': 'Центр поддержки',
        'hero.title1': 'Нужна',
        'hero.title2': 'помощь',
        'hero.desc': 'Добро пожаловать в центр поддержки MangaLove. Здесь вы найдёте ответы на часто задаваемые вопросы и сможете связаться с нами напрямую.',
        'hero.contact': 'Связаться',
        'hero.card1': 'Быстрый ответ',
        'hero.card2': 'Решение проблем',
        'hero.card3': 'Помощь 24/7',
        'faq.title1': 'Часто задаваемые',
        'faq.title2': 'вопросы',
        'faq.desc': 'Ответы на самые популярные вопросы пользователей',
        'faq.q1': 'Как быстро вы отвечаете на сообщения?',
        'faq.a1': 'Обычно мы отвечаем в течение нескольких часов. В рабочее время ответы приходят ещё быстрее — в среднем за 30-60 минут.',
        'faq.q2': 'Какой способ связи предпочитаете?',
        'faq.a2': 'Для быстрой связи лучше использовать Telegram — там мы отвечаем быстрее всего. Для деловых запросов подойдёт электронная почта.',
        'faq.q3': 'Как подготовиться перед обращением?',
        'faq.a3': 'Опишите проблему как можно подробнее: что вы делали, что ожидали, что произошло. Скриншоты и логи значительно ускорят решение.',
        'faq.q4': 'Можно ли получить удалённую помощь?',
        'faq.a4': 'Да, мы можем помочь удалённо через демонстрацию экрана или подключение к вашему устройству (по согласованию).',
        'faq.q5': 'Где найти обновления проекта?',
        'faq.a5': 'Все актуальные новости и обновления публикуются в нашем Telegram-канале. Подписывайтесь, чтобы не пропустить важные изменения.',
        'contact.tag': 'Контакты',
        'contact.title1': 'Свяжитесь',
        'contact.title2': 'с нами',
        'contact.desc': 'Выберите удобный способ связи',
        'contact.tgHint': 'Нажмите, чтобы написать',
        'contact.emailHint': 'Для деловых запросов',
        'footer.rights': 'Все права защищены.'
    },
    en: {
        'nav.home': 'Home',
        'nav.faq': 'FAQ',
        'nav.contacts': 'Contacts',
        'hero.badge': 'Support Center',
        'hero.title1': 'Need',
        'hero.title2': 'help',
        'hero.desc': 'Welcome to the MangaLove support center. Here you will find answers to frequently asked questions and can contact us directly.',
        'hero.contact': 'Contact us',
        'hero.card1': 'Quick response',
        'hero.card2': 'Problem solving',
        'hero.card3': 'Support 24/7',
        'faq.title1': 'Frequently Asked',
        'faq.title2': 'Questions',
        'faq.desc': 'Answers to the most popular user questions',
        'faq.q1': 'How quickly do you respond to messages?',
        'faq.a1': 'We usually respond within a few hours. During working hours, responses come even faster — on average within 30-60 minutes.',
        'faq.q2': 'Which communication method do you prefer?',
        'faq.a2': 'For quick communication, it is better to use Telegram — we respond fastest there. For business inquiries, email is suitable.',
        'faq.q3': 'How to prepare before contacting?',
        'faq.a3': 'Describe the problem in as much detail as possible: what you did, what you expected, what happened. Screenshots and logs will significantly speed up the solution.',
        'faq.q4': 'Can I get remote assistance?',
        'faq.a4': 'Yes, we can help remotely via screen sharing or connecting to your device (by agreement).',
        'faq.q5': 'Where to find project updates?',
        'faq.a5': 'All current news and updates are published on our Telegram channel. Subscribe so you do not miss important changes.',
        'contact.tag': 'Contacts',
        'contact.title1': 'Contact',
        'contact.title2': 'us',
        'contact.desc': 'Choose a convenient way to connect',
        'contact.tgHint': 'Click to write',
        'contact.emailHint': 'For business inquiries',
        'footer.rights': 'All rights reserved.'
    }
};

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});

// Language Switcher
const langBtns = document.querySelectorAll('.lang-btn');
let currentLang = localStorage.getItem('lang') || 'ru';

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    html.setAttribute('lang', lang);

    langBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        setLang(btn.dataset.lang);
    });
});

// Initialize language
setLang(currentLang);

// Mobile Menu
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollY >= top && scrollY < top + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const answer = item.querySelector('.faq-answer');
        const isActive = item.classList.contains('active');

        // Close all
        document.querySelectorAll('.faq-item').forEach(i => {
            i.classList.remove('active');
            i.querySelector('.faq-answer').style.maxHeight = '0';
        });

        // Open clicked if it was closed
        if (!isActive) {
            item.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('[data-aos]');

    elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.85) {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 100);
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Particles
function createParticles() {
    const container = document.getElementById('particles');
    const count = 30;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.animationDelay = (Math.random() * 10) + 's';
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
        container.appendChild(particle);
    }
}

createParticles();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
