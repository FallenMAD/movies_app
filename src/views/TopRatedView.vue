<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TopRatedView',
})
</script>

<template>
  <div class="about">
    <h1>This is a rated page</h1>
  </div>
  <RouterView />
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
