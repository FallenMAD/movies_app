<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NotFoundView',
})
</script>

<template>
  <div class="not-found">
    <h1>This is a not found page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .not-found {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
