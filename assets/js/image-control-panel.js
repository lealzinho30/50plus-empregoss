/**
 * 🎛️ PAINEL DE CONTROLE DE IMAGENS - 50+ Empregos
 * Interface visual para gerenciar imagens do site
 */

// Criar painel de controle flutuante
function createImageControlPanel() {
    // Verificar se já existe
    if (document.getElementById('image-control-panel')) {
        return;
    }

    const panel = document.createElement('div');
    panel.id = 'image-control-panel';
    panel.innerHTML = `
        <div class="panel-header">
            <h3>🎛️ Controle de Imagens</h3>
            <button class="panel-toggle" onclick="toggleImagePanel()">−</button>
        </div>
        <div class="panel-content">
            <div class="control-section">
                <h4>🚀 Hero</h4>
                <button onclick="ImageManager.changeSectionImage('hero', 'default')">Padrão</button>
                <button onclick="ImageManager.changeSectionImage('hero', 'alternative', 0)">Alt 1</button>
                <button onclick="ImageManager.changeSectionImage('hero', 'alternative', 1)">Alt 2</button>
                <button onclick="ImageManager.randomizeSectionImage('hero')">🎲 Aleatória</button>
            </div>
            
            <div class="control-section">
                <h4>🌐 Sobre</h4>
                <button onclick="ImageManager.changeSectionImage('about', 'default')">Padrão</button>
                <button onclick="ImageManager.changeSectionImage('about', 'alternative', 0)">Alt 1</button>
                <button onclick="ImageManager.randomizeSectionImage('about')">🎲 Aleatória</button>
            </div>
            
            <div class="control-section">
                <h4>🔄 Serviços</h4>
                <button onclick="ImageManager.changeSectionImage('services', 'default')">Padrão</button>
                <button onclick="ImageManager.changeSectionImage('services', 'alternative', 0)">Alt 1</button>
                <button onclick="ImageManager.randomizeSectionImage('services')">🎲 Aleatória</button>
            </div>
            
            <div class="control-section">
                <h4>💼 Vagas</h4>
                <button onclick="ImageManager.changeSectionImage('vagas', 'default')">Padrão</button>
                <button onclick="ImageManager.changeSectionImage('vagas', 'alternative', 0)">Alt 1</button>
                <button onclick="ImageManager.randomizeSectionImage('vagas')">🎲 Aleatória</button>
            </div>
            
            <div class="control-section">
                <h4>⚡ Ações Rápidas</h4>
                <button onclick="ImageManager.listAvailableSections()">📋 Listar Seções</button>
                <button onclick="randomizeAllImages()">🎲 Todas Aleatórias</button>
                <button onclick="resetAllImages()">🔄 Resetar Tudo</button>
            </div>
            
            <div class="control-section">
                <h4>🔧 Personalizado</h4>
                <input type="text" id="custom-image-url" placeholder="URL da imagem" />
                <select id="custom-section">
                    <option value="hero">Hero</option>
                    <option value="about">Sobre</option>
                    <option value="services">Serviços</option>
                    <option value="vagas">Vagas</option>
                </select>
                                        <button onclick="applyCustomImage()">Aplicar</button>
                    </div>
                    
                    <div class="control-section">
                        <h4>💾 Imagens Personalizadas</h4>
                        <button onclick="loadCustomImages()" class="load-btn">📂 Carregar Salvas</button>
                        <button onclick="removeAllCustomImages()" class="remove-btn">🗑️ Remover Todas</button>
                        <div id="custom-images-list" style="margin-top: 10px; font-size: 12px; color: #ccc;">
                            <div>Nenhuma imagem personalizada salva</div>
                        </div>
                    </div>
            
            <div class="control-section">
                <h4>📁 Upload de Arquivo</h4>
                <input type="file" id="image-upload" accept="image/*" style="display: none;" onchange="handleImageUpload(event)" />
                <button onclick="document.getElementById('image-upload').click()" class="upload-btn">📁 Escolher Imagem</button>
                <div id="upload-preview" style="display: none;">
                    <img id="preview-img" style="max-width: 100px; max-height: 60px; border-radius: 4px; margin: 5px 0;" />
                    <div style="font-size: 10px; color: #ccc; margin: 2px 0;">Arraste para aplicar</div>
                </div>
                                        <select id="upload-section">
                            <option value="hero">Hero</option>
                            <option value="about">Sobre</option>
                            <option value="services">Serviços</option>
                            <option value="vagas">Vagas</option>
                            <option value="cursos">Cursos</option>
                            <option value="depoimentos">Depoimentos</option>
                            <option value="cta">CTA Final</option>
                        </select>
                <button onclick="applyUploadedImage()" id="apply-upload-btn" style="display: none;">✅ Aplicar Upload</button>
            </div>
        </div>
    `;

    // Adicionar estilos
    const styles = document.createElement('style');
    styles.textContent = `
        #image-control-panel {
            position: fixed;
            top: 20px;
            right: 20px;
            width: 320px;
            background: rgba(20, 60, 107, 0.95);
            border: 2px solid #F5B700;
            border-radius: 12px;
            color: white;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            z-index: 10000;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0,0,0,0.3);
            max-height: 80vh;
            overflow: hidden;
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
        }
        
        .panel-content {
            padding: 16px;
            max-height: calc(80vh - 60px);
            overflow-y: auto;
            scrollbar-width: thin;
            scrollbar-color: #F5B700 rgba(255,255,255,0.1);
        }
        
        .panel-content::-webkit-scrollbar {
            width: 8px;
        }
        
        .panel-content::-webkit-scrollbar-track {
            background: rgba(255,255,255,0.1);
            border-radius: 4px;
        }
        
        .panel-content::-webkit-scrollbar-thumb {
            background: #F5B700;
            border-radius: 4px;
        }
        
        .control-section {
            margin-bottom: 16px;
            padding-bottom: 16px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .control-section:last-child {
            border-bottom: none;
            margin-bottom: 0;
        }
        
        .control-section h4 {
            margin: 0 0 8px 0;
            font-size: 12px;
            color: #F5B700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .control-section button {
            background: rgba(245, 183, 0, 0.2);
            border: 1px solid rgba(245, 183, 0, 0.4);
            color: white;
            padding: 6px 12px;
            margin: 2px;
            border-radius: 6px;
            font-size: 11px;
            cursor: pointer;
            transition: all 0.2s;
            white-space: nowrap;
        }
        
        .control-section button:hover {
            background: rgba(245, 183, 0, 0.4);
            border-color: #F5B700;
        }
        
        .control-section input,
        .control-section select {
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            color: white;
            padding: 6px 8px;
            margin: 2px;
            border-radius: 4px;
            font-size: 11px;
            width: calc(50% - 4px);
        }
        
        .control-section input::placeholder {
            color: rgba(255,255,255,0.6);
        }
        
        .upload-btn {
            background: rgba(76, 175, 80, 0.3) !important;
            border-color: rgba(76, 175, 80, 0.6) !important;
            color: #4CAF50 !important;
            font-weight: bold;
        }
        
        .upload-btn:hover {
            background: rgba(76, 175, 80, 0.5) !important;
            border-color: #4CAF50 !important;
        }
        
        #upload-preview {
            background: rgba(255,255,255,0.05);
            padding: 8px;
            border-radius: 6px;
            margin: 8px 0;
            text-align: center;
        }
        
        #apply-upload-btn {
            background: rgba(76, 175, 80, 0.4) !important;
            border-color: #4CAF50 !important;
            color: white !important;
            font-weight: bold;
        }
        
        #apply-upload-btn:hover {
            background: rgba(76, 175, 80, 0.6) !important;
        }
        
        #image-control-panel.collapsed .panel-content {
            display: none;
        }
        
        #image-control-panel.collapsed .panel-toggle {
            transform: rotate(180deg);
        }
        
        @media (max-width: 768px) {
            #image-control-panel {
                width: 300px;
                right: 10px;
            }
        }
    `;

    document.head.appendChild(styles);
    document.body.appendChild(panel);
    
    // Ativar drag and drop
    setupDragAndDrop();

    console.log('🎛️ Painel de controle de imagens criado!');
    
    // Atualizar lista de imagens personalizadas
    setTimeout(updateCustomImagesList, 100);
}

// Funções auxiliares
function toggleImagePanel() {
    const panel = document.getElementById('image-control-panel');
    panel.classList.toggle('collapsed');
}

function randomizeAllImages() {
    const sections = ['hero', 'about', 'services', 'vagas', 'cursos', 'depoimentos', 'cta'];
    sections.forEach(section => {
        ImageManager.randomizeSectionImage(section);
    });
    console.log('🎲 Todas as imagens foram aleatorizadas!');
}

function resetAllImages() {
    const sections = ['hero', 'about', 'services', 'vagas', 'cursos', 'depoimentos', 'cta'];
    sections.forEach(section => {
        ImageManager.changeSectionImage(section, 'default');
    });
    console.log('🔄 Todas as imagens foram resetadas para o padrão!');
}

function applyCustomImage() {
    const url = document.getElementById('custom-image-url').value;
    const section = document.getElementById('custom-section').value;
    
    if (url) {
        ImageManager.changeSectionImage(section, url);
        document.getElementById('custom-image-url').value = '';
    } else {
        alert('Por favor, insira uma URL válida');
    }
}

// Funções para upload de imagens
let uploadedImageData = null;

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Verificar se é uma imagem
    if (!file.type.startsWith('image/')) {
        alert('Por favor, selecione apenas arquivos de imagem (JPG, PNG, GIF, etc.)');
        return;
    }
    
    // Verificar tamanho (máximo 5MB)
    if (file.size > 5 * 1024 * 1024) {
        alert('A imagem deve ter no máximo 5MB');
        return;
    }
    
    // Ler o arquivo e criar preview
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

function applyUploadedImage() {
    if (!uploadedImageData) {
        alert('Nenhuma imagem foi carregada');
        return;
    }
    
    const section = document.getElementById('upload-section').value;
    
    // Aplicar a imagem usando o ImageManager
    const success = ImageManager.changeSectionImage(section, uploadedImageData);
    
    if (success) {
        // Limpar o upload
        document.getElementById('image-upload').value = '';
        document.getElementById('upload-preview').style.display = 'none';
        document.getElementById('apply-upload-btn').style.display = 'none';
        uploadedImageData = null;
        
        console.log(`✅ Imagem aplicada na seção ${section} com sucesso!`);
    } else {
        alert('Erro ao aplicar a imagem. Verifique o console para mais detalhes.');
    }
}

// Função para arrastar e soltar imagens
function setupDragAndDrop() {
    const panel = document.getElementById('image-control-panel');
    
    panel.addEventListener('dragover', function(e) {
        e.preventDefault();
        panel.style.borderColor = '#4CAF50';
    });
    
    panel.addEventListener('dragleave', function(e) {
        e.preventDefault();
        panel.style.borderColor = '#F5B700';
    });
    
    panel.addEventListener('drop', function(e) {
        e.preventDefault();
        panel.style.borderColor = '#F5B700';
        
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            if (file.type.startsWith('image/')) {
                // Simular o evento de upload
                const event = { target: { files: [file] } };
                handleImageUpload(event);
            } else {
                alert('Por favor, arraste apenas arquivos de imagem');
            }
        }
    });
}

// Comandos secretos para ativar o painel
document.addEventListener('keydown', function(event) {
    // F12, Ctrl+Shift+I, ou Ctrl+Shift+P (Painel)
    if (event.key === 'F12' || 
        (event.ctrlKey && event.shiftKey && event.key === 'I') ||
        (event.ctrlKey && event.shiftKey && event.key === 'P')) {
        event.preventDefault();
        console.log('🔑 Comando secreto detectado!');
        setTimeout(() => {
            if (!document.getElementById('image-control-panel')) {
                createImageControlPanel();
                console.log('✅ Painel criado via comando secreto!');
            } else {
                console.log('ℹ️ Painel já existe!');
            }
        }, 100);
    }
    
    // Comando secreto: Ctrl+Shift+M (Manager)
    if (event.ctrlKey && event.shiftKey && event.key === 'M') {
        event.preventDefault();
        console.log('🔑 Comando secreto M detectado!');
        if (typeof ImageManager !== 'undefined') {
            ImageManager.listAvailableSections();
        } else {
            console.log('❌ ImageManager não está disponível');
        }
    }
});

// Adicionar botão flutuante para ativar o painel
function createActivationButton() {
    if (document.getElementById('panel-activation-btn')) {
        return;
    }
    
    const btn = document.createElement('button');
    btn.id = 'panel-activation-btn';
    btn.innerHTML = '🎛️';
    btn.title = 'Clique para abrir o painel de controle de imagens';
    btn.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        width: 50px;
        height: 50px;
        background: #F5B700;
        border: none;
        border-radius: 50%;
        color: white;
        font-size: 20px;
        cursor: pointer;
        z-index: 9999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
    `;
    
    btn.onclick = function() {
        if (!document.getElementById('image-control-panel')) {
            createImageControlPanel();
            console.log('✅ Painel criado via botão!');
        } else {
            console.log('ℹ️ Painel já existe!');
        }
    };
    
    btn.onmouseenter = function() {
        this.style.transform = 'scale(1.1)';
        this.style.background = '#E5A800';
    };
    
    btn.onmouseleave = function() {
        this.style.transform = 'scale(1)';
        this.style.background = '#F5B700';
    };
    
    document.body.appendChild(btn);
    console.log('🎛️ Botão de ativação criado!');
}

// Botão flutuante removido - apenas comandos secretos disponíveis
// Use F12 ou Ctrl+Shift+I para ativar o painel

// Função para remover todas as imagens personalizadas
function removeAllCustomImages() {
    if (confirm('Tem certeza que deseja remover TODAS as imagens personalizadas?')) {
        try {
            localStorage.removeItem('customImages');
            updateCustomImagesList();
            console.log('🗑️ Todas as imagens personalizadas foram removidas');
            alert('Todas as imagens personalizadas foram removidas!');
        } catch (error) {
            console.error('❌ Erro ao remover imagens:', error);
            alert('Erro ao remover imagens!');
        }
    }
}

// Função para atualizar a lista de imagens personalizadas
function updateCustomImagesList() {
    const listElement = document.getElementById('custom-images-list');
    if (!listElement) return;
    
    try {
        const customImages = JSON.parse(localStorage.getItem('customImages') || '{}');
        const sections = Object.keys(customImages);
        
        if (sections.length === 0) {
            listElement.innerHTML = '<div>Nenhuma imagem personalizada salva</div>';
        } else {
            listElement.innerHTML = sections.map(section => 
                `<div style="margin: 5px 0; padding: 5px; background: rgba(255,255,255,0.1); border-radius: 4px;">
                    <strong>${section}</strong> 
                    <button onclick="removeCustomImage('${section}')" style="float: right; padding: 2px 6px; font-size: 10px; background: #ff4444; border: none; color: white; border-radius: 3px; cursor: pointer;">🗑️</button>
                </div>`
            ).join('');
        }
    } catch (error) {
        console.error('❌ Erro ao atualizar lista:', error);
        listElement.innerHTML = '<div style="color: #ff4444;">Erro ao carregar lista</div>';
    }
}

// Log de inicialização
console.log('🎛️ Painel de Controle de Imagens carregado!');
console.log('🔑 Comandos secretos disponíveis:');
console.log('   • F12 - Abrir painel');
console.log('   • Ctrl+Shift+I - Abrir painel');
console.log('   • Ctrl+Shift+P - Abrir painel');
console.log('   • Ctrl+Shift+M - Listar seções disponíveis');
console.log('💡 Use createImageControlPanel() diretamente no console se preferir');
