<template>
  <div id="add-event">
    <v-container class="wrapper" grid-list-md>
      <v-layout row wrap>
        <v-flex xs12>
          <h2 class="new-header text-xs-center">Add New Event</h2>
          <v-form ref="form" lazy-validation>
            <v-text-field v-model="event.name" label="Event Name" required></v-text-field>
            <v-textarea v-model="event.description" label="Event Description" hint="Detailed Event Description preffered."></v-textarea>
            <v-text-field v-model="event.duration" label="Event Duration" required></v-text-field>
            <v-select :items="items" label="Event Type" v-model="event.type"></v-select>
            <div class="subheading mb-2">Select Date:</div>
            <v-date-picker v-model="event.date" reactive required></v-date-picker>
            <div class="my-2 mx-auto">
              <v-btn @click="submit" color="indigo" dark>Add New Event</v-btn>
            </div>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'NewEvent',
  data: () => ({
    event: {
      name: '',
      description: '',
      type: '',
      duration: '',
      date: '',
      host: '',
    },
    items: ['Technical', 'Non-Technical', 'Sports'],
  }),
  methods: {
    submit() {
      // eslint-disable-next-line
      console.log(this.event);
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 80%;
}
.new-header {
  color: #39499f;
  font-weight: 300;
}
</style>
