import axios from 'axios'

export const httpGoogle = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api',
  headers: {
    'Content-Type': 'application/json',
  },
})
