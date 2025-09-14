<script lang="ts">
import { capitalize, defineComponent } from 'vue'
import { useRoute } from 'vue-router'

import { useMovieStore } from '@/stores/movieStore'
import MoviesList from '@/components/MoviesList.vue'

export default defineComponent({
  name: 'MovieView',
  components: { MoviesList },
  data() {
    return {
      store: useMovieStore(),
      route: useRoute(),
    }
  },
  computed: {
    genreID() {
      return this.route.params.category as string
    },
    transformedGenreName() {
      return this.genreID.replace('_', ' ')
    },
    capitalizedGenreName() {
      return capitalize(this.transformedGenreName)
    },
    movies() {
      return this.store.movies
    },
    loading() {
      return this.store.loading
    },
    error() {
      return this.store.error
    },
  },
  mounted() {
    this.store.fetchPopularMovies(2, this.genreID)
    console.log(this.route)
  },
  watch: {
    'route.params.category': function () {
      this.store.fetchPopularMovies(2, this.genreID)
    },
  },
})
</script>

<template>
  <ViewTitle
    :title="`${capitalizedGenreName} List`"
    :subtitle="`Here you can see all ${transformedGenreName} movies`"
  />

  <v-skeleton-loader type="card" v-if="loading" />

  <v-alert type="error" v-else-if="error">
    {{ error }}
  </v-alert>

  <v-alert type="info" v-else-if="movies.length === 0"> No movies found. </v-alert>

  <MoviesList v-else :movies="movies" />
</template>
