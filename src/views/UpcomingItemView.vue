<script>
import { RouterView } from 'vue-router'

export default {
  name: 'UpcomingItemView',
}
</script>

<template>
  <div class="upcoming-item">
    <h1>This is an upcoming item page</h1>
  </div>

  <RouterView />
</template>

<style>
@media (min-width: 1024px) {
  .upcoming-item {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
