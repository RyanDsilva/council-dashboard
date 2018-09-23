<template>
  <span>
    <v-navigation-drawer v-model="drawer" temporary dark absolute class="blue-grey darken-4">
      <v-list>
        <v-list-tile class="sidebarHeader" height="auto">
          <v-list-tile-avatar tile size="50">
            <img src="../assets/logo.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title class="council-name">{{council}}</v-list-tile-title>
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
        <v-list-tile to="/login" class="side-links">
          <v-list-tile-content>
            <v-list-tile-title>Council Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/event/all" class="side-links">
          <v-list-tile-content>
            <v-list-tile-title>Events</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo darken-1" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text main">
        <router-link to="/">Council Dashboard</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-if="!isLoggedIn" to="/login" flat>Council Login</v-btn>
        <v-btn v-if="isLoggedIn" :to="makeLink" flat>Dashboard</v-btn>
        <v-btn to="/event/all" flat>Events</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </span>
</template>

<script>
import mapState from 'vuex';

export default {
  name: 'Navbar',
  // eslint-disable-next-line
  data: () => {
    return {
      drawer: false,
      council: 'CSI',
    };
  },
  computed: {
    ...mapState[('user', 'isLoggedIn')],
    makeLink() {
      // eslint-disable-next-line
      return '/council' + this.$store.state.user._id + '/dashboard';
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
