/**
 * 🎛️ Painel de Controle de Imagens - Sistema Novo
 * 
 * Este painel substitui o sistema antigo e integra com o ImageRegistry
 * para gerenciar todas as imagens do site de forma centralizada.
 * 
 * @version 3.0.0
 * @author Sistema de Imagens 50+ Empregos
 */

class ImageControlPanel {
    constructor() {
        this.panel = null;
        this.isVisible = false;
        this.initialized = false;
        this.initPromise = null;
    }

    /**
     * 🚀 Inicializa o painel de controle
     */
    async init() {
        if (this.initPromise) {
            return this.initPromise;
        }

        this.initPromise = this._waitForImageRegistry();
        return this.initPromise;
    }

    /**
     * ⏳ Aguarda o ImageRegistry estar disponível
     */
    async _waitForImageRegistry() {
        let attempts = 0;
        const maxAttempts = 50; // 5 segundos

        while (attempts < maxAttempts) {
            if (window.ImageRegistry && window.ImageRegistry.initialized) {
                console.log('✅ ImageRegistry detectado, criando painel...');
                this._createPanel();
                this.initialized = true;
                return true;
            }

            await new Promise(resolve => setTimeout(resolve, 100));
            attempts++;
        }

        console.error('❌ ImageRegistry não foi inicializado após 5 segundos');
        return false;
    }

    /**
     * 🎨 Cria o painel de controle
     */
    _createPanel() {
        if (this.panel) {
            console.log('ℹ️ Painel já existe!');
            return;
        }

        // Criar container principal
        this.panel = document.createElement('div');
        this.panel.id = 'image-control-panel';
        this.panel.innerHTML = this._generateHTML();
        
        // Adicionar estilos
        this._addStyles();
        
        // Adicionar ao DOM
        document.body.appendChild(this.panel);
        
        // Configurar eventos
        this._setupEventListeners();
        
        // Carregar dados iniciais
        this._loadInitialData();
        
        console.log('✅ Painel de controle criado com sucesso!');
    }

    /**
     * 🎨 Gera o HTML do painel
     */
    _generateHTML() {
        return `
            <div class="panel-header">
                <h3>🖼️ Controle de Imagens</h3>
                <button class="panel-toggle" onclick="window.imageControlPanel.toggle()">−</button>
            </div>
            
            <div class="panel-content">
                <!-- Status do ImageRegistry -->
                <div class="control-section">
                    <h4>📊 Status do Sistema</h4>
                    <div id="registry-status" class="status-info">
                        <span class="status-indicator">⏳</span>
                        <span class="status-text">Carregando...</span>
                    </div>
                    <button onclick="window.imageControlPanel.refreshStatus()" class="refresh-btn">🔄 Atualizar</button>
                </div>

                <!-- Controles por Seção -->
                <div class="control-section">
                    <h4>🎯 Controles por Seção</h4>
                    <div class="section-controls">
                        <div class="section-group">
                            <h5>Hero</h5>
                            <button onclick="window.imageControlPanel.applyImage('hero', 'hero')" class="apply-btn">Aplicar</button>
                            <button onclick="window.imageControlPanel.randomizeSection('hero')" class="random-btn">🎲 Aleatória</button>
                            <button onclick="window.imageControlPanel.resetSection('hero')" class="reset-btn">🔄 Reset</button>
                        </div>
                        
                        <div class="section-group">
                            <h5>Sobre</h5>
                            <button onclick="window.imageControlPanel.applyImage('sobre', 'sobre')" class="apply-btn">Aplicar</button>
                            <button onclick="window.imageControlPanel.randomizeSection('sobre')" class="random-btn">🎲 Aleatória</button>
                            <button onclick="window.imageControlPanel.resetSection('sobre')" class="reset-btn">🔄 Reset</button>
                        </div>
                        
                        <div class="section-group">
                            <h5>Serviços</h5>
                            <button onclick="window.imageControlPanel.applyImage('servicos', 'servicos')" class="apply-btn">Aplicar</button>
                            <button onclick="window.imageControlPanel.randomizeSection('servicos')" class="random-btn">🎲 Aleatória</button>
                            <button onclick="window.imageControlPanel.resetSection('servicos')" class="reset-btn">🔄 Reset</button>
                        </div>
                        
                        <div class="section-group">
                            <h5>Vagas</h5>
                            <button onclick="window.imageControlPanel.applyImage('vagas', 'vagas')" class="apply-btn">Aplicar</button>
                            <button onclick="window.imageControlPanel.randomizeSection('vagas')" class="random-btn">🎲 Aleatória</button>
                            <button onclick="window.imageControlPanel.resetSection('vagas')" class="reset-btn">🔄 Reset</button>
                        </div>
                        
                        <div class="section-group">
                            <h5>Empresas</h5>
                            <button onclick="window.imageControlPanel.applyImage('empresas', 'empresas')" class="apply-btn">Aplicar</button>
                            <button onclick="window.imageControlPanel.randomizeSection('empresas')" class="random-btn">🎲 Aleatória</button>
                            <button onclick="window.imageControlPanel.resetSection('empresas')" class="reset-btn">🔄 Reset</button>
                        </div>
                        
                        <div class="section-group">
                            <h5>Cursos</h5>
                            <button onclick="window.imageControlPanel.applyImage('cursos', 'cursos')" class="apply-btn">Aplicar</button>
                            <button onclick="window.imageControlPanel.randomizeSection('cursos')" class="random-btn">🎲 Aleatória</button>
                            <button onclick="window.imageControlPanel.resetSection('cursos')" class="reset-btn">🔄 Reset</button>
                        </div>
                        
                        <div class="section-group">
                            <h5>Depoimentos</h5>
                            <button onclick="window.imageControlPanel.applyImage('depoimentos', 'depoimentos')" class="apply-btn">Aplicar</button>
                            <button onclick="window.imageControlPanel.randomizeSection('depoimentos')" class="random-btn">🎲 Aleatória</button>
                            <button onclick="window.imageControlPanel.resetSection('depoimentos')" class="reset-btn">🔄 Reset</button>
                        </div>
                    </div>
                </div>

                <!-- Imagens Personalizadas -->
                <div class="control-section">
                    <h4>💾 Imagens Personalizadas</h4>
                    <div class="custom-image-controls">
                        <button onclick="window.imageControlPanel.exportImages()" class="export-btn">📤 Exportar</button>
                        <button onclick="window.imageControlPanel.importImages()" class="import-btn">📥 Importar</button>
                        <button onclick="window.imageControlPanel.removeAllCustom()" class="remove-all-btn">🗑️ Remover Todas</button>
                    </div>
                    <div id="custom-images-list" class="custom-images-list">
                        <div class="empty-state">Nenhuma imagem personalizada</div>
                    </div>
                </div>

                <!-- Upload de Imagem -->
                <div class="control-section">
                    <h4>📁 Upload de Imagem</h4>
                    <div class="upload-controls">
                        <input type="file" id="image-upload" accept="image/*" style="display: none;" onchange="window.imageControlPanel.handleFileUpload(event)" />
                        <button onclick="document.getElementById('image-upload').click()" class="upload-btn">📁 Escolher Imagem</button>
                        <div id="upload-preview" class="upload-preview" style="display: none;">
                            <img id="preview-img" class="preview-image" />
                            <div class="preview-info">Arraste para aplicar</div>
                        </div>
                    </div>
                    
                    <div class="upload-section-select">
                        <label for="upload-section">Seção:</label>
                        <select id="upload-section">
                            <option value="">Selecione uma seção</option>
                            <option value="hero">Hero</option>
                            <option value="sobre">Sobre</option>
                            <option value="servicos">Serviços</option>
                            <option value="vagas">Vagas</option>
                            <option value="empresas">Empresas</option>
                            <option value="cursos">Cursos</option>
                            <option value="depoimentos">Depoimentos</option>
                        </select>
                    </div>
                    
                    <button onclick="window.imageControlPanel.applyUploadedImage()" id="apply-upload-btn" class="apply-upload-btn" style="display: none;">✅ Aplicar Upload</button>
                </div>

                <!-- Ações Globais -->
                <div class="control-section">
                    <h4>🌐 Ações Globais</h4>
                    <div class="global-controls">
                        <button onclick="window.imageControlPanel.randomizeAll()" class="global-btn">🎲 Aleatorizar Todas</button>
                        <button onclick="window.imageControlPanel.resetAll()" class="global-btn">🔄 Resetar Todas</button>
                        <button onclick="window.imageControlPanel.refreshAll()" class="global-btn">🔄 Atualizar Todas</button>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * 🎨 Adiciona estilos CSS ao painel
     */
    _addStyles() {
        const styles = document.createElement('style');
        styles.textContent = `
            #image-control-panel {
                position: fixed;
                top: 20px;
                right: 20px;
                width: 380px;
                max-height: 90vh;
                background: rgba(20, 60, 107, 0.98);
                border: 2px solid #F5B700;
                border-radius: 12px;
                color: white;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                z-index: 10000;
                backdrop-filter: blur(10px);
                box-shadow: 0 8px 32px rgba(0,0,0,0.3);
                overflow: hidden;
                transition: all 0.3s ease;
            }
            
            .panel-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 16px;
                background: rgba(245, 183, 0, 0.2);
                border-radius: 10px 10px 0 0;
                border-bottom: 1px solid rgba(245, 183, 0, 0.3);
                position: sticky;
                top: 0;
                z-index: 1;
            }
            
            .panel-header h3 {
                margin: 0;
                font-size: 14px;
                color: #F5B700;
                font-weight: 600;
            }
            
            .panel-toggle {
                background: none;
                border: none;
                color: #F5B700;
                font-size: 18px;
                cursor: pointer;
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 4px;
                transition: background-color 0.2s;
            }
            
            .panel-toggle:hover {
                background: rgba(245, 183, 0, 0.1);
            }
            
            .panel-content {
                padding: 16px;
                max-height: calc(90vh - 60px);
                overflow-y: auto;
            }
            
            .control-section {
                margin-bottom: 20px;
                padding: 16px;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 8px;
                border: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .control-section h4 {
                margin: 0 0 12px 0;
                font-size: 14px;
                color: #F5B700;
                font-weight: 600;
                border-bottom: 1px solid rgba(245, 183, 0, 0.3);
                padding-bottom: 8px;
            }
            
            .control-section h5 {
                margin: 8px 0 6px 0;
                font-size: 12px;
                color: #ccc;
                font-weight: 500;
            }
            
            .section-controls {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 12px;
            }
            
            .section-group {
                background: rgba(255, 255, 255, 0.03);
                padding: 10px;
                border-radius: 6px;
                border: 1px solid rgba(255, 255, 255, 0.05);
            }
            
            button {
                background: #007bff;
                color: white;
                border: none;
                padding: 6px 12px;
                margin: 2px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 11px;
                transition: all 0.2s;
                font-weight: 500;
            }
            
            button:hover {
                background: #0056b3;
                transform: translateY(-1px);
            }
            
            button:active {
                transform: translateY(0);
            }
            
            .apply-btn { background: #28a745; }
            .apply-btn:hover { background: #1e7e34; }
            
            .random-btn { background: #ffc107; color: #212529; }
            .random-btn:hover { background: #e0a800; }
            
            .reset-btn { background: #6c757d; }
            .reset-btn:hover { background: #545b62; }
            
            .export-btn { background: #17a2b8; }
            .export-btn:hover { background: #138496; }
            
            .import-btn { background: #6f42c1; }
            .import-btn:hover { background: #5a2d91; }
            
            .remove-all-btn { background: #dc3545; }
            .remove-all-btn:hover { background: #c82333; }
            
            .global-btn { background: #fd7e14; }
            .global-btn:hover { background: #e8690b; }
            
            .refresh-btn { background: #20c997; }
            .refresh-btn:hover { background: #1ba085; }
            
            .upload-btn { background: #6f42c1; }
            .upload-btn:hover { background: #5a2d91; }
            
            .apply-upload-btn { background: #28a745; }
            .apply-upload-btn:hover { background: #1e7e34; }
            
            .status-info {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 12px;
                padding: 8px;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 6px;
                font-size: 12px;
            }
            
            .status-indicator {
                font-size: 16px;
            }
            
            .custom-image-controls {
                display: flex;
                gap: 8px;
                margin-bottom: 12px;
                flex-wrap: wrap;
            }
            
            .custom-images-list {
                max-height: 120px;
                overflow-y: auto;
                background: rgba(0, 0, 0, 0.2);
                border-radius: 6px;
                padding: 8px;
                font-size: 11px;
            }
            
            .empty-state {
                color: #ccc;
                text-align: center;
                font-style: italic;
            }
            
            .upload-controls {
                margin-bottom: 12px;
            }
            
            .upload-preview {
                margin-top: 8px;
                text-align: center;
            }
            
            .preview-image {
                max-width: 80px;
                max-height: 60px;
                border-radius: 4px;
                border: 1px solid rgba(255, 255, 255, 0.2);
            }
            
            .preview-info {
                font-size: 10px;
                color: #ccc;
                margin-top: 4px;
            }
            
            .upload-section-select {
                margin-bottom: 12px;
            }
            
            .upload-section-select label {
                display: block;
                margin-bottom: 4px;
                font-size: 12px;
                color: #ccc;
            }
            
            select {
                width: 100%;
                padding: 6px;
                border-radius: 4px;
                border: 1px solid rgba(255, 255, 255, 0.2);
                background: rgba(0, 0, 0, 0.3);
                color: white;
                font-size: 12px;
            }
            
            select option {
                background: #1a1a1a;
                color: white;
            }
            
            .global-controls {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
            }
            
            /* Scrollbar personalizada */
            .panel-content::-webkit-scrollbar {
                width: 6px;
            }
            
            .panel-content::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 3px;
            }
            
            .panel-content::-webkit-scrollbar-thumb {
                background: rgba(245, 183, 0, 0.5);
                border-radius: 3px;
            }
            
            .panel-content::-webkit-scrollbar-thumb:hover {
                background: rgba(245, 183, 0, 0.7);
            }
        `;
        
        document.head.appendChild(styles);
    }

    /**
     * 🎯 Configura os event listeners do painel
     */
    _setupEventListeners() {
        // Configurar drag and drop para upload
        this._setupDragAndDrop();
    }

    /**
     * 📁 Configura drag and drop para upload
     */
    _setupDragAndDrop() {
        const panel = this.panel;
        
        panel.addEventListener('dragover', (e) => {
            e.preventDefault();
            panel.style.borderColor = '#F5B700';
        });
        
        panel.addEventListener('dragleave', (e) => {
            e.preventDefault();
            panel.style.borderColor = '#F5B700';
        });
        
        panel.addEventListener('drop', (e) => {
            e.preventDefault();
            panel.style.borderColor = '#F5B700';
            
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                this.handleFileUpload({ target: { files } });
            }
        });
    }

    /**
     * 📊 Carrega dados iniciais do painel
     */
    _loadInitialData() {
        this.refreshStatus();
        this.updateCustomImagesList();
    }

    /**
     * 🔄 Atualiza o status do ImageRegistry
     */
    refreshStatus() {
        if (!window.ImageRegistry) {
            this._updateStatusElement('❌', 'ImageRegistry não disponível', 'error');
            return;
        }

        const stats = window.ImageRegistry.getStats();
        const statusText = `✅ ${stats.totalImages} imagens, ${stats.customImages} personalizadas`;
        this._updateStatusElement('✅', statusText, 'success');
    }

    /**
     * 📝 Atualiza o elemento de status
     */
    _updateStatusElement(icon, text, type) {
        const statusElement = document.getElementById('registry-status');
        if (statusElement) {
            const indicator = statusElement.querySelector('.status-indicator');
            const statusText = statusElement.querySelector('.status-text');
            
            if (indicator) indicator.textContent = icon;
            if (statusText) statusText.textContent = text;
            
            statusElement.className = `status-info status-${type}`;
        }
    }

    /**
     * 🎯 Aplica uma imagem específica
     */
    applyImage(imageId, section) {
        if (!window.ImageRegistry) {
            alert('❌ ImageRegistry não está disponível');
            return;
        }

        const success = window.ImageRegistry.applyImageToSection(imageId, section);
        if (success) {
            this.refreshStatus();
            this.updateCustomImagesList();
        }
    }

    /**
     * 🎲 Aleatoriza uma seção
     */
    randomizeSection(section) {
        if (!window.ImageRegistry) {
            alert('❌ ImageRegistry não está disponível');
            return;
        }

        const success = window.ImageRegistry.randomizeSectionImage(section);
        if (success) {
            this.refreshStatus();
        }
    }

    /**
     * 🔄 Reseta uma seção
     */
    resetSection(section) {
        if (!window.ImageRegistry) {
            alert('❌ ImageRegistry não está disponível');
            return;
        }

        const success = window.ImageRegistry.resetSectionImage(section);
        if (success) {
            this.refreshStatus();
            this.updateCustomImagesList();
        }
    }

    /**
     * 📤 Exporta imagens personalizadas
     */
    exportImages() {
        if (!window.ImageRegistry) {
            alert('❌ ImageRegistry não está disponível');
            return;
        }

        const success = window.ImageRegistry.exportCustomImages();
        if (success) {
            alert('✅ Imagens exportadas com sucesso!');
        }
    }

    /**
     * 📥 Importa imagens personalizadas
     */
    importImages() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = async (e) => {
            const file = e.target.files[0];
            if (file) {
                const success = await window.ImageRegistry.importCustomImages(file);
                if (success) {
                    alert('✅ Imagens importadas com sucesso!');
                    this.refreshStatus();
                    this.updateCustomImagesList();
                } else {
                    alert('❌ Erro ao importar imagens');
                }
            }
        };
        input.click();
    }

    /**
     * 🗑️ Remove todas as imagens personalizadas
     */
    removeAllCustom() {
        if (!confirm('Tem certeza que deseja remover todas as imagens personalizadas?')) {
            return;
        }

        if (!window.ImageRegistry) {
            alert('❌ ImageRegistry não está disponível');
            return;
        }

        const success = window.ImageRegistry.removeAllCustomImages();
        if (success) {
            alert('✅ Todas as imagens personalizadas foram removidas');
            this.refreshStatus();
            this.updateCustomImagesList();
        }
    }

    /**
     * 📁 Manipula upload de arquivo
     */
    handleFileUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            alert('❌ Por favor, selecione apenas arquivos de imagem');
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            alert('❌ A imagem deve ter no máximo 5MB');
            return;
        }

        // Mostrar preview
        const reader = new FileReader();
        reader.onload = (e) => {
            const preview = document.getElementById('upload-preview');
            const previewImg = document.getElementById('preview-img');
            const applyBtn = document.getElementById('apply-upload-btn');

            previewImg.src = e.target.result;
            preview.style.display = 'block';
            applyBtn.style.display = 'inline-block';

            // Armazenar dados da imagem
            this.uploadedImageData = e.target.result;
            this.uploadedFileName = file.name;

            console.log('✅ Imagem carregada:', file.name);
        };

        reader.readAsDataURL(file);
    }

    /**
     * ✅ Aplica imagem carregada
     */
    applyUploadedImage() {
        if (!this.uploadedImageData) {
            alert('❌ Nenhuma imagem foi carregada');
            return;
        }

        const section = document.getElementById('upload-section').value;
        if (!section) {
            alert('❌ Por favor, selecione uma seção');
            return;
        }

        if (!window.ImageRegistry) {
            alert('❌ ImageRegistry não está disponível');
            return;
        }

        // Salvar como imagem personalizada
        const success = window.ImageRegistry.saveCustomImage(section, this.uploadedImageData, `Imagem personalizada: ${this.uploadedFileName}`);
        
        if (success) {
            // Aplicar à seção
            window.ImageRegistry.applyImageToSection(section, section);
            
            alert('✅ Imagem aplicada com sucesso!');
            
            // Limpar upload
            this._clearUpload();
            this.refreshStatus();
            this.updateCustomImagesList();
        } else {
            alert('❌ Erro ao aplicar imagem');
        }
    }

    /**
     * 🧹 Limpa dados do upload
     */
    _clearUpload() {
        this.uploadedImageData = null;
        this.uploadedFileName = null;
        
        const preview = document.getElementById('upload-preview');
        const applyBtn = document.getElementById('apply-upload-btn');
        const fileInput = document.getElementById('image-upload');
        
        preview.style.display = 'none';
        applyBtn.style.display = 'none';
        fileInput.value = '';
    }

    /**
     * 🎲 Aleatoriza todas as seções
     */
    randomizeAll() {
        if (!window.ImageRegistry) {
            alert('❌ ImageRegistry não está disponível');
            return;
        }

        const sections = ['hero', 'sobre', 'servicos', 'vagas', 'empresas', 'cursos', 'depoimentos'];
        let successCount = 0;

        sections.forEach(section => {
            if (window.ImageRegistry.randomizeSectionImage(section)) {
                successCount++;
            }
        });

        alert(`✅ ${successCount} seções aleatorizadas com sucesso!`);
        this.refreshStatus();
    }

    /**
     * 🔄 Reseta todas as seções
     */
    resetAll() {
        if (!confirm('Tem certeza que deseja resetar todas as seções para as imagens padrão?')) {
            return;
        }

        if (!window.ImageRegistry) {
            alert('❌ ImageRegistry não está disponível');
            return;
        }

        const sections = ['hero', 'sobre', 'servicos', 'vagas', 'empresas', 'cursos', 'depoimentos'];
        let successCount = 0;

        sections.forEach(section => {
            if (window.ImageRegistry.resetSectionImage(section)) {
                successCount++;
            }
        });

        alert(`✅ ${successCount} seções resetadas com sucesso!`);
        this.refreshStatus();
        this.updateCustomImagesList();
    }

    /**
     * 🔄 Atualiza todas as seções
     */
    refreshAll() {
        if (!window.ImageRegistry) {
            alert('❌ ImageRegistry não está disponível');
            return;
        }

        const sections = ['hero', 'sobre', 'servicos', 'vagas', 'empresas', 'cursos', 'depoimentos'];
        let successCount = 0;

        sections.forEach(section => {
            const sectionImages = window.ImageRegistry.getImagesBySection(section);
            if (sectionImages.length > 0) {
                const defaultImage = sectionImages.find(img => !img.isCustom);
                if (defaultImage) {
                    if (window.ImageRegistry.applyImageToSection(defaultImage.id, section)) {
                        successCount++;
                    }
                }
            }
        });

        alert(`✅ ${successCount} seções atualizadas com sucesso!`);
        this.refreshStatus();
    }

    /**
     * 📝 Atualiza lista de imagens personalizadas
     */
    updateCustomImagesList() {
        if (!window.ImageRegistry) return;

        const customImages = window.ImageRegistry.customImages;
        const listElement = document.getElementById('custom-images-list');

        if (customImages.size === 0) {
            listElement.innerHTML = '<div class="empty-state">Nenhuma imagem personalizada</div>';
            return;
        }

        let html = '';
        customImages.forEach((image, id) => {
            html += `
                <div class="custom-image-item">
                    <span class="image-id">${id}</span>
                    <span class="image-timestamp">${new Date(image.timestamp).toLocaleDateString()}</span>
                    <button onclick="window.imageControlPanel.removeCustomImage('${id}')" class="remove-btn">🗑️</button>
                </div>
            `;
        });

        listElement.innerHTML = html;
    }

    /**
     * 🗑️ Remove uma imagem personalizada específica
     */
    removeCustomImage(imageId) {
        if (!confirm(`Tem certeza que deseja remover a imagem personalizada "${imageId}"?`)) {
            return;
        }

        if (!window.ImageRegistry) {
            alert('❌ ImageRegistry não está disponível');
            return;
        }

        const success = window.ImageRegistry.removeCustomImage(imageId);
        if (success) {
            alert('✅ Imagem personalizada removida com sucesso!');
            this.refreshStatus();
            this.updateCustomImagesList();
        } else {
            alert('❌ Erro ao remover imagem personalizada');
        }
    }

    /**
     * 👁️ Alterna visibilidade do painel
     */
    toggle() {
        if (!this.panel) return;

        this.isVisible = !this.isVisible;
        
        if (this.isVisible) {
            this.panel.style.transform = 'translateX(0)';
            this.panel.querySelector('.panel-toggle').textContent = '−';
        } else {
            this.panel.style.transform = 'translateX(calc(100% - 40px))';
            this.panel.querySelector('.panel-toggle').textContent = '+';
        }
    }

    /**
     * 🚀 Mostra o painel
     */
    show() {
        if (this.panel) {
            this.panel.style.display = 'block';
            this.isVisible = true;
        }
    }

    /**
     * 🙈 Esconde o painel
     */
    hide() {
        if (this.panel) {
            this.panel.style.display = 'none';
            this.isVisible = false;
        }
    }
}

// 🚀 Criar instância global
window.imageControlPanel = new ImageControlPanel();

// 📝 Log de inicialização
console.log('🎛️ ImageControlPanel carregado. Use imageControlPanel.init() para inicializar.');

// 🔄 Auto-inicialização quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', async () => {
    console.log('🚀 Inicializando ImageControlPanel...');
    await window.imageControlPanel.init();
});










