<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TopRatedView',
})
</script>

<template>
  <v-container class="my-5">
    <v-row>
      <v-col class="d-flex justify-center align-center flex-column">
        <h1 class="text-h4 font-weight-bold mb-2">Top Rated Movies</h1>
        <p class="text-subtitle-1 text--secondary">Here you can see all top rated movies.</p>
      </v-col>
    </v-row>
  </v-container>
</template>
