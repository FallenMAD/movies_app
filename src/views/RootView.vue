<script>
import { RouterView } from 'vue-router'

export default {
  name: 'RootView',
}
</script>

<template>
  <div class="not-found">
    <RouterView />
  </div>
</template>

<style>
/* @media (min-width: 1024px) {
  .not-found {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
