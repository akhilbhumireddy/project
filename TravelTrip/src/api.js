import axios from 'axios'

const api = axios.create({
  baseURL: 'https://apis.ccbp.in/',
})

export const login = credentials => api.post('/login', credentials)

// Add other API methods if needed
