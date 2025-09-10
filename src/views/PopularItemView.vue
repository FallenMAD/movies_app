<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PopularItemView',
})
</script>

<template>
  <div class="popular-item-view">
    <h1>This is a popular item page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .popular-item-view {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
