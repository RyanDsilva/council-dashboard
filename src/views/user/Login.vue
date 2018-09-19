<template>
  <div id="login">
    <v-container class="wrapper" grid-list-md>
      <v-layout row wrap>
        <v-flex xs12>
          <h2 class="new-header text-xs-center">User Login</h2>
          <v-form ref="form" lazy-validation>
            <div class="my-2 mx-auto">
              <v-btn href="http://localhost:3000/auth/google" color="red" dark>Login With Google</v-btn>
            </div>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Login',
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
