<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Error',
  props: {
    error: {
      type: String,
      required: false,
    },
  },
})
</script>

<template>
  <div class="mx-auto" style="max-width: 600px">
    <v-alert
      type="error"
      elevation="2"
      border="start"
      rounded
      dense
      class="px-4 py-2 text-sm font-medium text-center"
    >
      {{ error || 'error occurred' }}; please try again later.
    </v-alert>
  </div>
</template>
