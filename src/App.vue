<template>
  <app-header />
  <router-view />
  <app-footer />
</template>
<script>
import AppFooter from "./components/Global/AppFooter.vue";
import AppHeader from "./components/Global/AppHeader.vue";
export default {
  components: { AppFooter, AppHeader },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
