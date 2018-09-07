<template>
  <div>
    <div class="top"></div>
    <div class="event-cards">
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 md6 lg4 class="mx-2 my-2" v-for="event in events" :key="event.title">
            <v-card>
              <img class="event-card-image" :src=event.image />
              <v-card-title primary-title>
                <div>
                  <div class="headline">{{event.title}}</div>
                  <span class="grey--text">{{event.host}}</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat color="indigo" :to=event.link>Register</v-btn>
                <v-spacer></v-spacer>
                <v-btn icon @click="show = !show">
                  <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-slide-y-transition>
                <v-card-text v-show=event.show>
                  {{event.description}}
                </v-card-text>
              </v-slide-y-transition>
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
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quis, quia nihil veniam quaerat molestias dolores in delectus adipisci. Fuga, nostrum rerum! Quas commodi accusantium sit consequatur nam sapiente, labore iste temporibus deleniti veniam voluptatem natus dolore amet architecto exercitationem fuga facere nesciunt soluta quae ducimus placeat perspiciatis vitae dignissimos.',
        show: false,
      },
      {
        title: 'Euphoria',
        host: 'Students Council',
        image: '../../assets/test.jpg',
        link: '#',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quis, quia nihil veniam quaerat molestias dolores in delectus adipisci. Fuga, nostrum rerum! Quas commodi accusantium sit consequatur nam sapiente, labore iste temporibus deleniti veniam voluptatem natus dolore amet architecto exercitationem fuga facere nesciunt soluta quae ducimus placeat perspiciatis vitae dignissimos.',
        show: false,
      },
      {
        title: 'Crescendo',
        host: 'Students Council',
        image: '../../assets/test.jpg',
        link: '#',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quis, quia nihil veniam quaerat molestias dolores in delectus adipisci. Fuga, nostrum rerum! Quas commodi accusantium sit consequatur nam sapiente, labore iste temporibus deleniti veniam voluptatem natus dolore amet architecto exercitationem fuga facere nesciunt soluta quae ducimus placeat perspiciatis vitae dignissimos.',
        show: false,
      },
      {
        title: 'Athlos',
        host: 'Students Council',
        image: '../../assets/test.jpg',
        link: '#',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quis, quia nihil veniam quaerat molestias dolores in delectus adipisci. Fuga, nostrum rerum! Quas commodi accusantium sit consequatur nam sapiente, labore iste temporibus deleniti veniam voluptatem natus dolore amet architecto exercitationem fuga facere nesciunt soluta quae ducimus placeat perspiciatis vitae dignissimos.',
        show: false,
      },
      {
        title: 'CRMD',
        host: 'Students Council',
        image: '../../assets/test.jpg',
        link: '#',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quis, quia nihil veniam quaerat molestias dolores in delectus adipisci. Fuga, nostrum rerum! Quas commodi accusantium sit consequatur nam sapiente, labore iste temporibus deleniti veniam voluptatem natus dolore amet architecto exercitationem fuga facere nesciunt soluta quae ducimus placeat perspiciatis vitae dignissimos.',
        show: false,
      },
    ],
  }),
};
</script>

<style scoped>
</style>
