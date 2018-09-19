<template>
  <div id="edit-user">
    <v-container class="wrapper" grid-list-md>
      <v-layout row wrap>
        <v-flex xs12>
          <h2 class="new-header text-xs-center">Edit</h2>
          <v-form ref="form" lazy-validation>
            <v-text-field v-model="user.name" label="Name" required></v-text-field>
            <div class="my-2 mx-auto">
              <v-btn @click="submit" color="indigo" dark>Confirm</v-btn>
            </div>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'EditUser',
  data: () => ({
    user: {},
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
