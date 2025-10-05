<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

import MovieItemCard from '@/components/MovieItemCard.vue'
import { useMovieItemStore } from '@/stores/movieItemStore'
import type { MovieItem } from '@/types/MovieItem.interface'

export default defineComponent({
  name: 'MovieItemView',
  components: { MovieItemCard },
  data() {
    return {
      store: useMovieItemStore(),
      route: useRoute(),
    }
  },
  computed: {
    movieID() {
      return this.route.params.id as string
    },
    genreID() {
      return this.route.params.category as string
    },
  },
  methods: {
    goBack() {
      this.$router.back()
    },
  },
  mounted() {
    this.store.getMovieItem(this.movieID)
  },
})
</script>

<template>
  <ViewTitle :title="store.getMovie?.title || 'Movie Details'" />

  <v-skeleton-loader type="card" v-if="store.isLoading" />

  <MovieItemCard v-else-if="store.getMovie" :movie="store.getMovie">
    <template #btn>
      <v-btn icon text class="ma-4" @click="goBack">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </template>
  </MovieItemCard>

  <Error v-else :error="store.getError" />
</template>
