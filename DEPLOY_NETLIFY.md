# Deploy na Netlify - Marcelo Camargo Advocacia

## Arquivos Prontos para Deploy

O site foi compilado e está pronto para deploy na Netlify! Todos os arquivos estáticos estão na pasta **`dist/public`**.

## Opções de Deploy

### Opção 1: Deploy via Interface da Netlify (Mais Fácil)

1. Acesse [netlify.com](https://www.netlify.com) e faça login
2. Clique em "Add new site" → "Deploy manually"
3. **Arraste a pasta `dist/public` inteira** para a área de upload
4. Aguarde o deploy finalizar
5. Seu site estará no ar com um domínio gratuito netlify.app!

### Opção 2: Deploy via Netlify CLI

```bash
# Instalar Netlify CLI (apenas uma vez)
npm install -g netlify-cli

# Fazer login
netlify login

# Deploy
netlify deploy --prod --dir=dist/public
```

### Opção 3: Deploy via GitHub (Deploy Contínuo)

1. Suba este projeto para um repositório GitHub
2. Conecte o repositório na Netlify
3. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/public`

## Arquivos Incluídos no Build

- ✅ `index.html` - Página principal
- ✅ `assets/` - CSS, JavaScript e imagens otimizadas
- ✅ `_redirects` - Configuração de rotas para SPA
- ✅ `netlify.toml` - Configuração do Netlify

## Configurar Domínio Personalizado

Após o deploy, você pode configurar seu domínio personalizado:

1. Acesse o painel do seu site na Netlify
2. Vá em "Domain settings"
3. Clique em "Add custom domain"
4. Siga as instruções para configurar o DNS

## Reconstruir o Site

Se fizer alterações no código, execute:

```bash
npm run build
```

E faça o deploy novamente da pasta `dist/public`.

---

**Pronto!** Seu site profissional está preparado para ir ao ar! 🚀
