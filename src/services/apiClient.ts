import { BASE_URL } from '@/utils/BASE_URL'
import axios from 'axios'
import type { AxiosInstance } from 'axios'

export const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  },
})
