<template>
  <div id="user-add" >
   <v-container>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center">
      <v-card raised ripple class="mx-auto my-5 card-wrapper">
            <v-card-text class="form-content">
              <h1 class="whitu">Register</h1>
              <v-form>
                <v-text-field type="text" label="Username" required></v-text-field>
                <v-text-field type="email" label="Email" required></v-text-field>
                <v-text-field type="number" label="Contact" required></v-text-field>
                <v-text-field type="number" label="Roll No" required></v-text-field>
                <v-text-field type="text" label="Year" required></v-text-field>
                <v-text-field type="text" label="Branch" required></v-text-field>
                <div>
                <v-btn color="indigo" dark>Done</v-btn>
                </div>  
              </v-form>
              
            </v-card-text>
          </v-card>
       
      </v-flex>
    </v-layout>
  </v-container>                                                                                                                                                                                                                                                                            o                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
  </div>

</template>

<script>
import axios from 'axios';
export default {
  name: 'UserCreate',
  methods: {
    done() {
      axios
        .put('/user/' + this.$route.params.id + '/edit', { user: this.user })
        .then(this.$router.push('/event/all'))
        .catch(err => {
          this.error = err.message;
        });
    },
  },
};
</script>

<style scoped lang="scss">
.whitu{
  font-weight: 700;
  color: #39499f;

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
