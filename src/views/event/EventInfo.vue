<template>
  <div id="event-info">
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 lg7>
          <v-img class="poster" src="../../assets/test.jpg" width="100%" height="400"></v-img>
        </v-flex>
        <v-flex xs12 sm6 lg5 class="text-xs-center my-auto">
          <div class="header">{{event.name}}</div>
          <small class="font-weight-light grey--text ">{{event.type}}</small>
          <hr class="my-2">
          <div class="display-1 font-weight-light grey--text ">{{event.host}}</div>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="my-1">
        <v-flex xs12>
          <h3>Event Description:</h3>
          <p class="description">{{event.description}}</p>
          <div class="date">
            <strong>Date: </strong>
            {{event.date}}
          </div>
          <div class="time">
            <strong>Time: </strong>
            {{event.time}}
          </div>
          <div class="register text-xs-center my-1">
            <v-btn :to="event.link" color="indigo" dark class="register-btn">Register</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EventInfo',
  data: () => ({
    event: {},
    error: '',
  }),
  created() {
    const id = this.$route.params.id;
    // eslint-disable-next-line
    const link = '/event/' + id;
    axios
      .get(link)
      .then(res => {
        const data = res.data;
        this.event = data;
        this.event.id = id;
        // eslint-disable-next-line
        this.event.link = '/event/' + this.event.id + '/register';
        // eslint-disable-next-line
        console.log(this.event);
      })
      .catch(err => {
        this.error = err.message;
      });
  },
};
</script>

<style scoped>
#event-info {
  font-size: 1.2em;
}
.header {
  font-size: 3em;
  font-weight: 700;
  color: #39499f;
}
</style>
