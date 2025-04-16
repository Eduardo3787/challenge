<h1>Challenge🚀</h1> 
<p>Este projeto é uma SPA construída com Quasar 2 e Vue 3 (Composition API), utilizando Pinia para gerenciamento de estado, Axios para consumir a API do GIPHY, LocalStorage para persistência de dados e Tailwind CSS para estilização.</p>
## 🛠️ Ferramentas e Dependências
+ Quasar 2: Framework para construção de SPAs.
+ Vue 3: Biblioteca para interfaces de usuário.
+ Pinia: Gerenciamento de estado global (substitui o Vuex).
+ Axios: Cliente HTTP para acessar a API do GIPHY.
+ Tailwind CSS: Framework utility-first para estilos modernos.
+ PostCSS e Autoprefixer: Processadores CSS para compatibilidade entre navegadores.
+ @quasar/extras: Ícones e outros extras (usado com mdi-v6).

### Instalação:
<p>npm install</p>
<p>npm install -D tailwindcss postcss autoprefixer @tailwindcss/postcss</p>
<p>npm install @quasar/extras</p>

## 📂 Estrutura de Pastas
### desafio/
<p>├── public/            // Arquivos estáticos (ex: favicon)</p>
<p>├── src/</p>
<p>│   ├── assets/        // Imagens (ex: SGMW.jpg para o logo)</p>
<p>│   ├── boot/          // Boot files (ex: axios.ts)</p>
<p>│   ├── components/    // Componentes Vue (GifCard.vue, ImageSelector.vue, etc.)</p>
<p>│   ├── css/           // Arquivos de estilo: </p>
<p>│   │   ├── app.scss   // Diretivas Tailwind & personalizações</p>
<p>│   │   └── quasar.variables.scss  // (Opcional) Variáveis customizadas</p>
<p>│   ├── layouts/       // Layouts gerais (MainLayout.vue)</p>
<p>│   ├── pages/         // Páginas (HomePage.vue, FavoritesPage.vue, CategoriesPage.vue, AboutPage.vue, etc.)</p>
<p>│   ├── router/        // Rotas (index.ts e routes.ts)</p>
<p>│   ├── stores/        // Stores do Pinia (giphy-store.ts, index.ts)</p>
<p>│   ├── App.vue        // Componente raiz</p>
<p>│   └── env.d.ts       // Declarações de tipos para arquivos .vue</p>
<p>├── quasar.config.ts   // Configuração do Quasar</p>
<p>├── postcss.config.cjs // Configuração do PostCSS (use .cjs para CommonJS)</p>
<p>├── tailwind.config.js // Configuração do Tailwind CSS</p>
<p>├── tsconfig.json      // Configuração do TypeScript</p>
<p>├── package.json       // Dependências e scripts</p>
<p>└── README.md          // Este arquivo</p>

## ⚙️ Configuração Principal: 
+ quasar.config.ts:
  <p>Define os arquivos de CSS, boot (ex: axios) e extras (ícones MDI).

Usa extras: ['mdi-v6'] e iconSet: 'mdi-v6' para ícones.</p>
+ postcss.config.cjs:
  <p>Configurado com @tailwindcss/postcss e autoprefixer para processar o CSS.

Caso use "type": "module", renomeie o arquivo para .cjs.</p>
+ tailwind.config.js:
  <p>Define os locais onde as classes Tailwind serão buscadas.</p>
  + src/css/app.scss:
  <p>Importa as diretivas do Tailwind e, opcionalmente, variáveis customizadas do Quasar.</p>

## 📋 Funcionalidades
### HomePage.vue:
<p>Exibe GIFs trending e permite buscar GIFs na API do GIPHY.

O usuário pode favoritar GIFs.</p>
### FavoritesPage.vue:
<p>Lista os GIFs favoritados, com opção de remoção.</p>
### CategoriesPage.vue:
<p>Exibe categorias pré-definidas; ao selecionar uma, mostra os GIFs correspondentes.</p>
### AboutPage.vue:
<p>Apresenta informações sobre o desenvolvedor e o propósito do desafio.</p>
### MainLayout.vue:
<p>Top bar azul-claro com o logo e o nome do desenvolvedor (com ícone de usuário).

Sidebar azul-escuro exibindo os itens de menu com ícones.</p>

## 💡 Como Executar
### Instale as dependências na raiz do projeto:
<p>npm install</p>
<p>quasar dev</p>
<p>npm run dev</p>

## 👨‍💻 Resumo dos Principais Arquivos
+ src/boot/axios.ts: Configuração global do Axios com a chave do GIPHY.
+ src/stores/giphy-store.ts: Store para buscar e gerenciar GIFs.
+ src/layouts/MainLayout.vue: Layout com top bar e sidebar com ícones.
+ src/pages/: Várias páginas (Home, Favoritos, Categorias, Sobre, 404).
+ src/css/app.scss: Importa Tailwind CSS.

![desafio](https://github.com/user-attachments/assets/e0362d0c-e92e-47f4-aeb4-c416e061a3df)



