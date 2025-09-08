/**
 * 🚀 JavaScript Principal - 50+ Empregos
 * 
 * Funcionalidades principais do site e integração com o sistema de imagens
 * 
 * @version 3.0.0
 * @author Sistema 50+ Empregos
 */

// ===== CONFIGURAÇÕES GLOBAIS =====
const CONFIG = {
    // Configurações do site
    siteName: '50+ Empregos',
    siteUrl: 'https://lealzinho30.github.io/50plus-empregoss/',
    
    // Configurações de animação
    animationDuration: 300,
    scrollOffset: 80,
    
    // Configurações de formulário
    formTimeout: 5000,
    
    // Configurações de performance
    lazyLoadThreshold: 0.1,
    debounceDelay: 250
};

// ===== UTILITÁRIOS =====
const Utils = {
    /**
     * Debounce para otimizar performance
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Throttle para otimizar performance
     */
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    /**
     * Verifica se elemento está visível na viewport
     */
    isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    /**
     * Scroll suave para elemento
     */
    scrollToElement(element, offset = CONFIG.scrollOffset) {
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    },

    /**
     * Formata número com separadores
     */
    formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },

    /**
     * Validação de email
     */
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    /**
     * Sanitiza string para segurança
     */
    sanitizeString(str) {
        return str.replace(/[<>]/g, '');
    }
};

// ===== SISTEMA DE NAVEGAÇÃO =====
const Navigation = {
    /**
     * Inicializa sistema de navegação
     */
    init() {
        this.setupMobileMenu();
        this.setupSmoothScroll();
        this.setupActiveNav();
        this.setupScrollEffects();
    },

    /**
     * Configura menu mobile
     */
    setupMobileMenu() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });

            // Fechar menu ao clicar em link
            const navLinks = navMenu.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                });
            });

            // Fechar menu ao clicar fora
            document.addEventListener('click', (e) => {
                if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            });
        }
    },

    /**
     * Configura scroll suave
     */
    setupSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    Utils.scrollToElement(targetElement);
                }
            });
        });
    },

    /**
     * Configura navegação ativa
     */
    setupActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        const updateActiveNav = Utils.throttle(() => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.pageYOffset >= sectionTop - CONFIG.scrollOffset) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }, 100);
        
        window.addEventListener('scroll', updateActiveNav);
    },

    /**
     * Configura efeitos de scroll
     */
    setupScrollEffects() {
        const header = document.querySelector('.header');
        
        const handleScroll = Utils.throttle(() => {
            if (window.pageYOffset > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, 100);
        
        window.addEventListener('scroll', handleScroll);
    }
};

// ===== SISTEMA DE FORMULÁRIOS =====
const Forms = {
    /**
     * Inicializa sistema de formulários
     */
    init() {
        this.setupNewsletterForm();
        this.setupContactForms();
    },

    /**
     * Configura formulário de newsletter
     */
    setupNewsletterForm() {
        const newsletterForm = document.querySelector('.newsletter-form');
        
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleNewsletterSubmit(newsletterForm);
            });
        }
    },

    /**
     * Configura formulários de contato
     */
    setupContactForms() {
        const contactForms = document.querySelectorAll('form[data-type="contact"]');
        
        contactForms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactSubmit(form);
            });
        });
    },

    /**
     * Manipula envio de newsletter
     */
    handleNewsletterSubmit(form) {
        const emailInput = form.querySelector('input[type="email"]');
        const submitBtn = form.querySelector('button[type="submit"]');
        
        if (!emailInput || !submitBtn) return;
        
        const email = emailInput.value.trim();
        
        if (!Utils.isValidEmail(email)) {
            this.showMessage('Por favor, insira um email válido.', 'error');
            return;
        }
        
        // Simular envio
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
        
        setTimeout(() => {
            this.showMessage('Obrigado por se inscrever! Em breve você receberá o guia gratuito.', 'success');
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = 'Receber';
        }, 2000);
    },

    /**
     * Manipula envio de formulário de contato
     */
    handleContactSubmit(form) {
        const formData = new FormData(form);
        const submitBtn = form.querySelector('button[type="submit"]');
        
        if (!submitBtn) return;
        
        // Validação básica
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.classList.add('error');
                isValid = false;
            } else {
                field.classList.remove('error');
            }
        });
        
        if (!isValid) {
            this.showMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
            return;
        }
        
        // Simular envio
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
        
        setTimeout(() => {
            this.showMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = 'Enviar';
        }, 2000);
    },

    /**
     * Mostra mensagem para o usuário
     */
    showMessage(message, type = 'info') {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message message-${type}`;
        messageDiv.textContent = message;
        
        // Adicionar estilos
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            max-width: 300px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            animation: slideInRight 0.3s ease;
        `;
        
        // Cores baseadas no tipo
        const colors = {
            success: '#28a745',
            error: '#dc3545',
            warning: '#ffc107',
            info: '#17a2b8'
        };
        
        messageDiv.style.background = colors[type] || colors.info;
        
        document.body.appendChild(messageDiv);
        
        // Remover após 5 segundos
        setTimeout(() => {
            messageDiv.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.parentNode.removeChild(messageDiv);
                }
            }, 300);
        }, 5000);
    }
};

// ===== SISTEMA DE ANIMAÇÕES =====
const Animations = {
    /**
     * Inicializa sistema de animações
     */
    init() {
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupLazyLoading();
    },

    /**
     * Configura animações baseadas em scroll
     */
    setupScrollAnimations() {
        const animatedElements = document.querySelectorAll('[data-animate]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const animation = element.dataset.animate;
                    
                    element.classList.add(animation);
                    observer.unobserve(element);
                }
            });
        }, {
            threshold: CONFIG.lazyLoadThreshold
        });
        
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    },

    /**
     * Configura efeitos de hover
     */
    setupHoverEffects() {
        const hoverElements = document.querySelectorAll('.btn, .card, .servico-item, .training-card, .testimonial-card');
        
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.transform = 'translateY(-5px)';
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'translateY(0)';
            });
        });
    },

    /**
     * Configura lazy loading de imagens
     */
    setupLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            imageObserver.observe(img);
        });
    }
};

// ===== SISTEMA DE ESTATÍSTICAS =====
const Statistics = {
    /**
     * Inicializa sistema de estatísticas
     */
    init() {
        this.setupCounters();
    },

    /**
     * Configura contadores animados
     */
    setupCounters() {
        const counters = document.querySelectorAll('[data-counter]');
        
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.dataset.counter);
                    const duration = 2000; // 2 segundos
                    const step = target / (duration / 16); // 60fps
                    let current = 0;
                    
                    const updateCounter = () => {
                        current += step;
                        if (current < target) {
                            counter.textContent = Math.floor(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target;
                        }
                    };
                    
                    updateCounter();
                    counterObserver.unobserve(counter);
                }
            });
        });
        
        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }
};

// ===== SISTEMA DE PERFORMANCE =====
const Performance = {
    /**
     * Inicializa sistema de performance
     */
    init() {
        this.setupPreload();
        this.setupServiceWorker();
        this.setupAnalytics();
    },

    /**
     * Configura preload de recursos críticos
     */
    setupPreload() {
        // Preload de fontes críticas
        const fontLink = document.createElement('link');
        fontLink.rel = 'preload';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;500;600;700&display=swap';
        fontLink.as = 'style';
        document.head.appendChild(fontLink);
        
        // Preload de imagens críticas
        const criticalImages = [
            './assets/img/hero/hero-profissional-50plus.webp',
            './assets/img/logos/logo-50plus-empregos.png'
        ];
        
        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = src;
            link.as = 'image';
            document.head.appendChild(link);
        });
    },

    /**
     * Configura service worker (se disponível)
     */
    setupServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        console.log('ServiceWorker registrado:', registration);
                    })
                    .catch(error => {
                        console.log('Falha no registro do ServiceWorker:', error);
                    });
            });
        }
    },

    /**
     * Configura analytics básico
     */
    setupAnalytics() {
        // Analytics básico de performance
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                if (perfData) {
                    console.log('Performance:', {
                        loadTime: perfData.loadEventEnd - perfData.loadEventStart,
                        domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
                        firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime,
                        firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime
                    });
                }
            }, 0);
        });
    }
};

// ===== SISTEMA DE ACESSIBILIDADE =====
const Accessibility = {
    /**
     * Inicializa sistema de acessibilidade
     */
    init() {
        this.setupKeyboardNavigation();
        this.setupFocusManagement();
        this.setupScreenReader();
    },

    /**
     * Configura navegação por teclado
     */
    setupKeyboardNavigation() {
        // Navegação por tab
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });
        
        // Remover classe ao usar mouse
        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    },

    /**
     * Configura gerenciamento de foco
     */
    setupFocusManagement() {
        // Manter foco visível
        const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
        
        focusableElements.forEach(element => {
            element.addEventListener('focus', () => {
                element.classList.add('focused');
            });
            
            element.addEventListener('blur', () => {
                element.classList.remove('focused');
            });
        });
    },

    /**
     * Configura suporte a leitores de tela
     */
    setupScreenReader() {
        // Adicionar aria-labels onde necessário
        const buttons = document.querySelectorAll('button:not([aria-label])');
        
        buttons.forEach(button => {
            if (!button.textContent.trim() && !button.querySelector('img')) {
                button.setAttribute('aria-label', 'Botão');
            }
        });
        
        // Adicionar roles para elementos semânticos
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            if (!section.getAttribute('role')) {
                section.setAttribute('role', 'region');
            }
        });
    }
};

// ===== FUNÇÕES GLOBAIS =====
window.openCadastro = function() {
    Forms.showMessage('Sistema de cadastro será implementado em breve!', 'info');
};

window.openLogin = function() {
    Forms.showMessage('Sistema de login será implementado em breve!', 'info');
};

window.toggleMenu = function() {
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    
    if (navMenu && navToggle) {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    }
};

window.scrollToSection = function(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        Utils.scrollToElement(element);
    }
};

window.openWhatsApp = function() {
    window.open('https://wa.me/5511999999999', '_blank');
};

window.handleNewsletterSubmit = function(event) {
    event.preventDefault();
    Forms.showMessage('Obrigado por se inscrever! Em breve você receberá o guia gratuito.', 'success');
};

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Inicializando 50+ Empregos...');
    
    // Inicializar sistemas
    Navigation.init();
    Forms.init();
    Animations.init();
    Statistics.init();
    Performance.init();
    Accessibility.init();
    
    console.log('✅ 50+ Empregos inicializado com sucesso!');
});

// ===== ESTILOS CSS DINÂMICOS =====
const dynamicStyles = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .keyboard-navigation *:focus {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
    }
    
    .focused {
        box-shadow: 0 0 0 2px var(--primary-color);
    }
    
    .message {
        font-family: inherit;
    }
    
    .nav-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    .header.scrolled {
        background: rgba(255, 255, 255, 0.98);
        box-shadow: 0 2px 20px rgba(0,0,0,0.1);
    }
    
    .nav-link.active {
        color: var(--primary-color);
        background: rgba(245, 183, 0, 0.1);
    }
    
    .form-field.error {
        border-color: var(--error);
        box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.2);
    }
`;

// Adicionar estilos dinâmicos
const styleSheet = document.createElement('style');
styleSheet.textContent = dynamicStyles;
document.head.appendChild(styleSheet);







