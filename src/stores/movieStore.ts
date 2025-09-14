import { defineStore } from 'pinia'
import { apiClient } from '@/services/apiClient'
import type { Movie } from '@/types/Movie.interface'

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    movies: [] as Movie[],
    loading: false,
    error: null as string | null,
    page: 1,
    totalPages: 1,
    totalResults: 0,
    currentMovie: null as Movie | null,
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
        this.totalPages = response.data.total_pages
        this.totalResults = response.data.total_results
      } catch (error: any) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
    selectMovie(movie: Movie) {
      this.currentMovie = movie
    },
  },
})
