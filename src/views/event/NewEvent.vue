<template>
  <div id="add-event">
    <v-container class="wrapper" grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 class="text-xs-center">
          <h2 class="new-header">Add New Event</h2>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="event.name" :rules="rules" label="Event Name" required></v-text-field>
            <v-textarea v-model="event.description" :rules="rules" label="Event Description" hint="Detailed Event Description preffered."></v-textarea>
            <v-text-field v-model="event.duration" :rules="rules" label="Event Duration" required></v-text-field>
            <v-select :items="items" label="Event Type" :rules="rules" v-model="event.type"></v-select>
            <v-datetime-picker label="Date and Time" v-model="event.date">
            </v-datetime-picker>
            <div class="my-2 mx-auto">
              <v-btn @click.prevent="submit" :disabled="!valid" color="indigo white--text">Add New Event</v-btn>
            </div>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'NewEvent',
  data: () => ({
    event: {
      name: '',
      description: '',
      type: '',
      duration: '',
      date: '',
      heldBy: '',
    },
    error: '',
    items: ['Technical', 'Non-Technical', 'Sports', 'Literary', 'Academic'],
    valid: true,
    rules: [v => !!v || 'Field is required'],
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // eslint-disable-next-line
        this.event.heldBy = this.user._id;
        axios
          .post('/event/create', { event: this.event })
          .then(() => {
            this.flash('Event Added Successfully!', 'success');
            this.$router.push('/event/all');
          })
          .catch(err => {
            this.error = err.message;
          });
      }
    },
  },
  computed: {
    // eslint-disable-next-line
    user() {
      return this.$store.getters.getUser;
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 80%;
}
@media (min-width: 992px) {
  .wrapper {
    width: 50%;
  }
}
.new-header {
  color: #39499f;
  font-weight: 300;
}
</style>
