<script lang="ts">
import { defineComponent } from 'vue'
import { usePopularMovieStore } from '@/stores/popularMovie'

export default defineComponent({
  name: 'PopularView',
  data() {
    return {
      store: usePopularMovieStore(),
    }
  },
  computed: {
    popularMovies() {
      return this.store.movies
    },
  },
  mounted() {
    this.store.fetchPopularMovies(1)
    this.popularMovies
  },
})
</script>

<template>
  <ViewTitle title="Popular Movies" subtitle="Here you can see all popular releases." />
</template>
