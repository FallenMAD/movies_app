<template>
  <v-navigation-drawer expand-on-hover permanent rail>
    <v-list>
      <v-list-item
        prepend-icon="mdi-play-circle-outline"
        subtitle="Home"
        title="Home"
        to="/"
        exact
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-fire"
        title="Popular"
        value="popular"
        to="/popular"
        :exact="true"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-star"
        title="Top Rated"
        value="top-rated"
        to="/top-rated"
        :exact="true"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-calendar"
        title="Upcoming"
        value="upcoming"
        to="/upcoming"
        :exact="true"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
