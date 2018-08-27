<template>
  <v-app>
    <div id="app">
      <Sidebar></Sidebar>
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
import Sidebar from './components/Sidebar';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Sidebar,
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
