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
          <div class="display-1 font-weight-light grey--text ">{{event.heldBy.name}}</div>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="my-1">
        <v-flex xs12>
          <h3>Event Description:</h3>
          <p class="description">{{event.description}}</p>
          <div class="date">
            <strong>Date: </strong>
            {{event.date.substring(0,10)}}
          </div>
          <div class="time">
            <strong>Duration: </strong>
            {{event.duration}}
          </div>
          <div class="register text-xs-center my-1">
            <v-dialog v-model="dialog" width="75%">
              <v-btn slot="activator" color="indigo" dark class="register-btn">Register</v-btn>
              <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>
                  Register for {{event.name}}
                </v-card-title>
                <v-card-text>
                  <v-form>
                    <v-text-field v-model="rollNo" type="number" label="Roll. No." required></v-text-field>
                  </v-form>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="indigo" class="register-btn mx-2" dark @click.stop="eventReg">
                    Register
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-btn v-if="isLoggedIn" :to="event.edit" color="indigo" dark class="register-btn mx-2">Edit Event</v-btn>
          </div>
          <br>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';

export default {
  name: 'EventInfo',
  data: () => ({
    event: {},
    error: '',
    dialog: false,
    rollNo: '',
  }),
  computed: {
    ...mapState(['isLoggedIn']),
  },
  created() {
    axios
      // eslint-disable-next-line
      .get('/event/' + this.$route.params.id)
      .then(res => {
        const data = res.data;
        this.event = data;
        // eslint-disable-next-line
        this.event.edit = '/event/' + this.$route.params.id + '/edit';
      })
      .catch(err => {
        this.error = err.message;
      });
  },
  methods: {
    eventReg() {
      axios
        // eslint-disable-next-line
        .post('/event/' + this.$route.params.id + '/register', {
          rollNo: this.rollNo,
        })
        .then(
          // eslint-disable-next-line
          this.$router.push('/event/all'),
        )
        .catch(err => {
          this.error = err.message;
        });
    },
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
