<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'RootView',
  components: { RouterView },
})
</script>

<template>
  <RouterView />
</template>
