<template>
  <div>
    <div class="top"></div>
    <div class="event-cards">
      <v-container grid-list-md>
        <div id="page-heading">
          <h1>Events</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis sequi explicabo nobis iste rerum maiores ipsum esse facilis atque doloribus exercitationem nihil, non at laudantium tenetur optio dicta amet mollitia. Illum, alias fugit culpa nemo veritatis ex possimus iusto placeat quae est sit neque dolores repellendus iure impedit, atque qui. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis sequi explicabo nobis iste rerum maiores ipsum esse facilis atque doloribus exercitationem nihil, non at laudantium tenetur optio dicta amet mollitia. Illum, alias fugit culpa nemo veritatis ex possimus iusto placeat quae est sit neque dolores repellendus iure impedit, atque qui.</p>
        </div>
        <v-layout row wrap>
          <v-flex v-for="event in events" :key="event.title" xs12 md6 lg3>
            <v-card>
              <v-img src="../../assets/test.jpg"></v-img>
              <v-card-title primary-title>
                <div class="text-xs-center">
                  <h3 class="headline mb-0">{{event.title}}</h3>
                  <div class="grey--text mb-2">{{event.host}}</div>
                  <p>{{event.description}}</p>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn class="mx-auto" :to="event.link" flat color="indigo">Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllEvents',
  data: () => ({
    events: [
      {
        title: 'Synergy',
        host: 'Students Council',
        image: '../../assets/test.jpg',
        link: '#',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quis, quia nihil veniam quaerat molestias dolores in delectus adipisci.',
      },
      {
        title: 'Euphoria',
        host: 'Students Council',
        image: '../../assets/test.jpg',
        link: '#',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quis, quia nihil veniam quaerat molestias dolores in delectus adipisci. Fuga, nostrum rerum! Quas commodi accusantium sit consequatur nam sapiente, labore iste temporibus deleniti veniam voluptatem natus dolore amet architecto exercitationem.',
      },
      {
        title: 'Crescendo',
        host: 'Students Council',
        image: '../../assets/test.jpg',
        link: '#',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quis, quia nihil veniam quaerat molestias dolores in delectus adipisci. Fuga, nostrum rerum! Quas commodi accusantium sit consequatur nam sapiente, labore iste.',
      },
      {
        title: 'Athlos',
        host: 'Students Council',
        image: '../../assets/test.jpg',
        link: '#',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quis, quia nihil veniam quaerat molestias dolores in delectus adipisci. Fuga, nostrum rerum! Quas commodi accusantium sit consequatur.',
      },
      {
        title: 'CRMD',
        host: 'Students Council',
        image: '../../assets/test.jpg',
        link: '#',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quis, quia nihil veniam quaerat molestias dolores in delectus adipisci. Fuga, nostrum rerum! Quas commodi accusantium sit consequatur nam sapiente, labore iste temporibus deleniti veniam voluptatem natus dolore amet architecto exercitationem fuga facere nesciunt.',
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
#page-heading {
  text-align: center;
  color: #808080;
  h1 {
    font-weight: 700;
    color: #3949ab;
    font-size: 2em;
  }
}
</style>
