<template>
  <Navbar />
  <router-view />
</template>

<script>
import { defineAsyncComponent } from "vue"

export default {
  name: 'App',
  components: {
    Navbar: defineAsyncComponent( () => import("./components/Navbar.vue"))
}
}
</script>

<style>
body {
  background:rgb(199, 190, 190);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  
}
</style>
