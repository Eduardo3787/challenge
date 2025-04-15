###Challenge
##Este projeto é uma SPA construída com Quasar 2 e Vue 3 (Composition API), utilizando Pinia para gerenciamento de estado, Axios para consumir a API do GIPHY, LocalStorage para persistência de dados e Tailwind CSS para estilização.
###🛠️ Ferramentas e Dependências



Quasar 2: Framework para construção de SPAs.

Vue 3: Biblioteca para interfaces de usuário.

Pinia: Gerenciamento de estado global (substitui o Vuex).

Axios: Cliente HTTP para acessar a API do GIPHY.

Tailwind CSS: Framework utility-first para estilos modernos.

PostCSS e Autoprefixer: Processadores CSS para compatibilidade entre navegadores.

@quasar/extras: Ícones e outros extras (usado com mdi-v6).




####Instalação:

bash
Copiar
npm install
npm install -D tailwindcss postcss autoprefixer @tailwindcss/postcss
npm install @quasar/extras



####📂 Estrutura de Pastas
arduino
Copiar
desafio/
├── public/            // Arquivos estáticos (ex: favicon)
├── src/
│   ├── assets/        // Imagens (ex: SGMW.jpg para o logo)
│   ├── boot/          // Boot files (ex: axios.ts)
│   ├── components/    // Componentes Vue (GifCard.vue, ImageSelector.vue, etc.)
│   ├── css/           // Arquivos de estilo: 
│   │   ├── app.scss   // Diretivas Tailwind & personalizações
│   │   └── quasar.variables.scss  // (Opcional) Variáveis customizadas
│   ├── layouts/       // Layouts gerais (MainLayout.vue)
│   ├── pages/         // Páginas (HomePage.vue, FavoritesPage.vue, CategoriesPage.vue, AboutPage.vue, etc.)
│   ├── router/        // Rotas (index.ts e routes.ts)
│   ├── stores/        // Stores do Pinia (giphy-store.ts, index.ts)
│   ├── App.vue        // Componente raiz
│   └── env.d.ts       // Declarações de tipos para arquivos .vue
├── quasar.config.ts   // Configuração do Quasar
├── postcss.config.cjs // Configuração do PostCSS (use .cjs para CommonJS)
├── tailwind.config.js // Configuração do Tailwind CSS
├── tsconfig.json      // Configuração do TypeScript
├── package.json       // Dependências e scripts
└── README.md          // Este arquivo
####⚙️ Configuração Principal
quasar.config.ts:
Define os arquivos de CSS, boot (ex: axios) e extras (ícones MDI).

Usa extras: ['mdi-v6'] e iconSet: 'mdi-v6' para ícones.

postcss.config.cjs:
Configurado com @tailwindcss/postcss e autoprefixer para processar o CSS.

Caso use "type": "module", renomeie o arquivo para .cjs.

tailwind.config.js:
Define os locais onde as classes Tailwind serão buscadas.

src/css/app.scss:
Importa as diretivas do Tailwind e, opcionalmente, variáveis customizadas do Quasar.



####📋 Funcionalidades
HomePage.vue:

Exibe GIFs trending e permite buscar GIFs na API do GIPHY.

O usuário pode favoritar GIFs.

FavoritesPage.vue:

Lista os GIFs favoritados, com opção de remoção.

CategoriesPage.vue:

Exibe categorias pré-definidas; ao selecionar uma, mostra os GIFs correspondentes.

AboutPage.vue:

Apresenta informações sobre o desenvolvedor e o propósito do desafio.

MainLayout.vue:

Top bar azul-claro com o logo e o nome do desenvolvedor (com ícone de usuário).

Sidebar azul-escuro exibindo os itens de menu com ícones.

####💡 Como Executar
Instale as dependências na raiz do projeto:

bash
Copiar
npm install
Inicie o servidor de desenvolvimento:

bash
Copiar
quasar dev
Ou:

bash
Copiar
npm run dev
Acesse a aplicação pelo navegador (geralmente em http://localhost:9000).


####👨‍💻 Resumo dos Principais Arquivos
src/boot/axios.ts: Configuração global do Axios com a chave do GIPHY.

![desafio](https://github.com/user-attachments/assets/2b262e7f-61dc-4bc0-8457-f6239619bdc4)



src/stores/giphy-store.ts: Store para buscar e gerenciar GIFs.

src/layouts/MainLayout.vue: Layout com top bar e sidebar com ícones.

src/pages/: Várias páginas (Home, Favoritos, Categorias, Sobre, 404).

src/css/app.scss: Importa Tailwind CSS.
