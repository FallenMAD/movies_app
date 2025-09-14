<script lang="ts">
import { defineComponent } from 'vue'

import type { Movie } from '@/types/Movie.interface'
import MovieListCard from '@/components/MovieListCard.vue'

export default defineComponent({
  name: 'MoviesList',
  components: {
    MovieListCard,
  },
  props: {
    movies: {
      type: Array as () => Movie[],
      required: true,
    },
  },
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col v-for="movie in movies" :key="movie.id" cols="3">
        <MovieListCard :movie="movie" />
      </v-col>
    </v-row>
  </v-container>
</template>
