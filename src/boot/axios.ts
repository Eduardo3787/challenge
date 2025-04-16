import { boot } from 'quasar/wrappers'
import axios from 'axios'


const giphyApiKey = 'Swe4MjdvMcvSQeLKWkJYGY0MxpoYrIpB'


const api = axios.create({
  baseURL: 'https://api.giphy.com/v1/',
})

export default boot(({ app }) => {
  
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

export { api, giphyApiKey }
