import axios from 'axios'

export const http = axios.create({
  baseURL: 'http://192.168.1.101:3003',
  headers: {
    'Content-Type': 'application/json',
  },
})
