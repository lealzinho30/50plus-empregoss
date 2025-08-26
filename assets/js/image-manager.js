/**
 * 🖼️ SISTEMA DE GERENCIAMENTO DE IMAGENS - 50+ Empregos
 * Sistema de placeholders inteligentes para troca rápida de imagens
 */

// Configuração centralizada de todas as imagens do site
const IMAGE_PLACEHOLDERS = {
    // ========== HERO SECTION ==========
    hero: {
        default: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&h=1200&fit=crop&crop=face",
        alternatives: [
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&h=1200&fit=crop&crop=face",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&h=1200&fit=crop&crop=face",
            "assets/img/hero/professional-50plus.webp",
            "assets/img/hero/confident-senior.webp"
        ],
        alt: "Profissional 50+ confiante e experiente",
        description: "Imagem principal do Hero - profissional 50+ em ambiente de trabalho"
    },

    // ========== ABOUT SECTION ==========
    about: {
        default: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1280&h=960&fit=crop",
        alternatives: [
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1280&h=960&fit=crop",
            "assets/img/about/team-meeting.webp",
            "assets/img/about/collaboration.webp",
            "assets/img/about/experienced-team.webp"
        ],
        alt: "Equipe de profissionais experientes em reunião",
        description: "Imagem da seção Sobre - equipe colaborando"
    },

    // ========== SERVICES SECTION ==========
    services: {
        default: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1280&h=960&fit=crop",
        alternatives: [
            "assets/img/services/interview-process.webp",
            "assets/img/services/career-guidance.webp",
            "assets/img/services/professional-development.webp"
        ],
        alt: "Profissional 50+ em entrevista de emprego",
        description: "Imagem da seção Como Funciona - processo de recolocação"
    },

    // ========== VAGAS SECTION ==========
    vagas: {
        default: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400",
        alternatives: [
            "assets/img/vagas/administrative.webp",
            "assets/img/vagas/healthcare.webp",
            "assets/img/vagas/logistics.webp",
            "assets/img/vagas/sales.webp"
        ],
        alt: "Vagas em destaque para profissionais 50+",
        description: "Imagens das vagas em destaque"
    },

    // ========== CURSOS SECTION ==========
    cursos: {
        default: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1280&h=960&fit=crop",
        alternatives: [
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1280&h=960&fit=crop",
            "assets/img/cursos/online-learning.webp",
            "assets/img/cursos/professional-development.webp"
        ],
        alt: "Profissional 50+ estudando e se atualizando",
        description: "Imagem da seção Cursos e Atualização"
    },

    // ========== DEPOIMENTOS SECTION ==========
    depoimentos: {
        default: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=face",
        alternatives: [
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop&crop=face",
            "assets/img/depoimentos/testimonial-1.webp",
            "assets/img/depoimentos/testimonial-2.webp"
        ],
        alt: "Depoimentos de profissionais 50+",
        description: "Imagens dos depoimentos"
    },

    // ========== CTA SECTION ==========
    cta: {
        default: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1280&h=600&fit=crop",
        alternatives: [
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1280&h=600&fit=crop",
            "assets/img/cta/final-cta.webp"
        ],
        alt: "Chamada para ação final",
        description: "Imagem de fundo do CTA final"
    },

    // ========== EMPRESAS SECTION ==========
    empresas: {
        default: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1280&h=960&fit=crop",
        alternatives: [
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1280&h=960&fit=crop",
            "assets/img/empresas/business-meeting.webp",
            "assets/img/empresas/corporate-partnership.webp"
        ],
        alt: "Reunião de negócios com diversidade etária",
        description: "Imagem da seção Para Empresas"
    },

    // ========== CONECTANDO SECTION ==========
    conectando: {
        default: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1280&h=960&fit=crop",
        alternatives: [
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1280&h=960&fit=crop",
            "assets/img/conectando/connection-bridge.webp",
            "assets/img/conectando/opportunity.webp"
        ],
        alt: "Conectando experiência a oportunidades",
        description: "Imagem da seção Conectando Experiência a Oportunidades"
    },

    // ========== MISSAO SECTION ==========
    missao: {
        default: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1280&h=960&fit=crop",
        alternatives: [
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1280&h=960&fit=crop",
            "assets/img/missao/purpose.webp",
            "assets/img/missao/values.webp"
        ],
        alt: "Nossa missão e valores",
        description: "Imagem da seção Nossa Missão"
    }
};

// ========== FUNÇÕES PRINCIPAIS ==========

/**
 * 🔄 Troca imagem de uma seção específica
 * @param {string} section - Nome da seção (hero, about, services, vagas)
 * @param {string} imageType - 'default' ou 'alternative' ou URL específica
 * @param {number} alternativeIndex - Índice da alternativa (0, 1, 2...)
 */
function changeSectionImage(section, imageType = 'default', alternativeIndex = 0) {
    if (!IMAGE_PLACEHOLDERS[section]) {
        console.error(`❌ Seção "${section}" não encontrada`);
        return false;
    }

    const config = IMAGE_PLACEHOLDERS[section];
    let newImageSrc = '';
    let newAlt = config.alt;

    // Determinar qual imagem usar
    if (imageType === 'default') {
        newImageSrc = config.default;
    } else if (imageType === 'alternative') {
        if (config.alternatives[alternativeIndex]) {
            newImageSrc = config.alternatives[alternativeIndex];
        } else {
            newImageSrc = config.alternatives[0]; // Fallback para primeira alternativa
        }
    } else if (imageType.startsWith('http') || imageType.startsWith('assets/') || imageType.startsWith('data:image')) {
        // URL personalizada ou imagem base64
        newImageSrc = imageType;
    } else {
        console.error(`❌ Tipo de imagem inválido: ${imageType}`);
        return false;
    }

    // Aplicar a mudança
    return applyImageChange(section, newImageSrc, newAlt);
}

/**
 * 🎯 Aplica a mudança de imagem na página
 * @param {string} section - Nome da seção
 * @param {string} src - Nova URL da imagem (pode ser URL ou base64)
 * @param {string} alt - Novo texto alternativo
 */
function applyImageChange(section, src, alt) {
    console.log('🔍 DEBUG: ==========================================');
    console.log('🔍 DEBUG: applyImageChange chamado para seção:', section);
    console.log('🔍 DEBUG: src (primeiros 100 chars):', src.substring(0, 100) + '...');
    console.log('🔍 DEBUG: alt:', alt);
    console.log('🔍 DEBUG: Tipo de src:', typeof src);
    console.log('🔍 DEBUG: Src é válido?', src && src.length > 0);

    let selectors = [];
    let success = false;

    // Mapear seção para múltiplos seletores CSS (fallback)
    switch (section) {
        case 'hero':
            selectors = [
                '.hero-media img',
                '#hero .hero-media img',
                '.hero img',
                'section#hero img',
                'img[src*="unsplash"]' // Fallback genérico
            ];
            break;
        case 'about':
            selectors = [
                '.about-image img',
                '.about-us img',
                '.about img',
                'section.about-us img'
            ];
            break;
        case 'services':
            selectors = [
                '.feature-media img',
                '.feature img',
                '.services img',
                'section.feature img'
            ];
            break;
        case 'vagas':
            // Para vagas, precisamos atualizar o JavaScript
            updateVagasImages(src);
            success = true;
            break;
        case 'cursos':
            selectors = [
                '.cursos img',
                '.courses img',
                '.feature img',
                'section.cursos img',
                'section.courses img'
            ];
            break;
        case 'depoimentos':
            selectors = [
                '.testimonial img',
                '.depoimento img',
                '.avatar img',
                'section.testimonials img'
            ];
            break;
        case 'cta':
            selectors = [
                '.cta img',
                '.final-cta img',
                'section.cta img',
                'section.final-cta img'
            ];
            break;
        case 'empresas':
            selectors = [
                '.empresas img',
                '.for-companies img',
                'section.empresas img',
                'section.for-companies img'
            ];
            break;
        case 'conectando':
            selectors = [
                '.conectando img',
                '.connecting img',
                'section.conectando img',
                'section.connecting img'
            ];
            break;
        case 'missao':
            selectors = [
                '.missao img',
                '.mission img',
                'section.missao img',
                'section.mission img'
            ];
            break;
        default:
            console.error(`❌ Seção "${section}" não encontrada`);
            return false;
    }

    // Tentar cada seletor até encontrar a imagem
    if (selectors.length > 0) {
        for (let selector of selectors) {
            console.log('🔍 DEBUG: Tentando seletor:', selector);
            const imageElement = document.querySelector(selector);
            if (imageElement) {
                console.log('🔍 DEBUG: Elemento de imagem encontrado:', imageElement);
                try {
                    // Verificar se é uma imagem válida antes de aplicar
                    if (src && (src.startsWith('http') || src.startsWith('data:image') || src.startsWith('assets/'))) {
                        console.log('🔍 DEBUG: Aplicando imagem válida:', src.substring(0, 50) + '...');
                        imageElement.src = src;
                        imageElement.alt = alt || `Imagem para a seção ${section}`;
                        success = true;
                        
                        // Salvar imagem personalizada automaticamente
                        if (src.startsWith('data:image')) {
                            saveCustomImage(section, src, alt || `Imagem personalizada para ${section}`);
                        }
                        
                        console.log(`✅ Imagem da seção "${section}" alterada com sucesso usando seletor: ${selector}`);
                        break;
                    } else {
                        console.error('❌ URL da imagem inválida:', src);
                        return false;
                    }
                } catch (error) {
                    console.error(`❌ Erro ao alterar imagem com seletor ${selector}:`, error);
                    continue;
                }
            }
        }
        
        if (!success) {
            console.error(`❌ Nenhum elemento de imagem encontrado para seção "${section}". Seletores tentados:`, selectors);
            
            // Debug: mostrar todas as imagens na página
            const allImages = document.querySelectorAll('img');
            console.log(`🔍 Total de imagens na página: ${allImages.length}`);
            allImages.forEach((img, index) => {
                console.log(`   ${index}: ${img.src} (${img.className} - ${img.parentElement.className})`);
            });
            
            // Debug adicional: mostrar estrutura da seção
            console.log('🔍 DEBUG: Estrutura da seção:', section);
            const sectionElement = document.querySelector(`#${section}`) || document.querySelector(`.${section}`);
            if (sectionElement) {
                console.log('🔍 DEBUG: Seção encontrada:', sectionElement);
                console.log('🔍 DEBUG: Imagens dentro da seção:', sectionElement.querySelectorAll('img'));
            } else {
                console.log('🔍 DEBUG: Seção não encontrada no DOM');
            }
        }
    }

    return success;
}

/**
 * 🎲 Troca para uma imagem aleatória da seção
 * @param {string} section - Nome da seção
 */
function randomizeSectionImage(section) {
    if (!IMAGE_PLACEHOLDERS[section]) {
        console.error(`❌ Seção "${section}" não encontrada`);
        return false;
    }

    const config = IMAGE_PLACEHOLDERS[section];
    const allImages = [config.default, ...config.alternatives];
    const randomIndex = Math.floor(Math.random() * allImages.length);
    const randomImage = allImages[randomIndex];

    return changeSectionImage(section, randomImage);
}

/**
 * 🔄 Atualiza todas as imagens de uma vez
 * @param {Object} imageMap - Mapa de seção -> nova imagem
 */
function updateMultipleImages(imageMap) {
    const results = {};
    
    Object.keys(imageMap).forEach(section => {
        results[section] = changeSectionImage(section, imageMap[section]);
    });

    console.log('📊 Resultado das atualizações:', results);
    return results;
}

/**
 * 📱 Atualiza imagens das vagas (especial para o sistema de vagas)
 * @param {string} newImageSrc - Nova URL da imagem
 */
function updateVagasImages(newImageSrc) {
    // Atualizar a configuração das vagas
    if (typeof featuredJobs !== 'undefined') {
        featuredJobs.forEach(job => {
            if (job.image && job.image.includes('pexels.com')) {
                job.image = newImageSrc;
            }
        });
        
        // Re-renderizar as vagas se estiverem visíveis
        if (typeof renderJobs === 'function') {
            renderJobs();
        }
        
        console.log('✅ Imagens das vagas atualizadas!');
    }
}

/**
 * 💼 Atualiza imagem de uma vaga específica pelo título
 * @param {string} jobTitle - Título da vaga
 * @param {string} newImageSrc - Nova URL da imagem
 */
function updateSpecificJobImage(jobTitle, newImageSrc) {
    if (typeof featuredJobs !== 'undefined') {
        const job = featuredJobs.find(job => 
            job.title.toLowerCase().includes(jobTitle.toLowerCase())
        );
        
        if (job) {
            job.image = newImageSrc;
            
            // Salvar no localStorage para persistência
            const customImages = JSON.parse(localStorage.getItem('customImages') || '{}');
            customImages[`vaga_${jobTitle}`] = {
                src: newImageSrc,
                alt: `Imagem personalizada da vaga ${jobTitle}`,
                timestamp: Date.now(),
                jobTitle: jobTitle
            };
            localStorage.setItem('customImages', JSON.stringify(customImages));
            
            // Re-renderizar as vagas se estiverem visíveis
            if (typeof renderJobs === 'function') {
                renderJobs();
            } else {
                // Fallback: tentar re-renderizar diretamente
                console.log('🔄 Tentando re-renderizar vagas...');
                const jobsGrid = document.getElementById('featuredJobs');
                if (jobsGrid && typeof createJobCard === 'function') {
                    // Forçar re-render das vagas visíveis
                    const visibleJobs = Array.from(jobsGrid.querySelectorAll('.job-card'));
                    visibleJobs.forEach(jobCard => {
                        const jobTitle = jobCard.querySelector('.job-title')?.textContent;
                        if (jobTitle && jobTitle.toLowerCase().includes(jobTitle.toLowerCase())) {
                            // Atualizar a imagem diretamente no DOM
                            const imageContainer = jobCard.querySelector('.job-sector-icon');
                            if (imageContainer) {
                                const existingImage = imageContainer.querySelector('img');
                                if (existingImage) {
                                    existingImage.src = newImageSrc;
                                    existingImage.alt = jobTitle;
                                    existingImage.className = 'job-custom-image';
                                    console.log(`✅ Imagem atualizada diretamente no DOM para "${jobTitle}"`);
                                }
                            }
                        }
                    });
                }
            }
            
            console.log(`✅ Imagem da vaga "${job.title}" atualizada e salva no localStorage!`);
            return true;
        } else {
            console.error(`❌ Vaga com título "${jobTitle}" não encontrada`);
            return false;
        }
    }
    return false;
}

/**
 * 📋 Lista todas as vagas disponíveis para edição
 */
function listAvailableJobs() {
    if (typeof featuredJobs !== 'undefined') {
        console.log('📋 Vagas disponíveis para edição de imagens:');
        featuredJobs.forEach((job, index) => {
            console.log(`\n💼 ${index + 1}. ${job.title}`);
            console.log(`   🏢 Empresa: ${job.company}`);
            console.log(`   📍 Local: ${job.location}`);
            console.log(`   💰 Salário: ${job.salary}`);
            console.log(`   🖼️ Imagem atual: ${job.image ? 'Sim' : 'Não'}`);
        });
        
        return featuredJobs.map(job => ({
            title: job.title,
            company: job.company,
            location: job.location,
            salary: job.salary,
            hasImage: !!job.image
        }));
    } else {
        console.error('❌ Lista de vagas não está disponível');
        return [];
    }
}

// ========== FUNÇÕES DE UTILIDADE ==========

/**
 * 📋 Lista todas as seções disponíveis
 */
function listAvailableSections() {
    console.log('📋 Seções disponíveis para troca de imagens:');
    Object.keys(IMAGE_PLACEHOLDERS).forEach(section => {
        const config = IMAGE_PLACEHOLDERS[section];
        console.log(`\n🎯 ${section.toUpperCase()}:`);
        console.log(`   📸 Padrão: ${config.default}`);
        console.log(`   🔄 Alternativas: ${config.alternatives.length}`);
        console.log(`   📝 Descrição: ${config.description}`);
    });
}

/**
 * 🔍 Mostra configuração de uma seção específica
 * @param {string} section - Nome da seção
 */
function showSectionConfig(section) {
    if (!IMAGE_PLACEHOLDERS[section]) {
        console.error(`❌ Seção "${section}" não encontrada`);
        return;
    }

    const config = IMAGE_PLACEHOLDERS[section];
    console.log(`\n🔍 Configuração da seção "${section}":`);
    console.log(`   📸 Padrão: ${config.default}`);
    console.log(`   🔄 Alternativas:`);
    config.alternatives.forEach((alt, index) => {
        console.log(`      ${index}: ${alt}`);
    });
    console.log(`   📝 Alt: ${config.alt}`);
    console.log(`   📄 Descrição: ${config.description}`);
}

// ========== SISTEMA DE PERSISTÊNCIA ==========

/**
 * 💾 Salva imagem personalizada no localStorage
 * @param {string} section - Nome da seção
 * @param {string} imageSrc - URL ou base64 da imagem
 * @param {string} alt - Texto alternativo
 */
function saveCustomImage(section, imageSrc, alt) {
    try {
        const customImages = JSON.parse(localStorage.getItem('customImages') || '{}');
        customImages[section] = {
            src: imageSrc,
            alt: alt,
            timestamp: Date.now()
        };
        localStorage.setItem('customImages', JSON.stringify(customImages));
        console.log(`💾 Imagem personalizada salva para seção "${section}"`);
        return true;
    } catch (error) {
        console.error('❌ Erro ao salvar imagem:', error);
        return false;
    }
}

/**
 * 📂 Carrega imagens personalizadas do localStorage
 */
function loadCustomImages() {
    try {
        const customImages = JSON.parse(localStorage.getItem('customImages') || '{}');
        console.log('📂 Imagens personalizadas carregadas:', Object.keys(customImages));
        
        Object.keys(customImages).forEach(section => {
            const customImage = customImages[section];
            if (customImage && customImage.src) {
                if (section.startsWith('vaga_')) {
                    // É uma imagem de vaga específica
                    const jobTitle = customImage.jobTitle;
                    console.log(`🔄 Aplicando imagem personalizada para vaga "${jobTitle}"`);
                    updateSpecificJobImage(jobTitle, customImage.src);
                } else {
                    // É uma imagem de seção normal
                    console.log(`🔄 Aplicando imagem personalizada para "${section}"`);
                    applyImageChange(section, customImage.src, customImage.alt);
                }
            }
        });
        
        return true;
    } catch (error) {
        console.error('❌ Erro ao carregar imagens personalizadas:', error);
        return false;
    }
}

/**
 * 🗑️ Remove imagem personalizada de uma seção
 * @param {string} section - Nome da seção
 */
function removeCustomImage(section) {
    try {
        const customImages = JSON.parse(localStorage.getItem('customImages') || '{}');
        
        if (section.startsWith('vaga_')) {
            // É uma imagem de vaga específica
            const jobTitle = customImages[section]?.jobTitle;
            if (jobTitle) {
                // Resetar para imagem padrão das vagas
                if (typeof featuredJobs !== 'undefined') {
                    const job = featuredJobs.find(job => 
                        job.title.toLowerCase().includes(jobTitle.toLowerCase())
                    );
                    if (job) {
                        job.image = IMAGE_PLACEHOLDERS.vagas.default;
                        if (typeof renderJobs === 'function') {
                            renderJobs();
                        }
                    }
                }
            }
        } else {
            // É uma imagem de seção normal
            if (IMAGE_PLACEHOLDERS[section]) {
                const config = IMAGE_PLACEHOLDERS[section];
                applyImageChange(section, config.default, config.alt);
            }
        }
        
        delete customImages[section];
        localStorage.setItem('customImages', JSON.stringify(customImages));
        
        console.log(`🗑️ Imagem personalizada removida da seção "${section}"`);
        return true;
    } catch (error) {
        console.error('❌ Erro ao remover imagem:', error);
        return false;
    }
}

// ========== EXPORTAÇÃO PARA USO GLOBAL ==========

// Disponibilizar funções globalmente
window.ImageManager = {
    changeSectionImage,
    randomizeSectionImage,
    updateMultipleImages,
    listAvailableSections,
    showSectionConfig,
    saveCustomImage,
    loadCustomImages,
    removeCustomImage,
    updateVagasImages,
    updateSpecificJobImage,
    listAvailableJobs,
    IMAGE_PLACEHOLDERS
};

// Log de inicialização
console.log('🚀 Sistema de Gerenciamento de Imagens carregado!');
console.log('💡 Use ImageManager.changeSectionImage("hero", "alternative", 0) para trocar imagens');
console.log('💡 Use ImageManager.listAvailableSections() para ver opções disponíveis');

// Carregar imagens personalizadas automaticamente quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        console.log('🔄 Carregando imagens personalizadas automaticamente...');
        loadCustomImages();
    }, 1000);
});
