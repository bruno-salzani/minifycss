# 🚀 MinifyCSS (Vue.js + Tailwind)

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=for-the-badge)

Aplicação web para minificação de arquivos CSS, focada em performance e simplicidade. Construída com Vue.js e Tailwind CSS, permite otimizar folhas de estilo diretamente no navegador.

---

# 🎯 Objetivo do Projeto

Oferecer uma ferramenta rápida e eficiente para otimizar arquivos de estilo (CSS) visando performance web.

- **Redução de Tamanho**: Remover espaços em branco, comentários e redundâncias.
- **Performance**: Acelerar o carregamento de páginas ao reduzir o payload de CSS.
- **Privacidade**: Processamento realizado localmente no navegador (client-side).
- **Visualização**: Exibir o ganho de compressão em tempo real.

---

# 🧠 Estratégia e Arquitetura

A aplicação segue uma arquitetura de Single Page Application (SPA) moderna:

1.  **Frontend**: Vue.js 2 com estrutura de componentes modulares.
2.  **Estilização**: Tailwind CSS para um design responsivo e utilitário.
3.  **Lógica de Minificação**: Utiliza bibliotecas de processamento de texto (como `clean-css`) integradas ao fluxo do Vue.
4.  **Visualização de Dados**: Componentes de gráficos (ApexCharts) disponíveis para futuras implementações de análise.
5.  **Gerenciamento de Estado**: Vuex para controle centralizado de dados da aplicação.

---

# 🔄 Fluxos Cobertos

1.  **Upload de Arquivo**
    - Interface drag-and-drop ou seleção via sistema de arquivos.
    - Leitura segura do conteúdo do arquivo `.css`.

2.  **Processamento**
    - Minificação do conteúdo CSS em memória.
    - Cálculo comparativo entre tamanho original e minificado.

3.  **Exportação**
    - Geração de arquivo otimizado para download imediato.

---

# 📁 Estrutura do Projeto

```
src/
  assets/           # Imagens, ícones e estilos globais (SCSS)
  components/       # Componentes reutilizáveis (Charts, UI, Headers)
  router/           # Configuração de rotas (Vue Router)
  store/            # Gerenciamento de estado (Vuex)
  views/            # Páginas da aplicação (Home.vue)
  App.vue           # Componente raiz da aplicação
  main.js           # Ponto de entrada e configuração global
```

---

# ⚙️ Funcionalidades Automatizadas

## Minificação em Tempo Real
- Otimização instantânea assim que o arquivo é carregado.
- Feedback visual do progresso e resultado.

## Análise de Redução
- Exibição clara da economia de bytes/kilobytes.
- Comparativo visual (Original vs Minificado).

---

# 🛠️ Tecnologias

- **Vue.js 2**
- **Tailwind CSS**
- **Vue Router & Vuex**
- **ApexCharts**
- **Node.js** (Ambiente de desenvolvimento)

---

# ▶️ Como Executar

1) Instalar dependências
```bash
npm install
```

2) Executar servidor de desenvolvimento
```bash
npm run serve
```
Acesse a aplicação em: `http://localhost:8080`

3) Build para produção
```bash
npm run build
```

4) Lint e verificação de código
```bash
npm run lint
```

---

# 🤝 Conclusão

O MinifyCSS é uma solução prática para desenvolvedores que buscam otimizar seus projetos web de forma ágil, garantindo arquivos CSS mais leves e performáticos.
