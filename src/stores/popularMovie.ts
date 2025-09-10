import { defineStore } from 'pinia'
import { apiClient } from '@/services/apiClient'

export const usePopularMovieStore = defineStore('popularMovie', {
  state: () => ({
    movies: [] as Array<any>,
    loading: false,
    error: null as string | null,
    page: 1,
    totalPages: 1,
    totalResults: 0,
  }),
  actions: {
    async fetchPopularMovies(page: number) {
      this.loading = true
      try {
        const response = await apiClient.get('/popular', {
          params: {
            language: 'en-US',
            page: page,
          },
        })
        this.movies = response.data.results
        this.totalPages = response.data.total_pages
        this.totalResults = response.data.total_results
      } catch (error: any) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
  },
})
