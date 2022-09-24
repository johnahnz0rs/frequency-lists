<template>
  <div>
    <v-app-bar flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list nav>
        <v-list-item>
          <router-link to="/">Home</router-link>
        </v-list-item>
        <v-list-item>
          <router-link to="/korean">Korean</router-link>
        </v-list-item>
        <v-list-item>
          <router-link to="/spanish">Spanish</router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style scoped>
.v-toolbar button.v-app-bar-nav-icon {
  margin-left: auto;
}
a {
  color: green;
}
</style>
