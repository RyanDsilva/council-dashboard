<template>
  <div id="dashboard">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 align-center>
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
      </v-layout>
      <v-divider class="my-3"></v-divider>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card raised class="text-xs-center">
            <v-toolbar color="indigo" dark>
              <h3 class="mx-auto">{{event.name}} Registrations</h3>
            </v-toolbar>
            <v-card-text>
              <v-list two-line>
                <v-list-tile ripple v-for="registration in event.registrations" :key="registration.name">
                  <v-list-tile-content>
                    <v-list-tile-title>{{registration.name}}</v-list-tile-title>
                    <v-list-tile-sub-title>{{registration.year}} - {{registration.branch}} <br> {{registration.phone}} </v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card-text>
          </v-card>
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
      event: {},
    };
  },
  created() {
    axios
      // eslint-disable-next-line
      .get('/event/' + this.$route.params.id)
      .then(res => {
        const data = res.data;
        this.event = data;
        this.council = data.heldBy;
      })
      .catch(err => {
        this.error = err.message;
      });
  },
};
</script>

<style scoped>
.rounded {
  border-radius: 50%;
}
</style>