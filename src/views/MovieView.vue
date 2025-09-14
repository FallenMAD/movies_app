<script lang="ts">
import { defineComponent } from 'vue'
import { useMovieStore } from '@/stores/movieStore'
import MoviesList from '@/components/MoviesList.vue'
import { useRoute } from 'vue-router'

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
  <ViewTitle title="Movie List" subtitle="Here you can see all popular releases." />
  <MoviesList />
</template>
