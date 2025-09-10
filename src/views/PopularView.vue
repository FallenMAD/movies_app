<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PopularView',
})
</script>

<template>
  <div class="popular">
    <h1>This is a popular page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .popular {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
