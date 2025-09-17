
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
        mode: "Presencial",s isso  ot
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
    },
    {
        id: 7,
        title: "Porteiro Residencial",
        company: "Segurança Total",
        location: "Curitiba, PR",
        state: "PR",
        mode: "Presencial",
        level: "Júnior",
        salary: "R$ 1.800 - 2.100",
        area: "Serviços",
        tags: ["Segurança", "Atendimento"],
        image: "https://images.pexels.com/photos/4481327/pexels-photo-4481327.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Controle de acesso e segurança residencial.",
        experience: "Responsabilidade e maturidade valorizadas"
    },
    {
        id: 8,
        title: "Auxiliar de Cozinha",
        company: "Restaurante Tradição",
        location: "Salvador, BA",
        state: "BA",
        mode: "Presencial",
        level: "Júnior",
        salary: "R$ 1.700 - 2.000",
        area: "Alimentação",
        tags: ["Cozinha", "Organização"],
        image: "https://images.pexels.com/photos/4099235/pexels-photo-4099235.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Auxílio na preparação e organização da cozinha.",
        experience: "Experiência em cozinha é um diferencial"
    },
    {
        id: 9,
        title: "Auxiliar de Limpeza Hospitalar",
        company: "Hospital São Lucas",
        location: "Porto Alegre, RS",
        state: "RS",
        mode: "Presencial",
        level: "Júnior",
        salary: "R$ 2.100 - 2.400",
        area: "Saúde",
        tags: ["Limpeza", "Saúde"],
        image: "https://images.pexels.com/photos/4099235/pexels-photo-4099235.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Limpeza e higienização de ambientes hospitalares.",
        experience: "Profissionais 50+ com responsabilidade"
    },
    {
        id: 10,
        title: "Auxiliar de Estoque",
        company: "MegaStore",
        location: "Brasília, DF",
        state: "DF",
        mode: "Presencial",
        level: "Pleno",
        salary: "R$ 2.200 - 2.600",
        area: "Logística",
        tags: ["Estoque", "Organização"],
        image: "https://images.pexels.com/photos/4481327/pexels-photo-4481327.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Controle e organização de estoque.",
        experience: "Experiência em logística essencial"
    },
    {
        id: 11,
        title: "Auxiliar de Lavanderia",
        company: "LavaRápido",
        location: "Fortaleza, CE",
        state: "CE",
        mode: "Presencial",
        level: "Júnior",
        salary: "R$ 1.600 - 1.900",
        area: "Serviços",
        tags: ["Lavanderia", "Organização"],
        image: "https://images.pexels.com/photos/4099235/pexels-photo-4099235.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Processamento e organização de roupas.",
        experience: "Organização e atenção aos detalhes"
    },
    {
        id: 12,
        title: "Auxiliar de Manutenção",
        company: "Manutenção Express",
        location: "Recife, PE",
        state: "PE",
        mode: "Presencial",
        level: "Pleno",
        salary: "R$ 2.300 - 2.700",
        area: "Manutenção",
        tags: ["Manutenção", "Técnico"],
        image: "https://images.pexels.com/photos/4481327/pexels-photo-4481327.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Manutenção preventiva e corretiva.",
        experience: "Experiência técnica valorizada"
    },
    {
        id: 13,
        title: "Auxiliar de Farmácia",
        company: "Farmácia Popular",
        location: "Goiânia, GO",
        state: "GO",
        mode: "Presencial",
        level: "Júnior",
        salary: "R$ 2.000 - 2.300",
        area: "Saúde",
        tags: ["Farmácia", "Atendimento"],
        image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Auxílio no atendimento e organização da farmácia.",
        experience: "Responsabilidade e atenção essenciais"
    },
    {
        id: 14,
        title: "Auxiliar de Biblioteca",
        company: "Biblioteca Municipal",
        location: "Vitória, ES",
        state: "ES",
        mode: "Presencial",
        level: "Pleno",
        salary: "R$ 2.400 - 2.800",
        area: "Educação",
        tags: ["Biblioteca", "Organização"],
        image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Organização e atendimento na biblioteca.",
        experience: "Amor pela leitura e organização"
    },
    {
        id: 15,
        title: "Auxiliar de Pet Shop",
        company: "Pet Amigo",
        location: "Campo Grande, MS",
        state: "MS",
        mode: "Presencial",
        level: "Júnior",
        salary: "R$ 1.800 - 2.100",
        area: "Serviços",
        tags: ["Pet Shop", "Atendimento"],
        image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Auxílio no atendimento e cuidados com pets.",
        experience: "Amor pelos animais e paciência"
    }
];

// Variáveis globais para filtros
let filteredJobs = [...featuredJobs];
let currentFilters = {
    area: '',
    mode: '',
    state: ''
};

// Função para mapear área para ícone setorial
function getSectorIcon(area) {
    const iconMap = {
        'Administrativo': 'icons/administrativo.svg',
        'Saúde': 'icons/saude.svg',
        'Atendimento': 'icons/atendimento.svg',
        'Logística': 'icons/logistica.svg',
        'Vendas': 'icons/vendas.svg',
        'Serviços': 'icons/atendimento.svg',
        'Financeiro': 'icons/administrativo.svg',
        'Alimentação': 'icons/saude.svg',
        'Manutenção': 'icons/logistica.svg',
        'Educação': 'icons/administrativo.svg'
    };
    return iconMap[area] || 'icons/administrativo.svg';
}

// Função para criar card de vaga melhorado - Com ícones setoriais e suporte melhorado a imagens personalizadas
function createJobCard(job) {
    const modeClass = job.mode.toLowerCase().replace('í', 'i'); // presencial, hibrido, remoto
    const sectorIcon = getSectorIcon(job.area);
    
    // Verificar se existe imagem personalizada para esta vaga
    let jobImage = job.image;
    let imageAlt = job.title;
    
    try {
        const customImages = JSON.parse(localStorage.getItem('customImages') || '{}');
        const customImageKey = `vaga_${job.title}`;
        
        if (customImages[customImageKey] && customImages[customImageKey].src) {
            jobImage = customImages[customImageKey].src;
            imageAlt = customImages[customImageKey].alt || job.title;
            console.log(`🔄 Usando imagem personalizada para "${job.title}":`, jobImage.substring(0, 50) + '...');
        }
    } catch (error) {
        console.error('❌ Erro ao carregar imagem personalizada:', error);
    }
    
    return `
        <div class="job-card" data-area="${job.area}" data-mode="${job.mode}" data-state="${job.state}" data-job-id="${job.id}">
            <div class="job-image">
                <div class="job-sector-icon">
                    ${jobImage ? 
                        `<img src="${jobImage}" alt="${imageAlt}" class="job-custom-image" loading="lazy" onerror="this.onerror=null; this.src='${sectorIcon}'; this.className='sector-icon'; console.log('❌ Falha ao carregar imagem personalizada, usando ícone padrão');">` : 
                        `<img src="${sectorIcon}" alt="${job.area}" class="sector-icon" loading="lazy">`
                    }
                </div>
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
                <div class="job-salary-highlighted">💰 ${job.salary}</div>
                
                <div class="job-tags">
                    ${job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('')}
                </div>
                
                <div class="job-badges">
                    <span class="job-experience-badge">✨ ${job.experience}</span>
                    <span class="job-age-friendly-badge">🎯 Idade não é barreira</span>
                </div>
                
                <div class="job-footer">
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

// Função para renderizar vagas (apenas 3 inicialmente)
let currentJobIndex = 0;
const jobsPerPage = 3;

function renderJobs() {
    const jobsGrid = document.getElementById('featuredJobs');
    const noJobsMessage = document.getElementById('noJobsMessage');
    
    if (filteredJobs.length === 0) {
        jobsGrid.style.display = 'none';
        noJobsMessage.style.display = 'block';
    } else {
        jobsGrid.style.display = 'grid';
        noJobsMessage.style.display = 'none';
        
        // Mostrar apenas as primeiras 3 vagas inicialmente
        const jobsToShow = filteredJobs.slice(0, jobsPerPage);
        jobsGrid.innerHTML = jobsToShow.map(job => createJobCard(job)).join('');
        
        // Adicionar botão "Mostrar mais" se houver mais vagas
        if (filteredJobs.length > jobsPerPage) {
            const showMoreBtn = document.createElement('button');
            showMoreBtn.className = 'btn btn-outline btn-large show-more-btn';
            showMoreBtn.textContent = 'Mostrar mais vagas';
            showMoreBtn.onclick = showMoreJobs;
            jobsGrid.appendChild(showMoreBtn);
        }
        
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

function showMoreJobs() {
    const jobsGrid = document.getElementById('featuredJobs');
    const showMoreBtn = jobsGrid.querySelector('.show-more-btn');
    
    if (showMoreBtn) {
        showMoreBtn.remove();
    }
    
    // Mostrar todas as vagas
    jobsGrid.innerHTML = filteredJobs.map(job => createJobCard(job)).join('');
    
    // Adicionar animação aos novos cards
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

// ====== SEÇÃO SOBRE PREMIUM ======
function initSobrePremium() {
  // Animar números quando entrar na viewport
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  
  const animateNumbers = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const numberElement = entry.target;
        const target = parseInt(numberElement.getAttribute('data-target'));
        const duration = 2000; // 2 segundos
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          numberElement.textContent = Math.floor(current);
        }, 16);
        
        observer.unobserve(entry.target);
      }
    });
  };
  
  const numberObserver = new IntersectionObserver(animateNumbers, {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
  });
  
  statNumbers.forEach(number => {
    numberObserver.observe(number);
  });
  
  // Efeitos de hover avançados
  const pillarCards = document.querySelectorAll('.pillar-card');
  pillarCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-12px) scale(1.02)';
      this.style.boxShadow = `
        0 25px 50px rgba(0, 0, 0, 0.3),
        0 0 0 1px rgba(59, 130, 246, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.1)
      `;
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = 'none';
    });
  });
  
  // Animações de entrada com stagger
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const animateOnScroll = (entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${index * 0.1}s`;
        entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
        observer.unobserve(entry.target);
      }
    });
  };
  
  const scrollObserver = new IntersectionObserver(animateOnScroll, observerOptions);
  
  // Observar elementos para animação
  const animatedElements = document.querySelectorAll(`
    .pillar-card,
    .servico-card-premium,
    .stat-card-premium
  `);
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    scrollObserver.observe(el);
  });
  
  // Efeito parallax sutil no background
  let ticking = false;
  
  function updateParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.sobre-bg-pattern, .sobre-bg-gradient');
    
    parallaxElements.forEach((element, index) => {
      const speed = (index + 1) * 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
    
    ticking = false;
  }
  
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }
  
  window.addEventListener('scroll', requestTick);
  
  // Efeito de brilho nos botões
  const premiumButtons = document.querySelectorAll('.btn-primary-premium, .btn-secondary-premium');
  
  premiumButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.background = 'linear-gradient(135deg, #4f46e5, #7c3aed)';
      this.style.boxShadow = '0 15px 35px rgba(79, 70, 229, 0.4)';
    });
    
    button.addEventListener('mouseleave', function() {
      if (this.classList.contains('btn-primary-premium')) {
        this.style.background = 'linear-gradient(135deg, #3b82f6, #8b5cf6)';
        this.style.boxShadow = 'none';
      } else {
        this.style.background = 'rgba(255, 255, 255, 0.1)';
        this.style.boxShadow = 'none';
      }
    });
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
    initSobrePremium(); // Inicializar a nova seção
    
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

// ==============================================
// FUNÇÕES DOS MODAIS DE CADASTRO E PERFIL
// ==============================================

// Modal de Cadastro Simples
function openCadastroModal() {
    const modal = document.getElementById('cadastro-modal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        trackEvent('modal', 'open', 'cadastro-simples');
    }
}

function closeCadastroModal() {
    const modal = document.getElementById('cadastro-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        trackEvent('modal', 'close', 'cadastro-simples');
    }
}

// Modal de Perfil Completo
function openPerfilModal() {
    const modal = document.getElementById('perfil-modal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        // Resetar para o primeiro step
        showStep(1);
        trackEvent('modal', 'open', 'perfil-completo');
    }
}

function closePerfilModal() {
    const modal = document.getElementById('perfil-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        trackEvent('modal', 'close', 'perfil-completo');
    }
}

// Controle dos steps do formulário de perfil
let currentStep = 1;
const totalSteps = 4;

function showStep(step) {
    // Esconder todos os steps
    for (let i = 1; i <= totalSteps; i++) {
        const stepElement = document.getElementById(`step-${i}`);
        if (stepElement) {
            stepElement.classList.remove('active');
        }
    }
    
    // Mostrar o step atual
    const currentStepElement = document.getElementById(`step-${step}`);
    if (currentStepElement) {
        currentStepElement.classList.add('active');
    }
    
    // Atualizar botões de navegação
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    
    if (prevBtn) {
        prevBtn.style.display = step > 1 ? 'block' : 'none';
    }
    
    if (nextBtn) {
        nextBtn.style.display = step < totalSteps ? 'block' : 'none';
    }
    
    if (submitBtn) {
        submitBtn.style.display = step === totalSteps ? 'block' : 'none';
    }
    
    currentStep = step;
}

function nextStep() {
    if (validateCurrentStep()) {
        if (currentStep < totalSteps) {
            showStep(currentStep + 1);
            trackEvent('form', 'next-step', `step-${currentStep + 1}`);
        }
    }
}

function prevStep() {
    if (currentStep > 1) {
        showStep(currentStep - 1);
        trackEvent('form', 'prev-step', `step-${currentStep - 1}`);
    }
}

function validateCurrentStep() {
    const currentStepElement = document.getElementById(`step-${currentStep}`);
    if (!currentStepElement) return false;
    
    const requiredFields = currentStepElement.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = '#e53e3e';
            isValid = false;
        } else {
            field.style.borderColor = '#e2e8f0';
        }
    });
    
    if (!isValid) {
        showToast('Por favor, preencha todos os campos obrigatórios', 'error');
    }
    
    return isValid;
}

// Validação de CPF
function validateCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, '');
    
    if (cpf.length !== 11) return false;
    
    // Verificar se todos os dígitos são iguais
    if (/^(\d)\1{10}$/.test(cpf)) return false;
    
    // Validar dígitos verificadores
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(9))) return false;
    
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(10))) return false;
    
    return true;
}

// Máscara para CPF
function formatCPF(input) {
    let value = input.value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    input.value = value;
}

// Máscara para telefone
function formatPhone(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length <= 10) {
        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{4})(\d)/, '$1-$2');
    } else {
        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{5})(\d)/, '$1-$2');
    }
    input.value = value;
}

// Event listeners para os formulários
document.addEventListener('DOMContentLoaded', function() {
    // Formulário de cadastro simples
    const cadastroForm = document.getElementById('cadastro-form');
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(cadastroForm);
            const data = Object.fromEntries(formData);
            
            // Validação básica
            if (!data.aceito_termos) {
                showToast('Você deve aceitar os termos de uso', 'error');
                return;
            }
            
            // Simular envio
            showToast('Cadastro realizado com sucesso!', 'success');
            closeCadastroModal();
            cadastroForm.reset();
            
            trackEvent('form', 'submit', 'cadastro-simples');
        });
    }
    
    // Formulário de perfil completo
    const perfilForm = document.getElementById('perfil-form');
    if (perfilForm) {
        perfilForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(perfilForm);
            const data = Object.fromEntries(formData);
            
            // Validação do CPF
            if (data.cpf && !validateCPF(data.cpf)) {
                showToast('CPF inválido', 'error');
                return;
            }
            
            // Validação dos termos
            if (!data.aceito_termos) {
                showToast('Você deve aceitar os termos de uso', 'error');
                return;
            }
            
            // Simular envio
            showToast('Perfil cadastrado com sucesso!', 'success');
            closePerfilModal();
            perfilForm.reset();
            showStep(1);
            
            trackEvent('form', 'submit', 'perfil-completo');
        });
    }
    
    // Aplicar máscaras
    const cpfInput = document.getElementById('perfil-cpf');
    if (cpfInput) {
        cpfInput.addEventListener('input', function() {
            formatCPF(this);
        });
    }
    
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function() {
            formatPhone(this);
        });
    });
    
    // Fechar modais com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeCadastroModal();
            closePerfilModal();
        }
    });
});

// Exportar funções para uso global
window.toggleFAQ = toggleFAQ;
// Funções do Chat Widget
function toggleChat() {
    const chatWindow = document.querySelector('.chat-window');
    const chatToggle = document.querySelector('.chat-toggle');
    
    if (chatWindow.classList.contains('active')) {
        chatWindow.classList.remove('active');
        chatToggle.classList.remove('active');
    } else {
        chatWindow.classList.add('active');
        chatToggle.classList.add('active');
    }
}

function askQuestion(question) {
    const chatMessages = document.querySelector('.chat-messages');
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.innerHTML = `
        <div class="message-content">
            <p>${question}</p>
        </div>
    `;
    
    chatMessages.appendChild(userMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Simular resposta automática
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        
        let response = '';
        switch(question) {
            case 'Como funciona o cadastro?':
                response = 'O cadastro é simples! Clique em "Cadastrar-se" e preencha seus dados básicos. Para um perfil completo, use "Cadastrar meu perfil" e siga as etapas.';
                break;
            case 'Quais são os preços dos cursos?':
                response = 'Temos cursos gratuitos e o Pacote Completo 50+ por apenas R$ 197. Todos os cursos incluem certificado e suporte especializado.';
                break;
            case 'Como encontrar vagas?':
                response = 'Use os filtros na seção "Vagas" para encontrar oportunidades por área, modalidade e localização. Nossas vagas são atualizadas diariamente.';
                break;
            default:
                response = 'Obrigado pela pergunta! Nossa equipe entrará em contato em breve para esclarecer suas dúvidas.';
        }
        
        botMessage.innerHTML = `
            <div class="message-content">
                <p>${response}</p>
            </div>
        `;
        
        chatMessages.appendChild(botMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
}

function sendMessage() {
    const messageInput = document.querySelector('.chat-input input');
    const message = messageInput.value.trim();
    
    if (message) {
        const chatMessages = document.querySelector('.chat-messages');
        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.innerHTML = `
            <div class="message-content">
                <p>${message}</p>
            </div>
        `;
        
        chatMessages.appendChild(userMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        messageInput.value = '';
        
        // Simular resposta automática
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.className = 'message bot-message';
            botMessage.innerHTML = `
                <div class="message-content">
                    <p>Obrigado pela sua mensagem! Nossa equipe de suporte entrará em contato em breve. Enquanto isso, você pode explorar nossas vagas disponíveis ou fazer seu cadastro.</p>
                </div>
            `;
            
            chatMessages.appendChild(botMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1500);
    }
}

// Função para navegação suave
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

window.openWhatsApp = openWhatsApp;
window.showToast = showToast;
window.trackEvent = trackEvent;
window.openCadastroModal = openCadastroModal;
window.closeCadastroModal = closeCadastroModal;
window.openPerfilModal = openPerfilModal;
window.closePerfilModal = closePerfilModal;
window.nextStep = nextStep;
window.prevStep = prevStep;
window.toggleChat = toggleChat;
window.askQuestion = askQuestion;
window.sendMessage = sendMessage;
window.smoothScrollTo = smoothScrollTo;
