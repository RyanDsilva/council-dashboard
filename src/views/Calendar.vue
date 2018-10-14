<template>
  <v-container>
    <full-calendar :events="events" :config="config"></full-calendar>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Calendar',
  // eslint-disable-next-line
  data() {
    return {
      events: [],
      config: {
        defaultView: 'month',
      },
    };
  },
  created() {
    axios
      .get('/event/all')
      .then(res => {
        const data = res.data;
        // eslint-disable-next-line
        for (const eventName in data) {
          const event = {
            title: data[eventName].name,
            start: data[eventName].date,
          };
          this.events.push(event);
        }
      })
      .catch(err => {
        this.error = err.message;
      });
  },
};
</script>

<style scoped>
</style>
