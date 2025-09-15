<script>
import { defineComponent } from 'vue'

import { appRoutes } from '../utils/appRoutes'

export default defineComponent({
  name: 'SideBar',
  data() {
    return {
      routes: appRoutes,
    }
  },
})
</script>

<template>
  <v-navigation-drawer expand-on-hover permanent rail>
    <v-list density="compact" nav>
      <v-list-item
        v-for="route in routes"
        :key="route.path"
        :prepend-icon="route.icon"
        :subtitle="route.subtitle"
        :title="route.title"
        :to="route.path"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
