<script>
import { RouterView } from 'vue-router'

export default {
  name: 'UpcomingView',
}
</script>

<template>
  <div class="upcoming">
    <h1>This is an upcoming page</h1>
  </div>

  <RouterView />
</template>

<style>
@media (min-width: 1024px) {
  .upcoming {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
