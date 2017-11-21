import axios from 'axios'

const IMDBInstance = axios.create({
  baseURL: 'http://www.theimdbapi.org/api/movie',
  timeout: 100000
})

export default {
  install (Vue) {
    const IMDBService = {
      name: 'IMDBService',
      get (query) {
        let promises = []

        query.forEach(el => {
          promises.push(IMDBInstance.get('', {
            params: el
          }))
        })

        return axios.all(promises)
      }
    }

    Vue.$IMDBService = IMDBService
    Vue.prototype.$IMDBService = IMDBService
  }
}
