# Clínica Essenza - Landing Page

Landing page profissional para Clínica Essenza - Harmonização Facial com equipe especializada em Araguaína.

## 📋 Descrição

Landing page moderna e responsiva desenvolvida para a Clínica Essenza, especializada em harmonização facial. O design é inspirado em padrões de alta conversão do mercado de estética, com foco em experiência do usuário e otimização para dispositivos móveis.

## 🎨 Recursos

✅ **Design Responsivo** - Funciona perfeitamente em desktop, tablet e mobile  
✅ **Moderno e Profissional** - Padrão premium para clínicas de estética  
✅ **SEO Otimizado** - Meta tags e estrutura semântica  
✅ **Performance** - Carregamento rápido com imagens otimizadas  
✅ **Interativo** - Animações suaves e navegação fluida  
✅ **WhatsApp Integrado** - Botões para contato direto via WhatsApp  
✅ **Acessível** - Cumprimento de padrões WCAG  

## 📁 Estrutura de Arquivos

```
clinicaessenza/
├── index.html          # Página principal
├── styles.css          # Estilos e layout responsivo
├── script.js           # Interatividade e animações
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Abrir Diretamente
1. Clique duplo em `index.html`
2. A página abrirá no navegador padrão

### Opção 2: Com Servidor Local (Recomendado)
```bash
# Python 3
python -m http.server 8000

# Node.js (com http-server)
npx http-server

# PHP
php -S localhost:8000
```

Acesse em: `http://localhost:8000`

## 🎯 Seções Principais

1. **Navegação** - Menu flutuante com links para seções
2. **Hero** - Imagem de destaque com chamada à ação
3. **Benefícios** - 4 diferenciais principais
4. **Sobre** - Informações sobre a clínica e equipe técnica
5. **Procedimentos** - Grid com 6 serviços principais
6. **Como Funciona** - Timeline do atendimento
7. **Depoimentos** - 4 testimoniais de pacientes
8. **Diferenciais** - 6 pontos de excelência
9. **CTA** - Chamada à ação final
10. **Contato** - Informações de contato
11. **Footer** - Rodapé com links

## 🔧 Personalização

### Alterar Número de WhatsApp
Edite o arquivo `script.js` (linha ~35):
```javascript
const whatsappNumber = '5563992014547'; // Coloque seu número aqui
```

### Alterar Cores
Edite o arquivo `styles.css` (variáveis no topo):
```css
:root {
    --primary-color: #d4a574;      /* Cor principal (dourado)*/
    --secondary-color: #2c3e50;    /* Cor secundária (azul escuro) */
    --accent-color: #e8c5a0;       /* Cor de destaque */
    /* ... outras cores */
}
```

### Alterar Imagens
As principais imagens estão em `assets/` e `assets/carrossel/`. Para trocar por novas imagens locais:
1. Substitua o caminho em `data-srcs="..."` ou `<img src="...">`
2. Coloque as imagens na pasta do projeto

Exemplo:
```html
<!-- De: -->
<img src="https://images.unsplash.com/..." alt="...">

<!-- Para: -->
<img src="images/minha-imagem.jpg" alt="...">
```

### Adicionar Depoimentos
No HTML, procure pela seção `.testimonials` e adicione novo card:
```html
<div class="testimonial-card">
    <div class="testimonial-stars">★★★★★</div>
    <p class="testimonial-text">"Seu depoimento aqui..."</p>
    <p class="testimonial-author">— Nome do Paciente</p>
</div>
```

### Alterar Endereço e Informações
Edite a seção `#contato` no HTML com seus dados reais:
```html
<a href="https://wa.me/SEU_NUMERO">SEU NÚMERO</a>
<p>Seu Endereço - Cidade</p>
```

## 📱 Responsividade

- **Desktop**: Layout completo com 2 colunas
- **Tablet**: Grid adaptativo com 2 colunas
- **Mobile**: Layout em coluna única (max-width: 768px)

## ⚙️ Funcionalidades JavaScript

- ✅ Menu hamburger responsivo
- ✅ Scroll suave para âncoras
- ✅ Animações ao scroll (fade-in)
- ✅ Integração com WhatsApp
- ✅ Navbar com efeito shadow ao scroll
- ✅ Links ativos dinamicamente
- ✅ Lazy loading de imagens (preparado)

## 📊 SEO Básico

- Meta description configurada
- Headings hierárquicos (H1, H2, H3)
- Alt text em imagens
- URLs amigáveis com IDs
- Schema markup pronto para expansão

## 🎯 Otimizações de Performance

- CSS minificável
- JavaScript sem dependências
- Imagens em formato otimizado (Unsplash)
- Lazy loading preparado
- Font system nativa

## 🔗 Links Úteis

- [Unsplash - Imagens Gratuitas](https://unsplash.com)
- [Google Fonts](https://fonts.google.com)
- [Validador HTML W3C](https://validator.w3.org)
- [Google PageSpeed Insights](https://pagespeed.web.dev)

## 📝 Próximos Passos Recomendados

1. ✅ Substituir número de WhatsApp
2. ✅ Ajustar nome e identidade da clínica
3. ✅ Inserir fotos genéricas ou reais da clínica e equipe
4. ✅ Adicionar depoimentos reais de pacientes
5. ✅ Integrar Google Analytics
6. ✅ Configurar Google Search Console
7. ✅ Testar em diferentes dispositivos
8. ✅ Implementar formulário de contato
9. ✅ Adicionar política de privacidade
10. ✅ Fazer deploy em servidor

## 📧 Suporte

Para dúvidas sobre personalização, consulte os comentários no código ou revise as seções acima.

## 📄 Licença

Esta landing page foi criada para uso exclusivo da Clínica Essenza.

---

**Versão**: 1.0  
**Última Atualização**: 2024  
**Criado em**: VS Code
