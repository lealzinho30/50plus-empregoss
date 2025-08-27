/**
 * 🖼️ PAINEL SIMPLES DE CONTROLE DE IMAGENS - 50+ Empregos
 * Painel limpo e funcional apenas para upload de imagens
 */

// Variável global para controlar o estado do painel
let isPanelOpen = false;
let uploadedImageData = null;

/**
 * 🚀 Inicializa o sistema de controle de imagens
 */
function initImageControlPanel() {
    console.log('🚀 Inicializando painel de controle de imagens...');
    
    // Criar botão de toggle
    createToggleButton();
    
    // Criar painel principal
    createMainPanel();
    
    // Carregar imagens salvas automaticamente
    setTimeout(() => {
        loadSavedImages();
    }, 1000);
    
    console.log('✅ Painel de controle inicializado!');
}

/**
 * 🔘 Cria botão para abrir/fechar o painel
 */
function createToggleButton() {
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'image-panel-toggle';
    toggleBtn.innerHTML = '🖼️ Painel de Imagens';
    toggleBtn.className = 'image-panel-toggle';
    
    // Posicionar no canto superior direito
    toggleBtn.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        background: #F5B700;
        color: #143C6B;
        border: none;
        border-radius: 8px;
        padding: 12px 16px;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    `;
    
    toggleBtn.onclick = togglePanel;
    document.body.appendChild(toggleBtn);
}

/**
 * 🔄 Alterna entre abrir e fechar o painel
 */
function togglePanel() {
    const panel = document.getElementById('image-control-panel');
    
    if (isPanelOpen) {
        // Fechar painel
        panel.style.display = 'none';
        isPanelOpen = false;
        console.log('🔒 Painel fechado');
    } else {
        // Abrir painel
        panel.style.display = 'block';
        isPanelOpen = true;
        console.log('🔓 Painel aberto');
    }
}

/**
 * 🎛️ Cria o painel principal de controle
 */
function createMainPanel() {
    const panel = document.createElement('div');
    panel.id = 'image-control-panel';
    panel.className = 'image-control-panel';
    
    panel.innerHTML = `
        <div class="panel-header">
            <h3>🖼️ Controle de Imagens</h3>
            <button class="close-btn" onclick="togglePanel()">✕</button>
        </div>
        
        <div class="panel-content">
            <!-- Upload de Imagem -->
            <div class="control-section">
                <h4>📁 Upload de Imagem</h4>
                <input type="file" id="image-upload" accept="image/*" onchange="handleImageUpload(event)" />
                
                <div id="upload-preview" style="display: none;">
                    <img id="preview-img" alt="Preview" />
                    <div class="preview-text">Imagem carregada!</div>
                </div>
                
                <!-- Seleção de Seção -->
                <select id="upload-section">
                    <option value="hero">Hero</option>
                    <option value="sobre">Sobre</option>
                    <option value="services">Serviços</option>
                    <option value="vagas">Vagas</option>
                    <option value="cursos">Cursos</option>
                    <option value="depoimentos">Depoimentos</option>
                    <option value="cta">CTA Final</option>
                    <option value="empresas">Empresas</option>
                    <option value="proposta">Proposta de Valor</option>
                </select>
                
                <button id="apply-upload-btn" onclick="applyUploadedImage()" style="display: none;">
                    ✅ Aplicar Imagem
                </button>
            </div>
            
            <!-- Imagens Salvas -->
            <div class="control-section">
                <h4>💾 Imagens Salvas</h4>
                <button onclick="loadSavedImages()" class="load-btn">🔄 Recarregar</button>
                <div id="saved-images-list">
                    <div class="no-images">Nenhuma imagem salva</div>
                </div>
            </div>
            
            <!-- Compartilhamento -->
            <div class="control-section">
                <h4>📤 Compartilhar</h4>
                <button onclick="exportImages()" class="export-btn">📤 Exportar</button>
                <button onclick="importImages()" class="import-btn">📥 Importar</button>
            </div>
        </div>
    `;
    
    // Adicionar estilos
    addPanelStyles();
    
    // Adicionar ao DOM
    document.body.appendChild(panel);
    
    // Inicialmente fechado
    panel.style.display = 'none';
}

/**
 * 🎨 Adiciona estilos CSS ao painel
 */
function addPanelStyles() {
    const styles = document.createElement('style');
    styles.textContent = `
        .image-control-panel {
            position: fixed;
            top: 80px;
            right: 20px;
            width: 350px;
            background: #143C6B;
            border: 2px solid #F5B700;
            border-radius: 12px;
            color: white;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            z-index: 10000;
            box-shadow: 0 8px 32px rgba(0,0,0,0.3);
            max-height: 80vh;
            overflow-y: auto;
        }
        
        .panel-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px;
            background: rgba(245, 183, 0, 0.2);
            border-radius: 10px 10px 0 0;
            border-bottom: 1px solid rgba(245, 183, 0, 0.3);
        }
        
        .panel-header h3 {
            margin: 0;
            color: #F5B700;
        }
        
        .close-btn {
            background: #F5B700;
            color: #143C6B;
            border: none;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            cursor: pointer;
            font-weight: bold;
        }
        
        .panel-content {
            padding: 16px;
        }
        
        .control-section {
            margin-bottom: 20px;
            padding: 16px;
            background: rgba(255,255,255,0.05);
            border-radius: 8px;
            border: 1px solid rgba(245, 183, 0, 0.2);
        }
        
        .control-section h4 {
            margin: 0 0 12px 0;
            color: #F5B700;
            font-size: 14px;
        }
        
        #image-upload {
            width: 100%;
            margin-bottom: 12px;
            padding: 8px;
            border: 1px solid #F5B700;
            border-radius: 4px;
            background: rgba(255,255,255,0.1);
            color: white;
        }
        
        #upload-section {
            width: 100%;
            margin-bottom: 12px;
            padding: 8px;
            border: 1px solid #F5B700;
            border-radius: 4px;
            background: rgba(255,255,255,0.1);
            color: white;
        }
        
        #upload-preview {
            text-align: center;
            margin: 12px 0;
        }
        
        #preview-img {
            max-width: 100%;
            max-height: 120px;
            border-radius: 8px;
            border: 2px solid #F5B700;
        }
        
        .preview-text {
            margin-top: 8px;
            color: #F5B700;
            font-size: 12px;
        }
        
        button {
            background: #F5B700;
            color: #143C6B;
            border: none;
            border-radius: 6px;
            padding: 8px 16px;
            margin: 4px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s ease;
        }
        
        button:hover {
            background: #E6A800;
            transform: translateY(-2px);
        }
        
        .load-btn, .export-btn, .import-btn {
            background: #4CAF50;
            color: white;
        }
        
        .load-btn:hover, .export-btn:hover, .import-btn:hover {
            background: #45a049;
        }
        
        #saved-images-list {
            margin-top: 12px;
            font-size: 12px;
        }
        
        .saved-image-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px;
            margin: 4px 0;
            background: rgba(255,255,255,0.1);
            border-radius: 4px;
        }
        
        .no-images {
            color: #ccc;
            font-style: italic;
            text-align: center;
            padding: 20px;
        }
        
        .remove-btn {
            background: #f44336;
            color: white;
            padding: 4px 8px;
            font-size: 10px;
        }
        
        .remove-btn:hover {
            background: #d32f2f;
        }
    `;
    
    document.head.appendChild(styles);
}

/**
 * 📁 Gerencia o upload de imagem
 */
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Verificar se é uma imagem
    if (!file.type.startsWith('image/')) {
        alert('❌ Por favor, selecione apenas arquivos de imagem (JPG, PNG, GIF, etc.)');
        return;
    }
    
    // Verificar tamanho (máximo 5MB)
    if (file.size > 5 * 1024 * 1024) {
        alert('❌ A imagem deve ter no máximo 5MB');
        return;
    }
    
    // Ler o arquivo
    const reader = new FileReader();
    reader.onload = function(e) {
        uploadedImageData = e.target.result;
        
        // Mostrar preview
        const preview = document.getElementById('upload-preview');
        const previewImg = document.getElementById('preview-img');
        const applyBtn = document.getElementById('apply-upload-btn');
        
        previewImg.src = uploadedImageData;
        preview.style.display = 'block';
        applyBtn.style.display = 'inline-block';
        
        console.log('✅ Imagem carregada com sucesso!');
    };
    
    reader.readAsDataURL(file);
}

/**
 * ✅ Aplica a imagem carregada
 */
function applyUploadedImage() {
    if (!uploadedImageData) {
        alert('❌ Nenhuma imagem foi carregada');
        return;
    }
    
    const section = document.getElementById('upload-section').value;
    
    console.log('🎯 Aplicando imagem à seção:', section);
    console.log('🔍 Verificando ImageManager...');
    
    // Verificar se o ImageManager está disponível
    if (typeof ImageManager === 'undefined') {
        console.error('❌ ImageManager não está definido globalmente');
        alert('❌ Sistema de imagens não está disponível. Recarregue a página.');
        return;
    }
    
    console.log('✅ ImageManager encontrado:', ImageManager);
    
    if (typeof ImageManager.changeSectionImage !== 'function') {
        console.error('❌ ImageManager.changeSectionImage não é uma função');
        console.log('🔍 Funções disponíveis:', Object.keys(ImageManager));
        alert('❌ Função de mudança de imagem não está disponível');
        return;
    }
    
    console.log('✅ Função changeSectionImage encontrada');
    
    try {
        // Aplicar a imagem usando o ImageManager
        const success = ImageManager.changeSectionImage(section, uploadedImageData);
        
        console.log('🎯 Resultado da aplicação:', success);
        
        if (success) {
            // Salvar no localStorage
            saveImageToStorage(section, uploadedImageData);
            
            // Limpar upload
            clearUpload();
            
            // Recarregar lista de imagens salvas
            loadSavedImages();
            
            alert(`✅ Imagem aplicada na seção ${section} com sucesso!`);
        } else {
            alert('❌ Erro ao aplicar a imagem. Verifique o console para mais detalhes.');
        }
    } catch (error) {
        console.error('❌ Erro durante a aplicação:', error);
        alert('❌ Erro inesperado: ' + error.message);
    }
}

/**
 * 💾 Salva imagem no localStorage
 */
function saveImageToStorage(section, imageData) {
    try {
        const savedImages = JSON.parse(localStorage.getItem('savedImages') || '{}');
        savedImages[section] = {
            src: imageData,
            timestamp: new Date().toISOString(),
            section: section
        };
        
        localStorage.setItem('savedImages', JSON.stringify(savedImages));
        console.log(`💾 Imagem salva para seção: ${section}`);
        
        return true;
    } catch (error) {
        console.error('❌ Erro ao salvar imagem:', error);
        return false;
    }
}

/**
 * 🔄 Carrega imagens salvas
 */
function loadSavedImages() {
    try {
        const savedImages = JSON.parse(localStorage.getItem('savedImages') || '{}');
        const listContainer = document.getElementById('saved-images-list');
        
        if (Object.keys(savedImages).length === 0) {
            listContainer.innerHTML = '<div class="no-images">Nenhuma imagem salva</div>';
            return;
        }
        
        let html = '';
        Object.keys(savedImages).forEach(section => {
            const image = savedImages[section];
            html += `
                <div class="saved-image-item">
                    <span>${section}</span>
                    <button class="remove-btn" onclick="removeSavedImage('${section}')">🗑️</button>
                </div>
            `;
        });
        
        listContainer.innerHTML = html;
        console.log('📂 Imagens salvas carregadas:', Object.keys(savedImages).length);
        
    } catch (error) {
        console.error('❌ Erro ao carregar imagens salvas:', error);
    }
}

/**
 * 🗑️ Remove imagem salva
 */
function removeSavedImage(section) {
    try {
        const savedImages = JSON.parse(localStorage.getItem('savedImages') || '{}');
        delete savedImages[section];
        localStorage.setItem('savedImages', JSON.stringify(savedImages));
        
        // Resetar para imagem padrão
        if (typeof ImageManager !== 'undefined' && typeof ImageManager.changeSectionImage === 'function') {
            ImageManager.changeSectionImage(section, 'default');
        }
        
        // Recarregar lista
        loadSavedImages();
        
        console.log(`🗑️ Imagem removida da seção: ${section}`);
        alert(`✅ Imagem removida da seção ${section}`);
        
    } catch (error) {
        console.error('❌ Erro ao remover imagem:', error);
    }
}

/**
 * 📤 Exporta imagens salvas
 */
function exportImages() {
    try {
        const savedImages = JSON.parse(localStorage.getItem('savedImages') || '{}');
        
        if (Object.keys(savedImages).length === 0) {
            alert('❌ Nenhuma imagem para exportar!');
            return;
        }
        
        const exportData = {
            version: '1.0',
            exportDate: new Date().toISOString(),
            images: savedImages
        };
        
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `50plus-empregos-imagens-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        alert(`✅ ${Object.keys(savedImages).length} imagens exportadas com sucesso!`);
        
    } catch (error) {
        console.error('❌ Erro na exportação:', error);
        alert('❌ Erro ao exportar imagens: ' + error.message);
    }
}

/**
 * 📥 Importa imagens
 */
function importImages() {
    try {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.style.display = 'none';
        
        input.onchange = function(event) {
            const file = event.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const importData = JSON.parse(e.target.result);
                    
                    if (!importData.images || !importData.version) {
                        throw new Error('Formato de arquivo inválido');
                    }
                    
                    // Mesclar com imagens existentes
                    const existingImages = JSON.parse(localStorage.getItem('savedImages') || '{}');
                    const mergedImages = { ...existingImages, ...importData.images };
                    
                    localStorage.setItem('savedImages', JSON.stringify(mergedImages));
                    
                    // Aplicar as imagens importadas
                    Object.keys(importData.images).forEach(section => {
                        const image = importData.images[section];
                        if (typeof ImageManager !== 'undefined' && typeof ImageManager.changeSectionImage === 'function') {
                            ImageManager.changeSectionImage(section, image.src);
                        }
                    });
                    
                    // Recarregar lista
                    loadSavedImages();
                    
                    alert(`✅ ${Object.keys(importData.images).length} imagens importadas com sucesso!`);
                    
                } catch (error) {
                    console.error('❌ Erro ao processar arquivo:', error);
                    alert('❌ Erro ao importar arquivo: ' + error.message);
                }
            };
            
            reader.readAsText(file);
        };
        
        document.body.appendChild(input);
        input.click();
        document.body.removeChild(input);
        
    } catch (error) {
        console.error('❌ Erro na importação:', error);
        alert('❌ Erro ao importar imagens: ' + error.message);
    }
}

/**
 * 🧹 Limpa o upload atual
 */
function clearUpload() {
    uploadedImageData = null;
    document.getElementById('image-upload').value = '';
    document.getElementById('upload-preview').style.display = 'none';
    document.getElementById('apply-upload-btn').style.display = 'none';
}

// ========== INICIALIZAÇÃO AUTOMÁTICA ==========

// Função para aguardar o ImageManager estar disponível
function waitForImageManager() {
    return new Promise((resolve) => {
        const checkManager = () => {
            if (typeof ImageManager !== 'undefined' && typeof ImageManager.changeSectionImage === 'function') {
                console.log('✅ ImageManager está disponível!');
                resolve();
            } else {
                console.log('⏳ Aguardando ImageManager...');
                setTimeout(checkManager, 100);
            }
        };
        checkManager();
    });
}

// Inicializar quando a página carregar
async function initializePanel() {
    console.log('🚀 Iniciando painel de controle...');
    
    // Aguardar o ImageManager estar disponível
    await waitForImageManager();
    
    // Inicializar o painel
    initImageControlPanel();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePanel);
} else {
    initializePanel();
}

// Comando secreto para abrir o painel (Ctrl + Shift + I)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        if (!isPanelOpen) {
            togglePanel();
        }
    }
});
