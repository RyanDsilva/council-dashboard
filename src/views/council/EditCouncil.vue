<template>
  <div class="council-edit">
    <v-container class="wrapper" grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 class="text-xs-center">
          <h2 class="new-header text-xs-center">Edit {{council.name}}</h2>
          <v-form ref="form" lazy-validation>
            <v-text-field v-model="council.name" label="Name of the Council" required></v-text-field>
            <v-textarea v-model="council.description" label="Council Description" hint="Detailed Council Description preffered."></v-textarea>
            <div class="my-2 mx-auto">
              <v-btn @click="submit" color="indigo" dark>Edit Council</v-btn>
            </div>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
</style>
