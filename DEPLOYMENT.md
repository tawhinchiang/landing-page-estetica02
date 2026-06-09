# 🚀 Guia de Deployment - Clínica Zafier Landing Page

Instruções completas para colocar sua landing page online.

## 📋 Pré-requisitos

- [ ] Domínio registrado (exemplo: clinicazafier.com.br)
- [ ] Hosting contratado
- [ ] Acesso FTP/SFTP ao servidor
- [ ] Email registrado (para SSL, formulários, etc)

## 🌐 Opção 1: Hostinger (Recomendado - Fácil e Barato)

### 1. Contrate o Plano
1. Acesse [hostinger.com.br](https://hostinger.com.br)
2. Escolha um plano (Premium ou Superior)
3. Complete a compra

### 2. Configure o Domínio
1. No painel Hostinger, acesse **Domínios**
2. Conecte seu domínio à conta
3. Aguarde a propagação (até 24h)

### 3. Upload dos Arquivos
1. Acesse **Gerenciador de Arquivos** no painel
2. Navegue até a pasta **public_html**
3. Faça upload dos arquivos:
   - index.html
   - styles.css
   - script.js
   - config.json
   - README.md

### 4. Habilitar HTTPS
1. No painel, acesse **SSL/TLS**
2. Clique em **Gerenciar**
3. Ative o **Certificado Gratuito Let's Encrypt**

## 🌐 Opção 2: Vercel (Grátis - Muito Simples)

### 1. Crie uma Conta
1. Acesse [vercel.com](https://vercel.com)
2. Clique em **Sign Up**
3. Complete o cadastro com GitHub/GitLab/Google

### 2. Prepare um Repositório Git
```bash
# Na pasta do projeto
git init
git add .
git commit -m "Initial commit - Clínica Zafier Landing Page"
git remote add origin https://github.com/seu-usuario/clinicaiesa.git
git push -u origin main
```

### 3. Faça Deploy
1. No Vercel, clique **New Project**
2. Selecione seu repositório
3. Clique **Deploy**
4. Aguarde (2-3 minutos)

### 4. Configure Domínio Personalizado
1. Acesse **Settings** > **Domains**
2. Adicione seu domínio
3. Configure os registros DNS conforme indicado

## 🌐 Opção 3: GitHub Pages (Grátis)

### 1. Crie um Repositório
1. Acesse [github.com](https://github.com)
2. Clique **New Repository**
3. Nome: `clinicaiesa` ou seu-usuario.github.io
4. Clique **Create Repository**

### 2. Faça Upload dos Arquivos
```bash
cd sua-pasta-local
git init
git add .
git commit -m "Clínica Zafier Landing Page"
git remote add origin https://github.com/seu-usuario/clinicaiesa.git
git branch -M main
git push -u origin main
```

### 3. Ative GitHub Pages
1. Na página do repositório, clique **Settings**
2. Procure **Pages** na barra lateral esquerda
3. Em **Source**, selecione **main branch**
4. Clique **Save**
5. Aguarde o deployment (2-5 minutos)

Sua página estará em: `seu-usuario.github.io/clinicaiesa`

## 📱 Pós-Deployment - Checklist

- [ ] Testar site em desktop, tablet e mobile
- [ ] Verificar todos os links
- [ ] Testar botão WhatsApp
- [ ] Verificar velocidade (Google PageSpeed Insights)
- [ ] Configurar Google Analytics
- [ ] Configurar Google Search Console
- [ ] Implementar favicon
- [ ] Adicionar sitemap.xml
- [ ] Testar formulários (se houver)
- [ ] Revisar SEO

## 🔍 Verificação de Performance

### Google PageSpeed Insights
1. Acesse [pagespeed.web.dev](https://pagespeed.web.dev)
2. Digite sua URL
3. Analise os resultados
4. Implemente melhorias sugeridas

### Lighthouse (Chrome DevTools)
1. Abra seu site no Chrome
2. Pressione `F12` → **Lighthouse**
3. Clique **Analyze Page Load**
4. Revise relatório

## 📊 Google Analytics

### Configurar Rastreamento
1. Acesse [analytics.google.com](https://analytics.google.com)
2. Clique **Começar a medir**
3. Preencha os dados:
   - Nome: Clínica Zafier
   - URL: seu-dominio.com.br
4. Copie o código de rastreamento

### Adicionar ao Site
No arquivo `index.html`, adicione antes de `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
</script>
```

## 🔐 Google Search Console

1. Acesse [search.google.com/search-console](https://search.google.com/search-console)
2. Clique **Adicionar propriedade**
3. Digite sua URL completa
4. Verifique a propriedade (via DNS)
5. Envie seu `sitemap.xml`

## 📧 Formulário de Contato (Opcional)

Para adicionar formulário que envia email:

### Opção A: Formspree (Simples)
1. Acesse [formspree.io](https://formspree.io)
2. Registre-se
3. Crie novo formulário
4. Copie o código HTML

### Opção B: Netlify Forms (Integrado)
1. Faça deploy no Netlify
2. Adicione `netlify` atributo ao `<form>`
3. Configure notificações por email

## 💾 Fazer Backup

Sempre mantenha backup da landing page:

```bash
# Crie um backup local
cp -r clinicaiesa clinicaiesa-backup

# Ou use Git (recomendado)
git clone seu-repositorio backup-clinicaiesa
```

## 🆘 Troubleshooting

### Site não aparece após deploy
- [ ] Verificar se arquivos foram uploadados
- [ ] Limpar cache do navegador (Ctrl+Shift+Delete)
- [ ] Verificar permissões de arquivo (755 para pastas, 644 para arquivos)
- [ ] Aguardar propagação de DNS (até 24h)

### WhatsApp não funciona
- [ ] Verificar número no formato correto
- [ ] Testar em outro navegador
- [ ] Remover caracteres especiais (só números)

### Imagens não aparecem
- [ ] Verificar caminho relativo das imagens
- [ ] Garantir extensão correta (.jpg, .png, etc)
- [ ] Usar URLs completas se em servidor diferente

### Página lenta
- [ ] Otimizar imagens (TinyPNG.com)
- [ ] Minificar CSS e JS
- [ ] Usar CDN para imagens (Cloudflare)
- [ ] Habilitar gzip no servidor

## 📞 Suporte Técnico

Se precisar de ajuda:
- Hostinger: chat no painel de controle
- Vercel: documentação e comunidade
- GitHub: issues do repositório

---

**Dica**: Revise a página em produção regularmente e mantenha conteúdo atualizado!
