<script lang="ts">
import { capitalize, defineComponent, nextTick } from 'vue'
import { useRoute } from 'vue-router'

import { useMovieStore } from '@/stores/moviesStore'
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
    loadingWatcher() {
      return this.store.loading
    },
  },
  mounted() {
    this.store.getMovies(this.page, this.genreID)
  },
  watch: {
    'route.params.category': function () {
      this.store.getMovies(this.page, this.genreID)
    },
    'route.query.page'(newPage) {
      this.store.getMovies(newPage || 1, this.genreID)
    },
    loadingWatcher: {
      handler: async function (loading: boolean) {
        if (!loading) {
          await nextTick()
          const pos = history.state.scroll
          if (pos && typeof pos.top === 'number') {
            window.scrollTo({ top: pos.top, left: pos.left, behavior: 'auto' })
          }
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
        }
      },
      immediate: true,
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

  <div class="mx-auto" style="max-width: 600px" v-else-if="error">
    <v-alert
      type="error"
      elevation="2"
      border="start"
      rounded
      dense
      class="px-4 py-2 text-sm font-medium text-center"
    >
      {{ error }}; please try again later.
    </v-alert>
  </div>

  <v-alert type="info" v-else-if="movies.length === 0"> No movies found. </v-alert>

  <MoviesList v-else :movies="movies" />

  <v-pagination
    v-model="page"
    v-if="!loading && !error && movies.length > 0"
    :length="20"
    :total-visible="6"
    class="my-4"
  ></v-pagination>
</template>
