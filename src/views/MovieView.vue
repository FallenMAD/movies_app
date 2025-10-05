<script lang="ts">
import { capitalize, defineComponent } from 'vue'
import { useRoute } from 'vue-router'

import { useMoviesStore } from '@/stores/moviesStore.ts'
import MoviesList from '@/components/MoviesList.vue'

export default defineComponent({
  name: 'MovieView',
  components: { MoviesList },
  data() {
    return {
      store: useMoviesStore(),
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
    }
    page: {
      get() {
        return Number(this.route.query.page || 1)
      },
      set(value: number) {
        this.$router.push({
          name: this.route.name as string,
          params: this.route.params,
          query: { ...this.route.query, page: value },
        })
      },
    },
  },
  created() {
    this.store.getMovies(this.page, this.genreID)
  },
  watch: {
    'route.params.category': function () {
      this.store.getMovies(this.page, this.genreID)
    },
    'route.query.page'(newPage) {
      this.store.getMovies(newPage || 1, this.genreID)
    },
  },
})
</script>

<template>
  <ViewTitle
    :title="`${capitalizedGenreName} List`"
    :subtitle="`Here you can see all ${transformedGenreName} movies`"
  />

  <v-skeleton-loader type="card" v-if="store.isLoading" />

  <Error v-else-if="store.getError" :error="store.getError" />

  <v-alert type="info" v-else-if="store.getMovieItems.length === 0"> No movies found. </v-alert>

  <MoviesList v-else :movies="store.getMovieItems" />

  <v-pagination
    v-model="page"
    v-if="!store.isLoading && !store.getError && store.getMovieItems.length > 0"
    :length="20"
    :total-visible="6"
    class="my-4"
  ></v-pagination>
</template>
