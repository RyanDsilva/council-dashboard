<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center">
        <div class="council-reg">
          <v-card raised class="mx-auto my-5 card-wrapper">
            <v-card-text class="form-content">
              <h1 class="reg-title">Council Register</h1>
              <v-form>
                <v-text-field v-model="username" type="text" label="Username" required></v-text-field>
                <v-text-field v-model="name" type="text" label="Name Of The Council" required></v-text-field>
                <v-text-field v-model="password" type="password" label="Password" required></v-text-field>
                <v-textarea v-model="description" label="Council Description" hint="Detailed Council Description preffered."></v-textarea>
                <v-btn color="indigo" dark @click.prevent="signup">Register</v-btn>
              </v-form>
              <p class="my-2">Already A User?
                <router-link class="log-link" to="/login">Login!</router-link>
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
  name: 'SignUp',
  data: () => ({
    username: '',
    password: '',
    name: '',
    description: '',
    error: '',
  }),
  methods: {
    signup() {
      axios
        .post('/council/register', {
          username: this.username,
          password: this.password,
          name: this.name,
          description: this.description,
        })
        .then(res => {
          const data = res.data;
          this.$session.start();
          this.$session.set('user', data);
          localStorage.setItem('user', data);
          this.$router.push('/event/all');
        })
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
