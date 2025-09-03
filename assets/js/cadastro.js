/* ====== SISTEMA DE CADASTRO 50+ EMPREGOS ====== */

class CadastroSystem {
  constructor() {
    this.currentStep = 1;
    this.totalSteps = 1; // Desktop é single-step, mobile pode ser wizard
    this.formData = {};
    this.init();
  }

  init() {
    this.createModal();
    this.bindEvents();
    this.setupMobileDetection();
  }

  createModal() {
    const modalHTML = `
      <div id="modal-cadastro" class="modal-overlay">
        <div class="modal-cadastro">
          <div class="modal-header">
            <h2 class="modal-title">Cadastre-se na 50+ Empregos</h2>
            <button class="modal-close" onclick="cadastroSystem.closeModal()">&times;</button>
          </div>
          
          <div class="modal-body">
            <!-- Wizard steps (apenas mobile) -->
            <div class="wizard-steps">
              <div class="step-indicator">
                <div class="step-dot active">1</div>
                <div class="step-line"></div>
                <div class="step-dot">2</div>
                <div class="step-line"></div>
                <div class="step-dot">3</div>
              </div>
            </div>

            <form id="cadastro-form" novalidate>
              <!-- Seção 1: Dados Básicos -->
              <div class="form-section" data-step="1">
                <h3 class="section-title">📝 Dados Básicos</h3>
                
                <div class="form-group">
                  <label class="form-label" for="nome">Nome completo *</label>
                  <input type="text" id="nome" name="nome" class="form-input" required 
                         placeholder="Digite seu nome completo">
                </div>
                
                <div class="form-group">
                  <label class="form-label" for="idade">Idade *</label>
                  <input type="number" id="idade" name="idade" class="form-input" required 
                         min="50" max="80" placeholder="Sua idade">
                </div>
                
                <div class="form-group">
                  <label class="form-label" for="cidade">Cidade/Estado *</label>
                  <input type="text" id="cidade" name="cidade" class="form-input" required 
                         placeholder="Ex: São Paulo/SP">
                </div>
                
                <div class="form-group">
                  <label class="form-label" for="email">E-mail *</label>
                  <input type="email" id="email" name="email" class="form-input" required 
                         placeholder="seu@email.com">
                </div>
                
                <div class="form-group">
                  <label class="form-label" for="whatsapp">WhatsApp</label>
                  <input type="tel" id="whatsapp" name="whatsapp" class="form-input" 
                         placeholder="(11) 99999-9999">
                </div>
              </div>

              <!-- Seção 2: Situação Profissional -->
              <div class="form-section" data-step="2">
                <h3 class="section-title">💼 Situação Profissional Atual</h3>
                
                <div class="radio-group">
                  <label class="radio-item">
                    <input type="radio" name="situacao" value="clt" required>
                    <span>👔 Trabalhando com carteira assinada</span>
                  </label>
                  <label class="radio-item">
                    <input type="radio" name="situacao" value="autonomo" required>
                    <span>🔧 Autônomo / informal</span>
                  </label>
                  <label class="radio-item">
                    <input type="radio" name="situacao" value="desempregado" required>
                    <span>🔍 Desempregado</span>
                  </label>
                  <label class="radio-item">
                    <input type="radio" name="situacao" value="aposentado" required>
                    <span>🎯 Aposentado, mas quero voltar ao mercado</span>
                  </label>
                  <label class="radio-item">
                    <input type="radio" name="situacao" value="empreendedor" required>
                    <span>🚀 Empreendedor</span>
                  </label>
                </div>
              </div>

              <!-- Seção 3: Áreas de Interesse -->
              <div class="form-section" data-step="3">
                <h3 class="section-title">🎯 Áreas de Interesse</h3>
                <p style="color: #64748B; font-size: 14px; margin-bottom: 16px;">
                  Selecione uma ou mais áreas de seu interesse:
                </p>
                
                <div class="chips-container">
                  <label class="chip">
                    <input type="checkbox" name="areas" value="administrativo">
                    <span>📋 Administrativo</span>
                  </label>
                  <label class="chip">
                    <input type="checkbox" name="areas" value="atendimento">
                    <span>🎧 Atendimento/Recepção</span>
                  </label>
                  <label class="chip">
                    <input type="checkbox" name="areas" value="logistica">
                    <span>📦 Logística/Operacional</span>
                  </label>
                  <label class="chip">
                    <input type="checkbox" name="areas" value="saude">
                    <span>🏥 Saúde e Bem-estar</span>
                  </label>
                  <label class="chip">
                    <input type="checkbox" name="areas" value="vendas">
                    <span>💰 Vendas/Comercial</span>
                  </label>
                  <label class="chip">
                    <input type="checkbox" name="areas" value="servicos">
                    <span>🔧 Serviços Gerais</span>
                  </label>
                  <label class="chip">
                    <input type="checkbox" name="areas" value="tecnologia">
                    <span>💻 Tecnologia/Informática</span>
                  </label>
                </div>
                
                <div class="form-group" style="margin-top: 16px;">
                  <label class="form-label" for="outras-areas">Outras áreas:</label>
                  <input type="text" id="outras-areas" name="outras-areas" class="form-input" 
                         placeholder="Especifique outras áreas de interesse">
                </div>
              </div>

              <!-- Seção 4: Preferências -->
              <div class="form-section" data-step="4">
                <h3 class="section-title">⚙️ Preferências de Trabalho</h3>
                
                <div class="form-group">
                  <label class="form-label">Modalidade de trabalho preferida:</label>
                  <div class="radio-group">
                    <label class="radio-item">
                      <input type="radio" name="modalidade" value="presencial" required>
                      <span>🏢 Presencial</span>
                    </label>
                    <label class="radio-item">
                      <input type="radio" name="modalidade" value="hibrido" required>
                      <span>🔄 Híbrido</span>
                    </label>
                    <label class="radio-item">
                      <input type="radio" name="modalidade" value="remoto" required>
                      <span>🏠 Remoto</span>
                    </label>
                    <label class="radio-item">
                      <input type="radio" name="modalidade" value="indiferente" required>
                      <span>✨ Indiferente</span>
                    </label>
                  </div>
                </div>
                
                <div class="form-group">
                  <label class="form-label">Disponibilidade:</label>
                  <div class="radio-group">
                    <label class="radio-item">
                      <input type="radio" name="disponibilidade" value="integral" required>
                      <span>⏰ Período integral</span>
                    </label>
                    <label class="radio-item">
                      <input type="radio" name="disponibilidade" value="meio-periodo" required>
                      <span>🕒 Meio período</span>
                    </label>
                    <label class="radio-item">
                      <input type="radio" name="disponibilidade" value="freelancer" required>
                      <span>📋 Freelancer/por projeto</span>
                    </label>
                  </div>
                </div>
              </div>

              <!-- Seção 5: Upload CV -->
              <div class="form-section" data-step="5">
                <h3 class="section-title">📎 Currículo (Opcional)</h3>
                
                <div class="upload-area" onclick="document.getElementById('cv-upload').click()">
                  <div class="upload-icon">📄</div>
                  <div class="upload-text">Clique para enviar seu currículo</div>
                  <div class="upload-hint">PDF ou DOC, máximo 5MB</div>
                </div>
                
                <input type="file" id="cv-upload" name="cv" class="file-input" 
                       accept=".pdf,.doc,.docx" onchange="cadastroSystem.handleFileUpload(event)">
                
                <div id="uploaded-file-info"></div>
              </div>

              <!-- Botões de ação -->
              <div class="form-actions">
                <button type="button" class="btn-cadastro btn-secondary-cadastro" 
                        onclick="cadastroSystem.closeModal()">
                  Cancelar
                </button>
                <button type="submit" class="btn-cadastro btn-primary-cadastro" id="submit-btn">
                  🚀 Finalizar Cadastro
                </button>
              </div>
            </form>

            <!-- Mensagem de sucesso (inicialmente oculta) -->
            <div id="success-message" class="success-message" style="display: none;">
              <div class="success-icon">✅</div>
              <h3 class="success-title">Cadastro realizado com sucesso!</h3>
              <p class="success-text">
                Bem-vindo(a) à 50+ Empregos! Seu perfil foi criado e você já pode começar a 
                explorar as vagas disponíveis que valorizam sua experiência.
              </p>
              <button class="btn-cadastro btn-primary-cadastro" onclick="cadastroSystem.redirectToJobs()">
                🔍 Ver Vagas Disponíveis
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  bindEvents() {
    // Bind nos botões de cadastro
    document.querySelectorAll('[href="#cadastro"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openModal();
      });
    });

    // Radio button selection styling
    document.addEventListener('change', (e) => {
      if (e.target.type === 'radio') {
        // Remove selected class from siblings
        const name = e.target.name;
        document.querySelectorAll(`input[name="${name}"]`).forEach(radio => {
          radio.closest('.radio-item').classList.remove('selected');
        });
        // Add selected class to current
        e.target.closest('.radio-item').classList.add('selected');
      }
    });

    // Checkbox chips styling
    document.addEventListener('change', (e) => {
      if (e.target.type === 'checkbox' && e.target.closest('.chip')) {
        const chip = e.target.closest('.chip');
        chip.classList.toggle('selected', e.target.checked);
      }
    });

    // Form submission
    document.addEventListener('submit', (e) => {
      if (e.target.id === 'cadastro-form') {
        e.preventDefault();
        this.submitForm();
      }
    });

    // Modal close on overlay click
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-overlay')) {
        this.closeModal();
      }
    });

    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && document.getElementById('modal-cadastro').classList.contains('active')) {
        this.closeModal();
      }
    });

    // Phone number formatting
    document.addEventListener('input', (e) => {
      if (e.target.id === 'whatsapp') {
        this.formatPhoneNumber(e.target);
      }
    });
  }

  setupMobileDetection() {
    this.isMobile = window.innerWidth <= 768;
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 768;
    });
  }

  openModal() {
    const modal = document.getElementById('modal-cadastro');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Focus no primeiro input
    setTimeout(() => {
      document.getElementById('nome').focus();
    }, 300);
  }

  closeModal() {
    const modal = document.getElementById('modal-cadastro');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Reset form
    document.getElementById('cadastro-form').reset();
    this.clearSelections();
    this.hideSuccessMessage();
  }

  clearSelections() {
    // Clear radio selections
    document.querySelectorAll('.radio-item').forEach(item => {
      item.classList.remove('selected');
    });
    
    // Clear chip selections
    document.querySelectorAll('.chip').forEach(chip => {
      chip.classList.remove('selected');
    });
    
    // Clear file upload
    document.getElementById('uploaded-file-info').innerHTML = '';
  }

  formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length <= 11) {
      value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
      value = value.replace(/(\d{2})(\d{4})/, '($1) $2');
      value = value.replace(/(\d{2})/, '($1');
    }
    
    input.value = value;
  }

  handleFileUpload(event) {
    const file = event.target.files[0];
    const fileInfo = document.getElementById('uploaded-file-info');
    
    if (file) {
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        alert('Arquivo muito grande. Máximo 5MB permitido.');
        event.target.value = '';
        return;
      }
      
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        alert('Tipo de arquivo não permitido. Use PDF ou DOC.');
        event.target.value = '';
        return;
      }
      
      // Show uploaded file info
      const fileSize = (file.size / 1024 / 1024).toFixed(2);
      fileInfo.innerHTML = `
        <div class="uploaded-file">
          <div class="file-icon">📄</div>
          <div class="file-info">
            <div class="file-name">${file.name}</div>
            <div class="file-size">${fileSize} MB</div>
          </div>
          <button type="button" class="file-remove" onclick="cadastroSystem.removeFile()">✕</button>
        </div>
      `;
    }
  }

  removeFile() {
    document.getElementById('cv-upload').value = '';
    document.getElementById('uploaded-file-info').innerHTML = '';
  }

  validateForm() {
    const form = document.getElementById('cadastro-form');
    const formData = new FormData(form);
    
    // Campos obrigatórios
    const required = ['nome', 'idade', 'cidade', 'email', 'situacao', 'modalidade', 'disponibilidade'];
    
    for (let field of required) {
      if (!formData.get(field)) {
        const element = document.querySelector(`[name="${field}"]`);
        element.focus();
        
        let fieldName = {
          'nome': 'Nome completo',
          'idade': 'Idade',
          'cidade': 'Cidade/Estado',
          'email': 'E-mail',
          'situacao': 'Situação profissional',
          'modalidade': 'Modalidade de trabalho',
          'disponibilidade': 'Disponibilidade'
        }[field];
        
        alert(`Por favor, preencha o campo: ${fieldName}`);
        return false;
      }
    }
    
    // Validar idade
    const idade = parseInt(formData.get('idade'));
    if (idade < 50 || idade > 80) {
      alert('A idade deve estar entre 50 e 80 anos.');
      document.getElementById('idade').focus();
      return false;
    }
    
    // Validar email
    const email = formData.get('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, insira um e-mail válido.');
      document.getElementById('email').focus();
      return false;
    }
    
    // Pelo menos uma área de interesse deve ser selecionada
    const areas = formData.getAll('areas');
    const outrasAreas = formData.get('outras-areas');
    if (areas.length === 0 && !outrasAreas) {
      alert('Por favor, selecione pelo menos uma área de interesse ou especifique outras áreas.');
      document.querySelector('input[name="areas"]').focus();
      return false;
    }
    
    return true;
  }

  async submitForm() {
    if (!this.validateForm()) {
      return;
    }
    
    const submitBtn = document.getElementById('submit-btn');
    const originalText = submitBtn.innerHTML;
    
    // Show loading
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<div class="spinner"></div> Processando...';
    
    try {
      // Collect form data
      const form = document.getElementById('cadastro-form');
      const formData = new FormData(form);
      
      // Convert to object
      const data = {
        nome: formData.get('nome'),
        idade: formData.get('idade'),
        cidade: formData.get('cidade'),
        email: formData.get('email'),
        whatsapp: formData.get('whatsapp') || null,
        situacao: formData.get('situacao'),
        areas: formData.getAll('areas'),
        outrasAreas: formData.get('outras-areas') || null,
        modalidade: formData.get('modalidade'),
        disponibilidade: formData.get('disponibilidade'),
        cv: formData.get('cv') || null,
        timestamp: new Date().toISOString()
      };
      
      // Simulate API call
      await this.sendToAPI(data);
      
      // Show success
      this.showSuccessMessage();
      
    } catch (error) {
      alert('Erro ao enviar cadastro. Tente novamente.');
      console.error('Erro no cadastro:', error);
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  }

  async sendToAPI(data) {
    // Simular envio para API
    // Em produção, substituir por chamada real
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Dados do cadastro:', data);
        
        // Salvar no localStorage temporariamente
        const cadastros = JSON.parse(localStorage.getItem('cadastros-50plus') || '[]');
        cadastros.push(data);
        localStorage.setItem('cadastros-50plus', JSON.stringify(cadastros));
        
        resolve();
      }, 2000);
    });
  }

  showSuccessMessage() {
    document.getElementById('cadastro-form').style.display = 'none';
    document.getElementById('success-message').style.display = 'block';
    document.querySelector('.modal-title').textContent = 'Cadastro Concluído!';
  }

  hideSuccessMessage() {
    document.getElementById('cadastro-form').style.display = 'block';
    document.getElementById('success-message').style.display = 'none';
    document.querySelector('.modal-title').textContent = 'Cadastre-se na 50+ Empregos';
  }

  redirectToJobs() {
    this.closeModal();
    // Scroll para seção de vagas
    const vagasSection = document.getElementById('vagas') || document.querySelector('.featured-jobs');
    if (vagasSection) {
      vagasSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// Initialize quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  window.cadastroSystem = new CadastroSystem();
});

// Export para uso global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CadastroSystem;
}





