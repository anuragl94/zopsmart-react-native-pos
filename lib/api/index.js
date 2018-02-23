import { API_HOST } from '../../constants/config'

function call ({ url, method, headers }) {
  if (!url) {
    return Promise.reject(new Error('Missing parameters in API call'))
  } else if (url && url[0] === '/') {
    // Use the default API host
    url = API_HOST + url
  }
  return fetch(url, { method, headers })
    .then(response => {
      if (!response.ok) {
        return response.json().then(data => {
          return Promise.reject(new Error(data.message))
        })
      }
      return response.json()
    })
    .then(data => {
      return Promise.resolve(data)
    })
}

const API = {
  get: (url, params = false, { headers }) => {
    const updatedHeaders = Object.assign({}, headers, {
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    })
    let querystring = params ? '?' + Object.keys(params).map(key => `${key}=${params[key]}`).join('&') : ''
    url = url + ((querystring) ? '?' + querystring : '')
    return call({ url, headers: updatedHeaders, method: 'GET' })
  }
}

const { get } = API

export default API
export { get }
