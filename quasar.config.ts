// quasar.config.ts
export default () => ({
  build: {
   
  },

  
  css: [
    'app.scss'
  ],

  boot: [
    'axios'
  ],

  
  extras: [
    'mdi-v6'
  ],

  framework: {
    config: {},
    
    iconSet: 'mdi-v6',
    plugins: ['Notify', 'LocalStorage']
  }
});
