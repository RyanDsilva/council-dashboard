<template>
  <div>
    <section id="hero-kollab">
      <v-container>
        <v-layout row wrap>
          <v-flex sm12 md6>
            <div id="title-heading">
              <h1>KOLLAB</h1>
              <h3 class="subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perferendis? Iure quam ducimus, a nam quia quasi nemo illo harum nihil maiores corrupti molestias ipsum aliquid quo! Dolor, quae molestiae!</h3>
              <br>
              <v-btn to="/event/all" large color="deep-purple darken-1" raised dark>Search For Interesting Events!</v-btn>
              <br>
          </div>
          </v-flex>
          <v-flex sm12 md6>
            <v-img src="../assets/svg/hero.svg"></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <br>
    <section id="kollab-content">
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12>
            <h1>Test Content</h1>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Index',
};
</script>

<style scoped lang="scss">
#hero-kollab {
  background-image: url('../assets/img/welcome-bg.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 10em;
}
#title-heading {
  margin-top: 9em;
  text-align: center;
  h1 {
    font-size: 5em;
    color: #ffffff;
    padding: 0.1rem;
  }
  .subheading {
    color: #e4e4e4;
  }
}
@media only screen and (max-width: 600px) {
  #title-heading {
    margin: auto;
  }
}
#kollab-content {
}
</style>
