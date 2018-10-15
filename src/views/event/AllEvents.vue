<template>
  <div>
    <div class="event-cards">
      <v-container grid-list-md>
        <flash-message class="mx-5 mt-2 text-xs-center"></flash-message>
        <div id="page-heading">
          <h1>Events</h1>
          <p>Find Events that interest you, in every domain, organised by the various councils in college</p>
        </div>
        <div v-if="isLoggedIn" class="text-xs-center">
          <v-btn to="/event/create" fab dark color="indigo">
            <v-icon>add</v-icon>
          </v-btn>
        </div>
        <v-layout row wrap>
          <v-flex v-for="event in events" :key="event.name" xs12 md6 lg3>
            <v-card>
              <v-img src="../../assets/test.jpg"></v-img>
              <v-card-title primary-title>
                <div class="text-xs-center mx-auto">
                  <h3 class="headline">{{event.name}}</h3>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn class="mx-auto" :to="event.link" dark color="indigo">More Info</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';

export default {
  name: 'AllEvents',
  data: () => ({
    events: [],
    error: '',
  }),
  computed: {
    ...mapState(['isLoggedIn']),
  },
  created() {
    axios
      .get('/event/all')
      .then(res => {
        const data = res.data;
        // eslint-disable-next-line
        for (const eventName in data) {
          const event = data[eventName];
          // eslint-disable-next-line
          event.link = '/event/' + event._id;
          this.events.push(event);
        }
      })
      .catch(err => {
        this.error = err.message;
      });
  },
  // beforeUpdate() {
  //   axios
  //     .get('/event/all')
  //     .then(res => {
  //       const data = res.data;
  //       // eslint-disable-next-line
  //       for (const eventName in data) {
  //         const event = data[eventName];
  //         // eslint-disable-next-line
  //         event.link = '/event/' + event._id;
  //         this.events.push(event);
  //       }
  //     })
  //     .catch(err => {
  //       this.error = err.message;
  //     });
  // },
};
</script>

<style scoped lang="scss">
#page-heading {
  text-align: center;
  color: #808080;
  h1 {
    font-weight: 700;
    color: #3949ab;
    font-size: 2em;
  }
}
</style>
