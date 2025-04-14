// quasar.config.ts
export default () => ({
  build: {
    // Configurações de build, se necessário
  },

  // O Quasar resolve 'app.scss' como "src/css/app.scss"
  css: [
    'app.scss'
  ],

  boot: [
    'axios'
  ],

  // Extras: Certifique-se de incluir o pacote @quasar/extras configurado para os ícones
  extras: [
    'mdi-v6'
  ],

  framework: {
    config: {},
    // Defina o iconSet de acordo com o extra instalado; neste caso, 'mdi-v6'
    iconSet: 'mdi-v6',
    plugins: ['Notify', 'LocalStorage']
  }
});
