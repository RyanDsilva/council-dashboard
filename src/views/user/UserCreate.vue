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
               
                <div class="apple">
                  <v-menu offset-y>
                     <v-btn
                      slot="activator"
                      color="indigo"
                      dark
                     >
                    Year
                    </v-btn>
                 <v-list>
                  <v-list-tile
                    v-for="(item, index) in items"
                      :key="index"
                      @click=""
                      >
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile>
                 </v-list>
              </v-menu>
             
             
                  <v-menu offset-y>
                     <v-btn
                      slot="activator"
                      color="indigo"
                      dark
                     >
                    Branch
                    </v-btn>
                 <v-list>
                  <v-list-tile
                    v-for="(option, index) in options"
                      :key="index"
                      @click=""
                      >
                  <v-list-tile-title>{{ option.title }}</v-list-tile-title>
                  </v-list-tile>
                 </v-list>
              </v-menu>
             </div>
          
                
                <v-btn class="banana" color="indigo" dark>Done</v-btn>
                
              </v-form>
              
            </v-card-text>
      </v-card>
       
      </v-flex>
    </v-layout>
  </v-container>                                                                                                                                                                                                                                                                            o                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
  </div>

</template>

<script>


export default {
    data: () => ({
      items: [
        { title: 'FE' },
        { title: 'SE' },
        { title: 'TE' },
        { title: 'BE' }
      ],

      options: [
        { title: 'CS' },
        { title: 'IT' },
        { title: 'ELEX' },
        { title: 'PROD' }

      ]
    })
  }
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

.apple{
  padding-left: 0.1em;
}

.banana{
  margin-top: 2em;
}
</style>
