/**
 * 🖼️ ImageRegistry - Sistema Centralizado de Gerenciamento de Imagens
 * 
 * Este sistema substitui o localStorage quebrado e gerencia todas as imagens
 * através de um arquivo JSON centralizado, garantindo persistência e controle.
 * 
 * @version 2.0.0
 * @author Sistema de Imagens 50+ Empregos
 */

class ImageRegistry {
    constructor() {
        this.images = new Map();
        this.customImages = new Map();
        this.basePath = this.detectBasePath();
        this.initialized = false;
        this.initPromise = null;
    }

    /**
     * 🔍 Detecta automaticamente o basePath baseado na URL atual
     */
    detectBasePath() {
        const pathname = window.location.pathname;
        if (pathname.includes('/50plus-empregoss/')) {
            return '/50plus-empregoss';
        }
        return '';
    }

    /**
     * 🚀 Inicializa o ImageRegistry carregando as configurações
     */
    async init() {
        if (this.initPromise) {
            return this.initPromise;
        }

        this.initPromise = this._loadImages();
        return this.initPromise;
    }

    /**
     * 📂 Carrega as configurações de imagens do arquivo JSON
     */
    async _loadImages() {
        try {
            const response = await fetch(`${this.basePath}/content/images.json`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const imagesData = await response.json();
            
            // Limpar mapa existente
            this.images.clear();
            
            // Carregar imagens padrão
            imagesData.forEach(image => {
                this.images.set(image.id, {
                    ...image,
                    src: this._resolvePath(image.src),
                    isCustom: false
                });
            });

            // Carregar imagens personalizadas do localStorage (se existirem)
            this._loadCustomImages();
            
            this.initialized = true;
            console.log('✅ ImageRegistry inicializado com sucesso!', this.images.size, 'imagens carregadas');
            
            return true;
        } catch (error) {
            console.error('❌ Erro ao inicializar ImageRegistry:', error);
            return false;
        }
    }

    /**
     * 🔗 Resolve caminhos relativos para absolutos baseado no basePath
     */
    _resolvePath(src) {
        if (src.startsWith('http://') || src.startsWith('https://')) {
            return src; // URL externa
        }
        
        if (src.startsWith('./')) {
            return `${this.basePath}${src.substring(1)}`;
        }
        
        if (src.startsWith('/')) {
            return `${this.basePath}${src}`;
        }
        
        return `${this.basePath}/${src}`;
    }

    /**
     * 💾 Carrega imagens personalizadas do localStorage
     */
    _loadCustomImages() {
        try {
            const customImagesData = localStorage.getItem('customImages');
            if (customImagesData) {
                const customImages = JSON.parse(customImagesData);
                
                Object.keys(customImages).forEach(imageId => {
                    const customImage = customImages[imageId];
                    if (customImage && customImage.src) {
                        this.customImages.set(imageId, {
                            ...customImage,
                            isCustom: true,
                            timestamp: customImage.timestamp || Date.now()
                        });
                        
                        // Sobrescrever imagem padrão
                        if (this.images.has(imageId)) {
                            const originalImage = this.images.get(imageId);
                            this.images.set(imageId, {
                                ...originalImage,
                                src: customImage.src,
                                alt: customImage.alt || originalImage.alt,
                                isCustom: true
                            });
                        }
                    }
                });
                
                console.log('📂 Imagens personalizadas carregadas:', this.customImages.size);
            }
        } catch (error) {
            console.error('❌ Erro ao carregar imagens personalizadas:', error);
        }
    }

    /**
     * 🎯 Obtém uma imagem por ID
     */
    getImage(imageId) {
        if (!this.initialized) {
            console.warn('⚠️ ImageRegistry não foi inicializado. Chame init() primeiro.');
            return null;
        }

        const image = this.images.get(imageId);
        if (!image) {
            console.warn(`⚠️ Imagem não encontrada: ${imageId}`);
            return null;
        }

        return { ...image };
    }

    /**
     * 🔄 Obtém todas as imagens de uma seção específica
     */
    getImagesBySection(section) {
        if (!this.initialized) {
            return [];
        }

        const sectionImages = [];
        this.images.forEach((image, id) => {
            if (image.section === section) {
                sectionImages.push({ id, ...image });
            }
        });

        return sectionImages;
    }

    /**
     * 📝 Lista todas as imagens disponíveis
     */
    listAllImages() {
        if (!this.initialized) {
            return [];
        }

        return Array.from(this.images.entries()).map(([id, image]) => ({
            id,
            ...image
        }));
    }

    /**
     * 💾 Salva uma imagem personalizada
     */
    saveCustomImage(imageId, src, alt = '') {
        try {
            const customImage = {
                src,
                alt,
                timestamp: Date.now(),
                isCustom: true
            };

            // Salvar no mapa local
            this.customImages.set(imageId, customImage);

            // Atualizar imagem principal
            if (this.images.has(imageId)) {
                const originalImage = this.images.get(imageId);
                this.images.set(imageId, {
                    ...originalImage,
                    src,
                    alt: alt || originalImage.alt,
                    isCustom: true
                });
            }

            // Salvar no localStorage
            const customImagesData = JSON.parse(localStorage.getItem('customImages') || '{}');
            customImagesData[imageId] = customImage;
            localStorage.setItem('customImages', JSON.stringify(customImagesData));

            console.log(`💾 Imagem personalizada salva: ${imageId}`);
            return true;
        } catch (error) {
            console.error('❌ Erro ao salvar imagem personalizada:', error);
            return false;
        }
    }

    /**
     * 🗑️ Remove uma imagem personalizada
     */
    removeCustomImage(imageId) {
        try {
            // Remover do mapa local
            this.customImages.delete(imageId);

            // Restaurar imagem padrão
            if (this.images.has(imageId)) {
                const originalImage = this.images.get(imageId);
                this.images.set(imageId, {
                    ...originalImage,
                    isCustom: false
                });
            }

            // Remover do localStorage
            const customImagesData = JSON.parse(localStorage.getItem('customImages') || '{}');
            delete customImagesData[imageId];
            localStorage.setItem('customImages', JSON.stringify(customImagesData));

            console.log(`🗑️ Imagem personalizada removida: ${imageId}`);
            return true;
        } catch (error) {
            console.error('❌ Erro ao remover imagem personalizada:', error);
            return false;
        }
    }

    /**
     * 🗑️ Remove todas as imagens personalizadas
     */
    removeAllCustomImages() {
        try {
            const customImageIds = Array.from(this.customImages.keys());
            
            customImageIds.forEach(imageId => {
                this.removeCustomImage(imageId);
            });

            console.log('🗑️ Todas as imagens personalizadas foram removidas');
            return true;
        } catch (error) {
            console.error('❌ Erro ao remover todas as imagens personalizadas:', error);
            return false;
        }
    }

    /**
     * 📤 Exporta configuração de imagens personalizadas
     */
    exportCustomImages() {
        try {
            const customImages = {};
            this.customImages.forEach((image, id) => {
                customImages[id] = image;
            });

            const dataStr = JSON.stringify(customImages, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `custom-images-${new Date().toISOString().split('T')[0]}.json`;
            link.click();
            
            URL.revokeObjectURL(url);
            console.log('📤 Configuração de imagens exportada');
            return true;
        } catch (error) {
            console.error('❌ Erro ao exportar imagens:', error);
            return false;
        }
    }

    /**
     * 📥 Importa configuração de imagens personalizadas
     */
    async importCustomImages(file) {
        try {
            const text = await file.text();
            const customImages = JSON.parse(text);
            
            // Validar estrutura
            if (typeof customImages !== 'object') {
                throw new Error('Formato inválido: deve ser um objeto');
            }

            // Aplicar imagens personalizadas
            Object.keys(customImages).forEach(imageId => {
                const customImage = customImages[imageId];
                if (customImage && customImage.src) {
                    this.saveCustomImage(imageId, customImage.src, customImage.alt);
                }
            });

            console.log('📥 Configuração de imagens importada:', Object.keys(customImages).length, 'imagens');
            return true;
        } catch (error) {
            console.error('❌ Erro ao importar imagens:', error);
            return false;
        }
    }

    /**
     * 🔄 Aplica uma imagem personalizada a um elemento DOM
     */
    applyImageToElement(imageId, element) {
        const image = this.getImage(imageId);
        if (!image || !element) {
            return false;
        }

        try {
            // Aplicar atributos da imagem
            element.src = image.src;
            element.alt = image.alt;
            
            if (image.width) element.width = image.width;
            if (image.height) element.height = image.height;
            if (image.loading) element.loading = image.loading;

            console.log(`✅ Imagem aplicada: ${imageId} -> ${element.tagName}`);
            return true;
        } catch (error) {
            console.error(`❌ Erro ao aplicar imagem ${imageId}:`, error);
            return false;
        }
    }

    /**
     * 🔄 Aplica imagem a todos os elementos de uma seção
     */
    applyImageToSection(imageId, section) {
        const image = this.getImage(imageId);
        if (!image) {
            return false;
        }

        try {
            const selectors = this._getSectionSelectors(section);
            let applied = false;

            selectors.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(element => {
                    if (this.applyImageToElement(imageId, element)) {
                        applied = true;
                    }
                });
            });

            if (applied) {
                console.log(`✅ Imagem aplicada à seção: ${section}`);
                return true;
            } else {
                console.warn(`⚠️ Nenhum elemento encontrado para seção: ${section}`);
                return false;
            }
        } catch (error) {
            console.error(`❌ Erro ao aplicar imagem à seção ${section}:`, error);
            return false;
        }
    }

    /**
     * 🎯 Obtém seletores CSS para uma seção específica
     */
    _getSectionSelectors(section) {
        const selectorsMap = {
            'hero': ['.hero-media img', '.hero img', 'section.hero img'],
            'sobre': ['.sobre-imagens img', '.about-us img', 'section.sobre-imagens img', 'section#sobre img'],
            'servicos': ['.feature img', 'section.feature img'],
            'vagas': ['.featured-jobs img', 'section.featured-jobs img', 'section#vagas img'],
            'empresas': ['.for-companies img', '.company-img', 'section.for-companies img', 'section#empresas img'],
            'cursos': ['.training img', 'section.training img', 'section#capacitacao img'],
            'depoimentos': ['.testimonials img', '.testimonial-avatar img', 'section.testimonials img'],
            'cta': ['.cta-final img', 'section.cta-final img'],
            'header': ['.nav-logo-img', 'header img'],
            'footer': ['.footer-logo-img', 'footer img']
        };

        return selectorsMap[section] || [];
    }

    /**
     * 🎲 Aplica uma imagem aleatória de uma seção
     */
    randomizeSectionImage(section) {
        const sectionImages = this.getImagesBySection(section);
        if (sectionImages.length === 0) {
            console.warn(`⚠️ Nenhuma imagem encontrada para seção: ${section}`);
            return false;
        }

        const randomImage = sectionImages[Math.floor(Math.random() * sectionImages.length)];
        return this.applyImageToSection(randomImage.id, section);
    }

    /**
     * 🔄 Reseta uma seção para imagem padrão
     */
    resetSectionImage(section) {
        const sectionImages = this.getImagesBySection(section);
        const defaultImage = sectionImages.find(img => !img.isCustom);
        
        if (defaultImage) {
            return this.applyImageToSection(defaultImage.id, section);
        } else {
            console.warn(`⚠️ Nenhuma imagem padrão encontrada para seção: ${section}`);
            return false;
        }
    }

    /**
     * 📊 Obtém estatísticas do ImageRegistry
     */
    getStats() {
        return {
            totalImages: this.images.size,
            customImages: this.customImages.size,
            sections: Array.from(new Set(Array.from(this.images.values()).map(img => img.section))),
            initialized: this.initialized,
            basePath: this.basePath
        };
    }
}

// 🚀 Criar instância global
window.ImageRegistry = new ImageRegistry();

// 📝 Log de inicialização
console.log('🖼️ ImageRegistry carregado. Use ImageRegistry.init() para inicializar.');

// 🔄 Auto-inicialização quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', async () => {
    console.log('🚀 Inicializando ImageRegistry...');
    await window.ImageRegistry.init();
});









