<template>
  <div id="dashboard">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 md7 align-center>
          <v-card raised class="text-xs-center">
            <v-card-title>
              <v-avatar size="300" class="mx-auto">
                <v-img position="center center" src="../../assets/logo.png"></v-img>
              </v-avatar>
            </v-card-title>
            <v-card-text>
              <h1>{{council.name}}</h1>
              <h3 class="subheading">Fr. Conceicao Rodrigues College of Engineering</h3>
              <p class="text-xs-center">{{council.description}}</p>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 md5 align-center>
          <v-card raised class="text-xs-center">
            <v-toolbar color="indigo" dark>
              <h3 class="mx-auto">Members</h3>
            </v-toolbar>
            <v-card-text>
              <v-list>
                <v-list-tile ripple v-for="member in council.members" :key="member.name">
                  <v-list-tile-content>
                    <v-list-tile-title>{{member.name}}</v-list-tile-title>
                    <v-list-tile-sub-title>{{member.year}} | {{member.branch}}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card-text>
            <v-btn absolute dark fab bottom right color="indigo" class="my-2" :to="addMember">
              <v-icon>add</v-icon>
            </v-btn>
          </v-card>
          <br>
          <v-divider class="my-4"></v-divider>
          <div class="text-xs-center">
            <v-btn color="indigo" dark large to="/calendar">View Calendar</v-btn>
          </div>
        </v-flex>
      </v-layout>
      <v-divider class="my-3"></v-divider>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card raised class="text-xs-center pb-3">
            <v-toolbar color="indigo" dark>
              <h3 class="mx-auto">Events</h3>
            </v-toolbar>
            <v-card-text>
              <v-list>
                <v-list-tile ripple v-for="event in council.events" :key="event.name">
                  <v-list-tile-content>
                    <v-list-tile-title>{{event.name}}</v-list-tile-title>
                    <v-list-tile-sub-title>{{event.description.substring(0,100)}}....</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-btn dark color="indigo" class="pa-2" :to="'/event/'+event._id+'/registrations'">Details</v-btn>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
            </v-card-text>
          </v-card>
          <br>
          <br>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Dashboard',
  // eslint-disable-next-line
  data() {
    return {
      council: {},
    };
  },
  computed: {
    // eslint-disable-next-line
    addMember() {
      // eslint-disable-next-line
      return '/council/' + this.$route.params.id + '/members/add';
    },
  },
  created() {
    // eslint-disable-next-line
    axios.get('/council/' + this.$route.params.id + '/dashboard').then(res => {
      const data = res.data;
      this.council = data;
    });
  },
  beforeUpdate() {
    // eslint-disable-next-line
    axios.get('/council/' + this.$route.params.id + '/dashboard').then(res => {
      const data = res.data;
      this.council = data;
    });
  },
};
</script>

<style scoped>
.rounded {
  border-radius: 50%;
}
</style>
