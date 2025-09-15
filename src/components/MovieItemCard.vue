<script lang="ts">
import { defineComponent } from 'vue'

import type { MovieItem } from '@/types/MovieItem.interface'

export default defineComponent({
  name: 'MovieItemCard',
  props: {
    movie: {
      type: Object as () => MovieItem | null,
      required: true,
    },
  },
})
</script>

<template>
  <v-container class="my-6" v-if="movie">
    <slot name="btn"></slot>
    <v-row>
      <v-col cols="12" md="4">
        <v-img
          :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
          :alt="movie.title"
          height="500"
          class="rounded-lg"
        />
      </v-col>

      <v-col cols="12" md="8">
        <v-card flat class="pa-4">
          <v-card-title class="text-h4 font-weight-bold px-0">{{ movie.title }}</v-card-title>

          <div class="d-flex flex-wrap mb-2" v-if="movie.genres.length">
            <v-chip
              v-for="genre in movie.genres"
              :key="genre.id"
              color="primary"
              text-color="white"
              class="ma-1"
              small
            >
              {{ genre.name }}
            </v-chip>
          </div>

          <div class="d-flex align-center mb-4">
            <v-icon color="amber darken-2" size="20" class="mr-1">mdi-star</v-icon>
            <span class="mr-4 font-weight-medium">{{ movie.vote_average.toFixed(1) }}</span>

            <v-icon size="20" class="mr-1">mdi-calendar</v-icon>
            <span class="font-weight-medium">{{ movie.release_date }}</span>
          </div>

          <v-card-text class="px-0">
            {{ movie.overview }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
