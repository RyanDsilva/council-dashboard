<template>
  <span>
    <v-navigation-drawer v-model="drawer" temporary dark absolute class="blue-grey darken-4">
      <v-list>
        <v-list-tile class="sidebarHeader" height="auto">
          <v-list-tile-avatar tile size="50">
            <img src="../assets/logo.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title class="council-name">KOLLAB</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-divider class="mb-5"></v-divider>
        <v-list-tile to="/" class="side-links">
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="!isLoggedIn" to="/login" class="side-links">
          <v-list-tile-content>
            <v-list-tile-title>Council Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="isLoggedIn" :to="makeLink" class="side-links">
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/user/create" class="side-links">
          <v-list-tile-content>
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/event/all" class="side-links">
          <v-list-tile-content>
            <v-list-tile-title>Events</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="isLoggedIn" @click.prevent="logout" class="side-links">
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo darken-1" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text main">
        <router-link to="/">KOLLAB</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-if="!isLoggedIn" to="/login" flat>Council Login</v-btn>
        <v-btn to="/user/create" flat>Users</v-btn>
        <v-btn v-if="isLoggedIn" :to="makeLink" flat>Dashboard</v-btn>
        <v-btn to="/event/all" flat>Events</v-btn>
        <v-btn v-if="isLoggedIn" @click.prevent="logout" flat>Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </span>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Navbar',
  // eslint-disable-next-line
  data: () => {
    return {
      drawer: false,
      error: '',
    };
  },
  methods: {
    logout() {
      axios
        .get('/council/logout')
        // eslint-disable-next-line
        .then(res => {
          this.$session.destroy();
          localStorage.removeItem('user');
          this.$router.push('/');
        })
        .catch(err => {
          this.error = err.message;
        });
    },
  },
  computed: {
    makeLink() {
      // eslint-disable-next-line
      return '/council/' + this.user._id + '/dashboard';
    },
    user() {
      return this.$store.getters.getUser;
    },
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
};
</script>

<style scoped lang="scss">
.main a {
  text-decoration: none;
  color: white;
}
.sidebarHeader {
  margin: 10px;
}
.council-name {
  line-height: auto;
  font-weight: 700;
  font-size: 1.9em;
  margin-left: 0.5em;
}
</style>
