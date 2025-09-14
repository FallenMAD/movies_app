import { defineStore } from 'pinia'

import { apiClient } from '@/services/apiClient'
import type { MovieItem } from '@/types/MovieItem.interface'

export const useMovieItemStore = defineStore('movieItemStore', {
  state: () => ({
    movie: null as MovieItem | null,
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async getMovieItem(id: string) {
      this.loading = true
      try {
        const response = await apiClient.get(`/${id}`, {
          params: { language: 'en-US' },
        })
        this.movie = response.data
      } catch (error: any) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
  },
})
