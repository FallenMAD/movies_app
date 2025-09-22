<script lang="ts">
import { defineComponent } from 'vue'

import type { Movie } from '@/types/Movie.interface'
import { BASE_IMG_URL } from '@/utils/BASE_IMG_URL'

export default defineComponent({
  name: 'MoviesListCard',
  props: {
    movie: {
      type: Object as () => Movie,
      required: true,
    },
  },
  data() {
    return {
      BASE_IMG_URL,
    }
  },
  methods: {
    goToDetails(id: number) {
      this.$router.push({ name: 'movie-item', params: { id } })
    },
  },
})
</script>

<template>
  <v-card
    class="mx-auto my-4"
    max-width="250"
    elevation="6"
    rounded="lg"
    hover
    @click="goToDetails(movie.id)"
  >
    <v-img
      :src="`${BASE_IMG_URL}${movie.poster_path}`"
      :alt="movie.title"
      height="375"
      class="rounded-t-lg"
      cover
    />

    <v-card-text class="d-flex justify-space-between align-center">
      <v-card-title class="w-75 text-h6 font-weight-bold px-0 text-truncate">{{
        movie.title
      }}</v-card-title>
      <div class="d-flex align-center">
        <v-icon color="amber darken-2" size="18" class="mr-1">mdi-star</v-icon>
        <span>{{ movie.vote_average.toFixed(1) }}</span>
      </div>
    </v-card-text>
  </v-card>
</template>
