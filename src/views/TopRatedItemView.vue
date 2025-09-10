<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TopRatedItemView',
})
</script>

<template>
  <div class="rated-item-view">
    <h1>This is a rated item page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .rated-item-view {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
