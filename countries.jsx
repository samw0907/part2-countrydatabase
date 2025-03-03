import axios from 'axios'
const baseUrl = 'http://localhost:5174/countries'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  }

export default {getAll}
