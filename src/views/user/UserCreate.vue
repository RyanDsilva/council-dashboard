<template>
  <div id="user-add" >
   <v-container>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center">
      <v-card raised ripple class="mx-auto my-5 card-wrapper">
            <v-card-text class="form-content">
              <h1 class="header">Register</h1>
              <v-form>
                <v-text-field v-model="name" type="text" label="Username" required></v-text-field>
                <v-text-field v-model="email" type="email" label="Email" required></v-text-field>
                <v-text-field v-model="phone" type="number" label="Contact" required></v-text-field>
                <v-text-field v-model="rollno" type="number" label="Roll No" required></v-text-field>
                
                <v-flex xs14 sm10 d-flex >
                  <v-select class="year"
                      :items="items"
                      label="Year"
                   ></v-select>
                
                  <v-select class="branch"
                      :items="options"
                      label="Branch"
                   ></v-select>
             
                </v-flex>
                
          
                
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
      items: ['FE', 'SE', 'TE', 'BE'],
      options: ['CS','IT','ELEX','PROD'],
      name: '',
      email:'',
      phone:'',
      rollno:'',

    })
  }


</script>

<style scoped lang="scss">
.header{
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

.year{
  padding-left: 5em;
}

.branch{
  padding-left: 3em;
}

</style>
