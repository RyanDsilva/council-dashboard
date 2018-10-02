<template>
  <v-app>
    <div id="app">
      <Navbar></Navbar>
      <v-content>
        <router-view/>
      </v-content>
      <Footer></Footer>
    </div>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
