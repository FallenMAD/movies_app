<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ViewTitle',
  props: {
    title: {
      type: String as PropType<string | undefined>,
      required: true,
    },
    subtitle: {
      type: String as PropType<string | undefined>,
    },
  },
})
</script>

<template>
  <v-container class="my-5">
    <v-row>
      <v-col class="d-flex justify-center align-center flex-column">
        <h1 class="text-h4 font-weight-bold mb-2">{{ title || 'Title' }}</h1>
        <p v-if="subtitle" class="text-subtitle-1 text--secondary">{{ subtitle || 'Subtitle' }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>
