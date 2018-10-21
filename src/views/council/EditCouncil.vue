<template>
  <div class="council-edit">
    <v-container class="wrapper" grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 class="text-xs-center">
          <h2 class="new-header text-xs-center">Edit {{council.name}}</h2>
          <v-form ref="form" lazy-validation v-model="valid">
            <v-text-field v-model="council.name" :rules="rules" label="Name of the Council" required></v-text-field>
            <v-textarea v-model="council.description" :rules="rules" label="Council Description" hint="Detailed Council Description preffered."></v-textarea>
            <div class="my-2 mx-auto">
              <v-btn @click.prevent="submit" color="indigo white--text" :disabled="!valid">Confirm Edit</v-btn>
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
  data: () => ({
    council: {},
    valid: true,
    rules: [v => !!v || 'Field is required'],
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        axios
          // eslint-disable-next-line
          .put('/council/' + this.$route.params.id + '/edit', {
            council: this.council,
          })
          .then(() => {
            this.flash('Edited Successfully!', 'success');
            this.$router.push(
              // eslint-disable-next-line
              '/council/' + this.$route.params.id + '/dashboard',
            );
          })
          .catch(err => {
            this.error = err.message;
          });
      }
    },
  },
  created() {
    axios
      // eslint-disable-next-line
      .get('/council/' + this.$route.params.id + '/dashboard')
      .then(res => {
        const data = res.data;
        this.council = data;
      })
      .catch(err => {
        this.error = err.message;
      });
  },
  beforeUpdate() {
    axios
      // eslint-disable-next-line
      .get('/council/' + this.$route.params.id + '/dashboard')
      .then(res => {
        const data = res.data;
        this.council = data;
      })
      .catch(err => {
        this.error = err.message;
      });
  },
};
</script>

<style scoped lang="scss">
</style>
