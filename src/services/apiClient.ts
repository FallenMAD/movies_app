import axios from 'axios'
import type { AxiosInstance } from 'axios'

export const apiClient: AxiosInstance = axios.create({
  baseURL: '/api',
  params: {
    api_key: import.meta.env.VITE_TMDB_TOKEN,
  },
})
