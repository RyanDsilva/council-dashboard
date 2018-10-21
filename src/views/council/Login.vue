<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center">
        <div class="council-login">
          <v-alert v-if="error!=''" type="error">{{error}}</v-alert>
          <v-card raised ripple class="mx-auto my-5 card-wrapper">
            <v-card-text class="form-content">
              <h1 class="login-title">Council Login</h1>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field v-model="username" :rules="rules" type="text" label="Username" required></v-text-field>
                <v-text-field v-model="password" :rules="rules" type="password" label="Password" required></v-text-field>
                <v-btn color="indigo white--text" @click.prevent="login" :disabled="!valid">Login</v-btn>
              </v-form>
              <p class="my-2">Not Already A User?
                <router-link class="reg-link" to="/signup">Register Now!</router-link>
              </p>
            </v-card-text>
          </v-card>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data: () => ({
    username: '',
    password: '',
    error: '',
    valid: true,
    rules: [v => !!v || 'Field is required'],
  }),
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        axios
          .post('/council/login', {
            username: this.username,
            password: this.password,
          })
          .then(res => {
            const data = res.data;
            this.$session.start();
            this.$session.set('user', data);
            localStorage.setItem('user', JSON.stringify(data));
            this.$store.commit('setCurrentUser', JSON.stringify(data));
            this.$store.commit('setIsLoggedIn', true);
            this.flash('Logged In Successfully!', 'success');
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
.login-title {
  font-weight: 700;
  color: #39499f;
}
.reg-link {
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
