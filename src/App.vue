<script lang="ts">
import { RouterView } from 'vue-router'
import { defineComponent } from 'vue'

import SideBar from './components/SideBar.vue'

export default defineComponent({
  name: 'App',
  components: {
    SideBar,
    RouterView,
  },
})
</script>

<template>
  <v-app>
    <v-layout>
      <SideBar />

      <v-main>
        <RouterView />
      </v-main>
    </v-layout>
  </v-app>
</template>
