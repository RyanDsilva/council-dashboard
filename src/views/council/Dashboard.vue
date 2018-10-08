<template>

  <div class="council-dashboard">
    <v-container grid-list-md>
      <div class="profile">
        <div>
          <v-layout row wrap align-center>
            <v-flex xs10 sm3 offset-sm0>
              <v-card id="extra" raised ripple class="mx-auto my-5 card-wrapper">
                <v-btn class="dustbin" small absolute dark color="indigo" @click="deleteCouncil">
                  <v-icon>delete</v-icon>DELETE COUNCIL
                </v-btn>
                <v-avatar class="icon" size="230px">
                  <img src="../../assets/icon.jpg">
                </v-avatar>
                
                <span class="heading">Council Name</span>
                
                
                <v-flex id="social" class="justify-center">
                  <v-btn id="face" class="white--text" icon color="indigo">
                    <v-icon>fab fa-facebook</v-icon>
                  </v-btn>
                  <v-span></v-span>
                  <v-btn class="white--text" icon color="red lighten-3">
                    <v-icon>fab fa-instagram</v-icon>
                  </v-btn>

                </v-flex>
              </v-card>
            </v-flex>
          </v-layout>
        </div>


      </div>
      <div class="members">
        <div>
          <v-layout column wrap align-center>
            <v-flex class="memb" xs12 sm6 offset-sm6>
              <v-card raised ripple class="mx-auto my-5 card-wrapper">
                <v-toolbar color="indigo" dark>
                  <v-toolbar-title>MEMBERS</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-layout>
                  <v-flex>
                    <v-card color="#e4e3f7">
                      <v-list-tile>
                        <v-list-tile-avatar color="indigo" xs5>
                          <v-icon dark>account_circle</v-icon>
                        </v-list-tile-avatar>
                        <h2>user</h2>
                        <span></span>
                        <v-btn flat icon right color="indigo">
                          <v-icon>delete</v-icon>
                        </v-btn>
                      </v-list-tile>
                    </v-card>
                  </v-flex>
                </v-layout>
                <v-card-actions>
                  <v-btn class="addmem" dark color="indigo" @click="newMembers"> Add Members
                    <v-icon>fas fa add</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </div>
      </div>

      <div class="description">
        <v-layout row wrap align-left>
          <v-flex xs12 sm6 offset-sm0>
            <v-card width="780px" raised ripple class="mx-auto my-5 card-wrapper">
              <v-card-title primary-title>
                <div>
                  <h2 class="headline mb-0">Description</h2>
                  <v-flex  v-for="council in councils" :key="council.description">
                  <div>{{council.description}}</div>
                  </v-flex>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-layout row justify-center>
                  <v-dialog v-model="dialog" persistent max-width="500px">
                    <v-btn slot="activator" absolute dark fab bottom right color="indigo">
                      <v-icon>edit</v-icon>
                    </v-btn>
                    <v-card>
                      <v-card-title>
                        <span class="headline">Council Description</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container grid-list-md>
                          <v-layout wrap>
                            <v-flex xs12>
                              <v-text-field label="Username" required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                              <v-text-field label="Council Name" required=""></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                              <v-textarea label="Council Description" hint="Detailed Council Description preffered."></v-textarea>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
                        <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-layout>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
      <div class="eventsDisplayed">
        <v-layout row wrap align-left>
          <v-flex xs12 sm6 offset-sm0>
            <v-card width="780px" raised ripple class="mx-auto my-5 card-wrapper">
              <v-card-title primary-title>
                <div>
                  <h2 class="headline mb-0">Your Events</h2>
                  <div>These are the events</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn absolute dark fab bottom right color="indigo" @click="addEvent">
                  <v-icon>add</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>

      </div>

    </v-container>
  </div>

</template>

<script>
  import axios from 'axios';
  export default {
    name: 'Dashboard',
    data: () => ({
      dialog: false,
      users:[],
      councils:[],
      error:'',


    }),
    methods: {
      addEvent() {
        axios
          // eslint-disable-next-line
          .put('/event/' + this.$route.params.id + '/edit', {
            event: this.event
          })
          .then(this.$router.push('/event/all'))
          .catch(err => {
            this.error = err.message;
          });
    },
    deleteCouncil() {
      axios
      .delete('/council/' + this.$route.params.id + '/delete',{
        council:this.council
      })
      .then(this.$router.push('/council/login'))
      .catch(err => {
            this.error = err.message;
        });
      },
    },
};

 

</script>

<style scoped lang="scss">
  .members {
    align: right;
    float: right;
  }

  .etc {
    width: 190px;
    height: 190px;

  }

  #extra {
    height: 220px;
    width: 1000px;
  }


  .icon {
    padding-bottom: 120px;
    padding-left: 40px;

  }

  .heading {
    margin-left: 100px;
    font-size: 60px;
  }

  .memb {
    width: 360px;
  }

  .addmem {
    width: 337px;

  }

  #social {
    float: right;
    margin-top: 120px;
    margin-right: 124px;
  }

  .dustbin {
    margin-left: 820px;
  }

</style>
