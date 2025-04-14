import { boot } from 'quasar/wrappers'
import axios from 'axios'

// Substitua pela sua API Key
const giphyApiKey = 'YOUR_GIPHY_API_KEY'

// Cria instância com baseURL do GIPHY
const api = axios.create({
  baseURL: 'https://api.giphy.com/v1/',
})

export default boot(({ app }) => {
  // Opcional: injetar axios e api no app
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

export { api, giphyApiKey }
