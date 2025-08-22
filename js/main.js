// Dados das vagas em destaque - Com imagens representativas
const featuredJobs = [
    {
        id: 1,
        title: "Assistente Administrativo",
        company: "ClinServ",
        location: "São Paulo, SP",
        state: "SP",
        mode: "Presencial",
        level: "Pleno",
        salary: "R$ 2.400 - 2.800",
        area: "Administrativo",
        tags: ["Atendimento", "Planilhas"],
        image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Rotinas administrativas e atendimento.",
        experience: "Experiência valorizada"
    },
    {
        id: 2,
        title: "Recepcionista de Clínica",
        company: "Viva Saúde",
        location: "Rio de Janeiro, RJ",
        state: "RJ",
        mode: "Híbrido",
        level: "Júnior",
        salary: "R$ 2.200 - 2.600",
        area: "Atendimento",
        tags: ["Recepção", "Saúde"],
        image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Recepção de pacientes e agenda médica.",
        experience: "Experiência em saúde é um plus"
    },
    {
        id: 3,
        title: "Operador de Logística",
        company: "LogiMais",
        location: "Campinas, SP",
        state: "SP",
        mode: "Presencial",
        level: "Pleno",
        salary: "R$ 2.300 - 2.700",
        area: "Logística",
        tags: ["Conferência", "Estoque"],
        image: "https://images.pexels.com/photos/4481327/pexels-photo-4481327.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Conferência e organização de estoque.",
        experience: "Experiência conta muito"
    },
    {
        id: 4,
        title: "Vendedor Interno",
        company: "Casa do Lar",
        location: "Belo Horizonte, MG",
        state: "MG",
        mode: "Presencial",
        level: "Pleno",
        salary: "R$ 2.000 + comissões",
        area: "Vendas",
        tags: ["Negociação", "Relacionamento"],
        image: "https://images.pexels.com/photos/5717448/pexels-photo-5717448.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Atendimento e vendas internas.",
        experience: "Experiência em vendas essencial"
    },
    {
        id: 5,
        title: "Auxiliar de Serviços",
        company: "ProntoLimpo",
        location: "Santos, SP",
        state: "SP",
        mode: "Presencial",
        level: "Júnior",
        salary: "R$ 1.900 - 2.200",
        area: "Serviços",
        tags: ["Limpeza", "Manutenção"],
        image: "https://images.pexels.com/photos/4099235/pexels-photo-4099235.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Limpeza e conservação de ambientes.",
        experience: "Experiência valorizada"
    },
    {
        id: 6,
        title: "Atendente Digital",
        company: "ConversaJá",
        location: "Nacional (Remoto)",
        state: "BR",
        mode: "Remoto",
        level: "Sênior",
        salary: "R$ 3.000 - 3.800",
        area: "Atendimento",
        tags: ["Home Office", "Digital"],
        image: "https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Atendimento digital remoto.",
        experience: "Profissionais 50+ bem-vindos"
    }
];

// Variáveis globais para filtros
let filteredJobs = [...featuredJobs];
let currentFilters = {
    area: '',
    mode: '',
    state: ''
};

// Função para criar card de vaga melhorado - Com imagens
function createJobCard(job) {
    const modeClass = job.mode.toLowerCase().replace('í', 'i'); // presencial, hibrido, remoto
    
    return `
        <div class="job-card" data-area="${job.area}" data-mode="${job.mode}" data-state="${job.state}">
            <div class="job-image">
                <img src="${job.image}" alt="${job.title}" class="job-img" loading="lazy">
                <div class="job-image-overlay">
                    <span class="job-mode ${modeClass}">${job.mode}</span>
                </div>
            </div>
            
            <div class="job-content">
                <div class="job-header">
                    <h3 class="job-title">${job.title}</h3>
                    <div class="job-company">${job.company}</div>
                </div>
                
                <div class="job-location">${job.location}</div>
                <div class="job-salary">${job.salary}</div>
                
                <div class="job-tags">
                    ${job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('')}
                </div>
                
                <div class="job-footer">
                    <span class="job-experience">${job.experience}</span>
                    <div class="job-actions">
                        <a href="#aplicar" class="job-btn job-btn-primary" onclick="showApplicationDialog('${job.title}')">
                            Candidatar-se
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Função para filtrar vagas
function filterJobs() {
    filteredJobs = featuredJobs.filter(job => {
        const areaMatch = !currentFilters.area || job.area === currentFilters.area;
        const modeMatch = !currentFilters.mode || job.mode === currentFilters.mode;
        const stateMatch = !currentFilters.state || job.state === currentFilters.state;
        
        return areaMatch && modeMatch && stateMatch;
    });
    
    renderJobs();
    updateJobsCounter();
}

// Função para renderizar vagas
function renderJobs() {
    const jobsGrid = document.getElementById('featuredJobs');
    const noJobsMessage = document.getElementById('noJobsMessage');
    
    if (filteredJobs.length === 0) {
        jobsGrid.style.display = 'none';
        noJobsMessage.style.display = 'block';
    } else {
        jobsGrid.style.display = 'grid';
        noJobsMessage.style.display = 'none';
        jobsGrid.innerHTML = filteredJobs.map(job => createJobCard(job)).join('');
        
        // Adicionar animação aos cards
        const cards = jobsGrid.querySelectorAll('.job-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
}

// Função para atualizar contador de vagas
function updateJobsCounter() {
    const counter = document.getElementById('jobsCounter');
    const count = filteredJobs.length;
    
    if (count === 0) {
        counter.textContent = 'Nenhuma vaga encontrada com os filtros selecionados';
    } else if (count === 1) {
        counter.innerHTML = `Mostrando <strong>1</strong> vaga disponível`;
    } else {
        counter.innerHTML = `Mostrando <strong>${count}</strong> vagas disponíveis`;
    }
}

// Função para limpar todos os filtros
function clearAllFilters() {
    currentFilters = { area: '', mode: '', state: '' };
    
    // Limpar selects
    const areaFilter = document.getElementById('area-filter');
    const modeFilter = document.getElementById('mode-filter');
    const stateFilter = document.getElementById('state-filter');
    
    if (areaFilter) areaFilter.value = '';
    if (modeFilter) modeFilter.value = '';
    if (stateFilter) stateFilter.value = '';
    
    // Refilter
    filterJobs();
}

// Setup dos filtros
function setupJobFilters() {
    const areaFilter = document.getElementById('area-filter');
    const modeFilter = document.getElementById('mode-filter');
    const stateFilter = document.getElementById('state-filter');
    const clearButton = document.getElementById('clearFilters');
    
    if (areaFilter) {
        areaFilter.addEventListener('change', (e) => {
            currentFilters.area = e.target.value;
            filterJobs();
        });
    }
    
    if (modeFilter) {
        modeFilter.addEventListener('change', (e) => {
            currentFilters.mode = e.target.value;
            filterJobs();
        });
    }
    
    if (stateFilter) {
        stateFilter.addEventListener('change', (e) => {
            currentFilters.state = e.target.value;
            filterJobs();
        });
    }
    
    if (clearButton) {
        clearButton.addEventListener('click', clearAllFilters);
    }
}

// Função para mostrar detalhes da vaga
function showJobDetails(jobId) {
    const job = featuredJobs.find(j => j.id === jobId);
    if (job) {
        showToast(`Visualizando detalhes da vaga: ${job.title}`, 'success');
        // Aqui você pode implementar um modal ou navegação para detalhes
    }
}

// Função para mostrar diálogo de candidatura
function showApplicationDialog(jobTitle) {
    showToast(`Candidatura para: ${jobTitle} - Em breve!`, 'success');
    // Aqui você pode implementar um modal de candidatura
}

// Função para carregar vagas em destaque
function loadFeaturedJobs() {
    const jobsGrid = document.getElementById('featuredJobs');
    if (!jobsGrid) return;

    // Configurar filtros primeiro
    setupJobFilters();
    
    // Inicializar com todas as vagas
    setTimeout(() => {
        renderJobs();
        updateJobsCounter();
    }, 300);
}

// Função para alternar FAQ
function toggleFAQ(question) {
    const answer = question.nextElementSibling;
    const isActive = question.classList.contains('active');
    
    // Fechar todas as outras perguntas
    document.querySelectorAll('.faq-question').forEach(q => {
        q.classList.remove('active');
        q.nextElementSibling.classList.remove('active');
    });
    
    // Abrir/fechar a pergunta clicada
    if (!isActive) {
        question.classList.add('active');
        answer.classList.add('active');
    }
}

// Função para abrir WhatsApp
function openWhatsApp() {
    const phone = '5511999999999'; // Número placeholder
    const message = 'Olá! Gostaria de saber mais sobre as oportunidades da 50+ Empregos.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Newsletter form handler
function handleNewsletterSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    
    if (email) {
        // Simular envio
        const button = form.querySelector('button');
        const originalText = button.textContent;
        
        button.textContent = 'Enviando...';
        button.disabled = true;
        
        setTimeout(() => {
            button.textContent = 'Enviado!';
            button.style.background = 'var(--accent)';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
                button.style.background = '';
                form.reset();
            }, 2000);
        }, 1000);
        
        // Aqui você pode adicionar lógica real para salvar o email
        console.log('Email cadastrado:', email);
    }
}

// Função para newsletter
function handleNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    if (email) {
        // Simular envio
        const button = event.target.querySelector('button');
        const originalText = button.textContent;
        
        button.textContent = 'Enviando...';
        button.disabled = true;
        
        setTimeout(() => {
            button.textContent = 'Enviado! ✅';
            event.target.reset();
            
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 2000);
        }, 1000);
        
        // Aqui você pode adicionar integração real com serviço de email
        console.log('Newsletter inscrito:', email);
    }
}

// Função para mobile menu
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

// Função para scroll suave
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Função para animações de entrada aprimoradas
function animateOnScroll() {
    const elements = document.querySelectorAll('.value-card, .training-card, .company-stat, .job-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                
                // Adicionar delay para elementos em sequência
                const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
                entry.target.style.animationDelay = `${index * 0.1}s`;
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Função para validação de formulários
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Função para mostrar toast de sucesso
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    // Adicionar estilos do toast
    Object.assign(toast.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '12px 24px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease'
    });
    
    if (type === 'success') {
        toast.style.backgroundColor = '#10B981';
    } else if (type === 'error') {
        toast.style.backgroundColor = '#EF4444';
    }
    
    document.body.appendChild(toast);
    
    // Animar entrada
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover após 3 segundos
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Função para debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Função para lazy loading de imagens
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Função para acessibilidade do teclado
function handleKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Navegação por Tab
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
}

// Função para tema escuro/claro (se implementado)
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Função para carregar tema salvo
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
    }
}

// Função para analytics (placeholder)
function trackEvent(eventName, properties = {}) {
    // Aqui você pode integrar com Google Analytics, Mixpanel, etc.
    console.log('Event tracked:', eventName, properties);
}

// Função para performance monitoring
function measurePerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
            }, 0);
        });
    }
}

// Função para service worker (se implementado)
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registrado:', registration);
            })
            .catch(error => {
                console.log('Service Worker falhou:', error);
            });
    }
}

// Função para PWA install prompt
function handleInstallPrompt() {
    let deferredPrompt;
    
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        
        // Mostrar botão de instalação se desejar
        const installButton = document.getElementById('install-app');
        if (installButton) {
            installButton.style.display = 'block';
            installButton.addEventListener('click', () => {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('Usuário aceitou instalação');
                    }
                    deferredPrompt = null;
                });
            });
        }
    });
}

// Função para geolocalização (se implementado)
function getUserLocation() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                console.log('Localização:', latitude, longitude);
                // Aqui você pode usar para mostrar vagas próximas
            },
            (error) => {
                console.log('Erro de geolocalização:', error);
            }
        );
    }
}

// Função para notificações push (se implementado)
function requestNotificationPermission() {
    if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                console.log('Permissão de notificação concedida');
            }
        });
    }
}

// Função para offline detection
function handleOfflineStatus() {
    window.addEventListener('online', () => {
        document.body.classList.remove('offline');
        showToast('Conexão restaurada!', 'success');
    });
    
    window.addEventListener('offline', () => {
        document.body.classList.add('offline');
        showToast('Você está offline', 'error');
    });
}

// Função para error tracking
function handleErrors() {
    window.addEventListener('error', (e) => {
        console.error('Erro capturado:', e.error);
        // Aqui você pode enviar para serviço de monitoramento
    });
    
    window.addEventListener('unhandledrejection', (e) => {
        console.error('Promise rejeitada:', e.reason);
        // Aqui você pode enviar para serviço de monitoramento
    });
}

// Função para acessibilidade aprimorada
function enhanceAccessibility() {
    // Adicionar skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Pular para o conteúdo principal';
    skipLink.className = 'skip-link';
    Object.assign(skipLink.style, {
        position: 'absolute',
        top: '-40px',
        left: '6px',
        background: 'var(--primary)',
        color: 'white',
        padding: '8px',
        textDecoration: 'none',
        zIndex: '10001'
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Adicionar ID ao main
    const main = document.querySelector('main');
    if (main) {
        main.id = 'main-content';
    }
    
    // Melhorar navegação por teclado
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
    focusableElements.forEach(element => {
        element.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                element.click();
            }
        });
    });
}

// Função para animações de hover aprimoradas
function enhanceHoverEffects() {
    // Adicionar efeitos de hover para cards
    const cards = document.querySelectorAll('.value-card, .training-card, .job-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Função para scroll progress indicator
function addScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--accent), var(--primary));
        z-index: 10000;
        transition: width 0.1s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Função para smooth reveal animations
function addRevealAnimations() {
    const revealElements = document.querySelectorAll('.section-title, .section-subtitle, .hero-badge');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.5 });
    
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.8s ease';
        revealObserver.observe(element);
    });
}

// Header Sticky e Scroll Effects
function initHeaderScroll() {
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateHeader() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
}

// Smooth Scroll Melhorado
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Atualiza navegação ativa
                updateActiveNavLink(this.getAttribute('href'));
            }
        });
    });
}

// Navegação Ativa
function updateActiveNavLink(targetId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`.nav-link[href="${targetId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Mobile Menu Melhorado
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('mobile-active');
            document.body.classList.toggle('menu-open');
        });

        // Fechar menu ao clicar em links
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('mobile-active');
                document.body.classList.remove('menu-open');
            });
        });
    }
}

// Função principal de inicialização
function init() {
    // Novas funcionalidades UX
    initHeaderScroll();
    initSmoothScroll();
    initMobileMenu();
    
    // Carregar funcionalidades básicas
    loadFeaturedJobs();
    animateOnScroll();
    handleKeyboardNavigation();
    loadSavedTheme();
    measurePerformance();
    handleOfflineStatus();
    handleErrors();
    enhanceAccessibility();
    enhanceHoverEffects();
    addScrollProgress();
    addRevealAnimations();
    
    // Event listeners
    document.addEventListener('DOMContentLoaded', () => {
        // Newsletter form
        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', handleNewsletter);
        }
        
        // Mobile menu toggle
        const navToggle = document.querySelector('.nav-toggle');
        if (navToggle) {
            navToggle.addEventListener('click', toggleMobileMenu);
        }
        
        // Smooth scroll para links internos
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('href');
                smoothScroll(target);
            });
        });
        
        // Lazy loading
        lazyLoadImages();
        
        // Service worker
        registerServiceWorker();
        
        // Install prompt
        handleInstallPrompt();
        
        // Geolocalização (opcional)
        // getUserLocation();
        
        // Notificações (opcional)
        // requestNotificationPermission();
        
        console.log('50+ Empregos - Site carregado com sucesso! 🚀');
    });
}

// Inicializar quando o script carregar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Exportar funções para uso global
window.toggleFAQ = toggleFAQ;
window.openWhatsApp = openWhatsApp;
window.showToast = showToast;
window.trackEvent = trackEvent;
