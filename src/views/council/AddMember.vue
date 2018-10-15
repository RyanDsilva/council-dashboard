<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center">
        <div class="council-login">
          <v-card raised ripple class="mx-auto my-5 card-wrapper">
            <v-card-text class="form-content">
              <h1 class="login-title">Add Member to {{council.name}}</h1>
              <v-form>
                <v-text-field v-model="rollNo" type="number" label="Roll. No." required></v-text-field>
                <v-btn color="indigo" dark @click.prevent="addMember">Add Member</v-btn>
              </v-form>
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
  name: 'AddMember',
  data: () => ({
    rollNo: '',
    error: '',
    council: {},
  }),
  methods: {
    addMember() {
      axios
        // eslint-disable-next-line
        .put('/council/' + this.$route.params.id + '/members/add', {
          rollNo: this.rollNo,
        })
        .then(
          // eslint-disable-next-line
          this.$router.push('/council/' + this.$route.params.id + '/dashboard'),
        )
        .catch(err => {
          this.error = err.message;
        });
    },
  },
  created() {
    // eslint-disable-next-line
    axios.get('/council/' + this.$route.params.id + '/dashboard').then(res => {
      const data = res.data;
      this.council = data;
    });
  },
  beforeUpdate() {
    // eslint-disable-next-line
    axios.get('/council/' + this.$route.params.id + '/dashboard').then(res => {
      const data = res.data;
      this.council = data;
    });
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
