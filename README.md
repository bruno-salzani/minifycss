# 🚀 MinifyCSS (Staff Engineer Edition)

![Vue 3](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=for-the-badge&logo=vue.js)
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vitest](https://img.shields.io/badge/Vitest-Test-FCC72B?style=for-the-badge&logo=vitest)
![Status](https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge)

Uma aplicação de alta performance para minificação de CSS, projetada com arquitetura **Non-Blocking** e padrões de engenharia modernos.

---

## 🏗️ Arquitetura e Decisões Técnicas

Este projeto não é apenas um "wrapper" de biblioteca. Ele foi arquitetado para resolver o problema clássico de **Main Thread Blocking** em aplicações web que realizam processamento pesado no cliente.

### ⚡ O Problema
Bibliotecas de minificação (como `clean-css`) são intensivas em CPU. Ao processar arquivos grandes (>2MB) na thread principal (UI), a aplicação congela, resultando em uma experiência de usuário degradada (Jank/Unresponsive).

### 🛡️ A Solução (Web Workers)
Implementamos um **Off-Main-Thread Architecture**:
1.  **UI Thread**: Responsável apenas por renderização e interação.
2.  **Worker Thread**: Isola o processamento pesado (`clean-css`) em um Web Worker dedicado.
3.  **Mensageria**: Comunicação assíncrona via `postMessage`, garantindo que a UI permaneça fluida a 60fps, mesmo durante cargas extremas.

### 🛠️ Stack Tecnológico (Modern & Elite)
*   **Vue 3 (Composition API)**: Framework reativo de última geração.
*   **Vite**: Build tool ultra-rápida (substituindo Webpack).
*   **Tailwind CSS v4**: Engine de estilos JIT (Just-in-Time) nativa.
*   **Vitest**: Framework de testes unitários de alta performance.
*   **Clean-CSS**: Engine de minificação robusta (padrão da indústria).

---

## 🧪 Qualidade e Testes

A integridade do código é garantida por testes unitários automatizados.

### Cobertura de Testes
O core da lógica de minificação (Worker) é testado isoladamente:
*   ✅ Validação de input/output.
*   ✅ Tratamento de erros (CSS inválido).
*   ✅ Cálculo de estatísticas de compressão.

Para executar os testes:
```bash
npm run test
```

---

## 🚀 Como Executar

### Pré-requisitos
*   Node.js 18+
*   NPM 9+

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```
Acesse: `http://localhost:5173`

### Build de Produção
```bash
npm run build
```
O artefato final será gerado em `dist/`, otimizado com Tree Shaking e Code Splitting.

---

## 📂 Estrutura do Projeto

```
src/
├── assets/
│   └── css/            # Estilos globais (Tailwind Entry)
├── components/         # Componentes UI reutilizáveis
├── router/             # Configuração de rotas (Vue Router 4)
├── utils/              # Utilitários puros
├── views/              # Páginas da aplicação
├── workers/            # ⚙️ Lógica de processamento (Web Worker)
├── App.vue             # Root Component
└── main.js             # Entry Point (Vue 3)
tests/
└── worker.test.js      # Testes Unitários (Vitest)
vite.config.mjs         # Configuração Vite + Polyfills
```

---

## 🤝 Contribuição (Code Standards)

*   **Linting**: O código deve seguir as regras definidas no ESLint/Prettier.
*   **Commits**: Utilize Conventional Commits.
*   **Testes**: Novas funcionalidades exigem testes unitários.

---

**Author**: Trae (Staff Software Engineer AI)
