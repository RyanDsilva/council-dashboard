<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center">
        <div class="council-reg">
          <v-card raised class="mx-auto my-5 card-wrapper">
            <v-card-text class="form-content">
              <h1 class="reg-title">User Register</h1>
              <p>In order to register for any events, you will have to be a registered user.</p>
              <v-form>
                <v-text-field v-model="rollNo" type="number" label="Roll No." required></v-text-field>
                <v-text-field v-model="name" type="text" label="Full Name" required></v-text-field>
                <v-text-field v-model="email" type="email" label="Email Address" required></v-text-field>
                <v-text-field v-model="phone" type="text" label="Contact Number"></v-text-field>
                <v-select :items="years" label="Year" v-model="year"></v-select>
                <v-select :items="branches" label="Branch" v-model="branch"></v-select>
                <v-btn color="indigo" dark @click.prevent="userCreate">Register</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
          <v-btn color="indigo" dark to="/users/all">User Database</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserCreate',
  data: () => ({
    rollNo: '',
    phone: '',
    name: '',
    email: '',
    year: '',
    branch: '',
    error: '',
    years: [
      'First Year (FE)',
      'Second Year (SE)',
      'Third Year (TE)',
      'Final Year (BE)',
    ],
    branches: ['Computers', 'Info. Tech.', 'Electronics', 'Production'],
  }),
  methods: {
    userCreate() {
      axios
        .post('/user/create', {
          rollNo: this.rollNo,
          email: this.email,
          name: this.name,
          phone: this.phone,
          year: this.year,
          branch: this.branch,
        })
        .then(this.$router.push('/event/all'))
        .catch(err => {
          this.error = err.message;
        });
    },
  },
};
</script>

<style scoped lang="scss">
.reg-title {
  font-weight: 700;
  color: #39499f;
}
.log-link {
  text-decoration: none;
}
.card-wrapper {
  width: 80%;
  padding: 3em;
}
@media (min-width: 992px) {
  .card-wrapper {
    width: 50%;
  }
}
</style>
