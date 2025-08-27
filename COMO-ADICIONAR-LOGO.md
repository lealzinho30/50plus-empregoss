# Como Adicionar a Logotipo Exata

## Método 1: Upload direto no GitHub (Mais fácil)

1. **Acesse seu repositório no GitHub:**
   - Vá para: https://github.com/lealzinho30/50plus-empregoss

2. **Navegue até a pasta assets/img:**
   - Clique em `assets` → `img`

3. **Faça upload da sua imagem:**
   - Clique em "Add file" → "Upload files"
   - Arraste sua imagem ou clique "choose your files"
   - **Renomeie para:** `logo-50plus-empregos.png`
   - Adicione commit message: "Adicionar logotipo original"
   - Clique "Commit changes"

## Método 2: Substituir localmente

1. **Salve sua imagem como:**
   - Nome: `logo-50plus-empregos.png`
   - Local: `50plus-empregos-novo/assets/img/`

2. **Atualize o HTML para PNG:**
   - Mude `.svg` para `.png` nos caminhos

3. **Faça o deploy:**
   ```bash
   git add assets/img/logo-50plus-empregos.png
   git commit -m "Adicionar logotipo original"
   git push origin master
   ```

## Caminhos que devem ser atualizados:

### Header:
```html
<img src="/50plus-empregoss/assets/img/logo-50plus-empregos.png" alt="50+ Empregos" class="nav-logo-img" width="160" height="48">
```

### Footer:
```html
<img src="/50plus-empregoss/assets/img/logo-50plus-empregos.png" alt="50+ Empregos" class="footer-logo-img" width="160" height="48">
```

## ✅ Vantagens do PNG:
- Qualidade exata da sua imagem
- Sem interpretação ou recriação
- Cores fiéis ao original
- Funciona perfeitamente no GitHub Pages


