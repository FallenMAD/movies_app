import axios from 'axios'
import { defineStore } from 'pinia'
import { apiClient } from '@/services/apiClient'
import type { Movie } from '@/types/Movie.interface'

export const useMoviesStore = defineStore('moviesStore', {
  state: () => ({
    movies: [] as Movie[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async getMovies(page: number, genre: string) {
      this.loading = true
      try {
        const response = await apiClient.get(`/${genre}`, {
          params: {
            language: 'en-US',
            page: page,
          },
        })
        this.movies = response.data.results
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          this.error = err.message
        } else if (err instanceof Error) {
          this.error = err.message
        } else {
          this.error = String(err)
        }
      } finally {
        this.loading = false
      }
    },
  },
  getters: {
    isLoading: (state) => state.loading,
    getMovieItems: (state) => state.movies,
    getError: (state) => state.error,
  },
})
