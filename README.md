#CHALLENGE
##Este projeto consiste em uma aplicação SPA (Single-Page Application) desenvolvida com Quasar 2 (que internamente utiliza Vue 3 com Composition API e Vite). O objetivo é consumir a API do GIPHY e exibir GIFs, além de permitir favoritar, buscar e categorizar. Também inclui Pinia para gerenciamento de estado, Axios para requisições HTTP, LocalStorage (via plugin do Quasar) para persistir dados localmente, e Tailwind CSS para estilização.
###Ferramentas e Dependências.
###Quasar 2
Framework que utiliza Vue 3 e Vite para criar SPAs e PWAs de forma rápida e moderna.

Vue 3 (Composition API)
Biblioteca JavaScript para construir interfaces de usuário reativas.

Pinia
Gerenciamento de estado global, substituindo o Vuex.

Axios
Cliente HTTP para consumir a API do GIPHY.

LocalStorage (via plugin Quasar)
Armazena favoritos localmente no navegador.

Tailwind CSS
Framework CSS utility-first para estilização responsiva e moderna.

PostCSS
Processador de CSS (utilizado internamente pelo Tailwind + autoprefixer).

TypeScript
Superconjunto de JavaScript que adiciona tipagem estática.

ESLint e Prettier (opcionais)
Ferramentas para padronização e formatação de código.

@quasar/extras
Pacote com ícones (Material Design Icons etc.) para uso nos componentes <q-icon>.
###Como Executar
Instale as dependências
Na raiz do projeto:

bash
Copiar
npm install
Renomeie postcss.config.js para postcss.config.cjs (se ainda não fez).

Verifique que quasar.config.ts inclua:

ts
Copiar
extras: ['mdi-v6'],
framework: {
  iconSet: 'mdi-v6', // icones MDI
  plugins: ['Notify', 'LocalStorage']
}
Execute o projeto:

bash
Copiar
quasar dev
Isso iniciará o servidor de desenvolvimento (por padrão em http://localhost:9000).
###Explicação Rápida dos Arquivos Principais
src/boot/axios.ts
Configura o Axios com a baseURL do GIPHY e injeta no app para ser acessível via $api.

src/stores/giphy-store.ts
Store Pinia responsável por buscar GIFs (trending e busca) e gerenciar lista de favoritos no LocalStorage.

src/layouts/MainLayout.vue
Layout principal com topbar (logo e nome do programador) e sidebar (menus Home, Favoritos, Categorias, Sobre).

src/pages/

HomePage.vue: Exibe GIFs trending e pesquisa.

FavoritesPage.vue: Lista os favoritos salvos.

CategoriesPage.vue: Lista categorias e exibe GIFs correspondentes.

AboutPage.vue: Informações sobre o desenvolvedor.

ErrorNotFound.vue: Página 404.

src/css/app.scss
Arquivo com diretivas do Tailwind (@tailwind base; @tailwind components; @tailwind utilities;).
(Opcionalmente importa quasar.variables.scss para customizar variáveis do Quasar.)
###Observações Finais
API Key do GIPHY está configurada no arquivo src/boot/axios.ts na constante giphyApiKey.

Ícones (por exemplo, mdi-home, mdi-heart, etc.) requerem que o quasar.config.ts tenha extras: ['mdi-v6'] e iconSet: 'mdi-v6'.

Se quiser mudar cores e tamanhos de ícones, basta alterar as classes/estilos diretamente nos componentes (por exemplo, class="h-6 w-auto" na logo ou size="24px" nos ícones).

Caso encontre erros de caminho ou de estilo, verifique se a pasta assets/ contém as imagens (por ex. SGMW.jpg ou WXZ.png) e se o nome do arquivo coincide com o src="~assets/....

![CHALLENGG](https://github.com/user-attachments/assets/cd47bdf4-fe6f-4062-87ea-e4f1de19f8ea)


