import { defineStore } from 'pinia'
import { apiClient } from '@/services/apiClient'
import type { Movie } from '@/types/Movie.interface'

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    movies: [] as Movie[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchPopularMovies(page: number, genre: string) {
      this.loading = true
      try {
        const response = await apiClient.get(`/${genre}`, {
          params: {
            language: 'en-US',
            page: page,
          },
        })
        this.movies = response.data.results
      } catch (error: any) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
  },
})
