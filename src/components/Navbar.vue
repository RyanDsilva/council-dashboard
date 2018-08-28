<template>
  <span>
    <v-navigation-drawer v-model="drawer" temporary dark absolute class="indigo darken-4">
      <v-list>
        <v-list-tile class="sidebarHeader" height="auto">
          <v-list-tile-avatar tile size="50">
            <img src="../assets/logo.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title class="headline">{{council}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-divider class="mb-5"></v-divider>
        <v-list-tile to="/">
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/user/login">
          <v-list-tile-content>
            <v-list-tile-title>User Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/council/login">
          <v-list-tile-content>
            <v-list-tile-title>Council Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/event/all">
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
        <v-btn to="/user/login" flat>User Login</v-btn>
        <v-btn to="/council/login" flat>Council Login</v-btn>
        <v-btn to="/event/all" flat>Events</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </span>
</template>

<script>
export default {
  name: 'Navbar',
  // eslint-disable-next-line
  data: () => {
    return {
      drawer: null,
      council: 'StuCo',
    };
  },
};
</script>

<style scoped>
.main a {
  text-decoration: none;
  color: white;
}
.sidebarHeader {
  margin: 10px;
}
.headline {
  height: auto;
}
</style>
