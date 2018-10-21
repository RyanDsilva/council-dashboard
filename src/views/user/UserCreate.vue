<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center">
        <div class="council-reg">
          <v-card raised class="mx-auto my-2 card-wrapper">
            <v-card-text class="form-content">
              <h1 class="reg-title">User Register</h1>
              <p>In order to register for any events, you will have to be a registered user.</p>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field v-model="rollNo" :rules="rollNoRules" type="number" label="Roll No." required></v-text-field>
                <v-text-field v-model="name" :rules="rules" type="text" label="Full Name" required></v-text-field>
                <v-text-field v-model="email" :rules="emailRules" type="email" label="Email Address" required></v-text-field>
                <v-text-field v-model="phone" :rules="rules" type="text" label="Contact Number"></v-text-field>
                <v-select :items="years" :rules="rules" label="Year" v-model="year"></v-select>
                <v-select :items="branches" :rules="rules" label="Branch" v-model="branch"></v-select>
                <v-btn color="indigo white--text" :disabled="!valid" @click.prevent="userCreate">Register</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
          <v-btn color="indigo" v-if="isLoggedIn" dark to="/users/all">User Database</v-btn>
          <br>
          <br>
          <br>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';

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
    valid: true,
    rules: [v => !!v || 'Field is required'],
    rollNoRules: [
      v => !!v || 'Roll No. is required',
      v => (v && v.length === 4) || 'Roll No must be equal to 4 characters',
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
  computed: {
    ...mapState(['isLoggedIn']),
  },
  methods: {
    userCreate() {
      if (this.$refs.form.validate()) {
        axios
          .post('/user/create', {
            rollNo: this.rollNo,
            email: this.email,
            name: this.name,
            phone: this.phone,
            year: this.year,
            branch: this.branch,
          })
          .then(() => {
            this.flash('Student Added Successfully!', 'success');
            this.$router.push('/event/all');
          })
          .catch(err => {
            this.error = err.message;
          });
      }
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
