<template>
  <div id="dashboard">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 align-center>
          <v-card>
            <v-card-title>
              Users
              <v-spacer></v-spacer>
              <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="users" :search="search">
              <template slot="items" slot-scope="props">
                <td class="text-xs-center">{{ props.item.rollNo }}</td>
                <td class="text-xs-center">{{ props.item.name }}</td>
                <td class="text-xs-center">{{ props.item.year }}</td>
                <td class="text-xs-center">{{ props.item.branch }}</td>
                <td class="text-xs-center">{{ props.item.phone }}</td>
                <td class="text-xs-center">{{ props.item.email }}</td>
              </template>
              <v-alert slot="no-results" :value="true" color="error" icon="warning">
                Your search for "{{ search }}" found no results.
              </v-alert>
            </v-data-table>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserInfo',
  // eslint-disable-next-line
  data() {
    return {
      users: [],
      search: '',
      headers: [
        { text: 'Roll No.', value: 'rollNo' },
        { text: 'Name', value: 'name' },
        { text: 'Year', value: 'year' },
        { text: 'Branch', value: 'branch' },
        { text: 'Contact', value: 'phone' },
        { text: 'Email', value: 'email' },
      ],
    };
  },
  created() {
    axios
      .get('/users/all')
      .then(res => {
        const data = res.data;
        // eslint-disable-next-line
        for (const userName in data) {
          const user = data[userName];
          this.users.push(user);
        }
      })
      .catch(err => {
        this.error = err.message;
      });
  },
};
</script>

<style scoped>
.rounded {
  border-radius: 50%;
}
</style>