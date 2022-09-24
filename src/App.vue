<template>
  <v-app>
    <HeaderNav />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HeaderNav from "./components/HeaderNav.vue";
export default {
  name: "App",
  components: {
    HeaderNav,
  },
  data: () => ({
    //
  }),
};
</script>
<style>
body {
  max-width: 400px;
  margin: 0 auto;
}
</style>
