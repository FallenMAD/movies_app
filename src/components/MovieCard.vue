<script lang="ts">
import { defineComponent } from 'vue'

import type { Movie } from '@/types/Movie.interface'

export default defineComponent({
  name: 'MoviesCard',
  props: {
    movie: {
      type: Object as () => Movie,
      required: true,
    },
  },
})
</script>

<template>
  <v-card class="mx-auto my-4" max-width="250" elevation="6" rounded="lg">
    <v-img
      :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
      :alt="movie.title"
      height="375"
      class="rounded-t-lg"
      cover
    />

    <v-card-text class="d-flex justify-space-between align-center">
      <span class="text-h6 text-truncate">{{ movie.title }}</span>
      <div class="d-flex align-center">
        <v-icon color="amber darken-2" size="18" class="mr-1">mdi-star</v-icon>
        <span>{{ movie.vote_average.toFixed(1) }}</span>
      </div>
    </v-card-text>
  </v-card>
</template>
