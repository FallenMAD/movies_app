<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <v-app>
    <v-layout>
      <v-navigation-drawer expand-on-hover permanent rail>
        <v-list>
          <v-list-item
            prepend-icon="mdi-play-circle-outline"
            subtitle="Home"
            title="Home"
            to="/"
            router
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-fire"
            title="Popular"
            value="popular"
            to="/popular"
            router
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-star"
            title="Top Rated"
            value="top-rated"
            to="/top-rated"
            router
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-calendar"
            title="Upcoming"
            value="upcoming"
            to="/upcoming"
            router
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <RouterView />
      </v-main>
    </v-layout>
  </v-app>
</template>

<style scoped></style>
