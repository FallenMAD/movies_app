<script lang="ts">
import { defineComponent } from 'vue'
import { useMovieStore } from '@/stores/popularMovie'

export default defineComponent({
  name: 'PopularView',
  data() {
    return {
      store: useMovieStore(),
    }
  },
  computed: {
    popularMovies() {
      return this.store.movies
    },
  },
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col v-for="movie in popularMovies" :key="movie.id" cols="3">
        <v-card>
          <v-img
            :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
            :alt="movie.title"
            height="300"
          />
          <v-card-title>{{ movie.title }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
