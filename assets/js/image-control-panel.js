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
        </div>
    `;

    // Adicionar estilos
    const styles = document.createElement('style');
    styles.textContent = `
        #image-control-panel {
            position: fixed;
            top: 20px;
            right: 20px;
            width: 300px;
            background: rgba(20, 60, 107, 0.95);
            border: 2px solid #F5B700;
            border-radius: 12px;
            color: white;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            z-index: 10000;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        
        .panel-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 16px;
            background: rgba(245, 183, 0, 0.2);
            border-radius: 10px 10px 0 0;
            border-bottom: 1px solid rgba(245, 183, 0, 0.3);
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
            max-height: 400px;
            overflow-y: auto;
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
        
        #image-control-panel.collapsed .panel-content {
            display: none;
        }
        
        #image-control-panel.collapsed .panel-toggle {
            transform: rotate(180deg);
        }
        
        @media (max-width: 768px) {
            #image-control-panel {
                width: 280px;
                right: 10px;
            }
        }
    `;

    document.head.appendChild(styles);
    document.body.appendChild(panel);

    console.log('🎛️ Painel de controle de imagens criado!');
}

// Funções auxiliares
function toggleImagePanel() {
    const panel = document.getElementById('image-control-panel');
    panel.classList.toggle('collapsed');
}

function randomizeAllImages() {
    const sections = ['hero', 'about', 'services', 'vagas'];
    sections.forEach(section => {
        ImageManager.randomizeSectionImage(section);
    });
    console.log('🎲 Todas as imagens foram aleatorizadas!');
}

function resetAllImages() {
    const sections = ['hero', 'about', 'services', 'vagas'];
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

// Auto-inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    // Aguardar o ImageManager carregar
    setTimeout(() => {
        if (window.ImageManager) {
            createImageControlPanel();
        } else {
            console.log('⏳ Aguardando ImageManager carregar...');
            setTimeout(createImageControlPanel, 1000);
        }
    }, 500);
});

// Log de inicialização
console.log('🎛️ Painel de Controle de Imagens carregado!');
console.log('💡 Use createImageControlPanel() para mostrar o painel');
console.log('💡 Use toggleImagePanel() para expandir/colapsar');
