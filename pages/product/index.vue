<template>
  <div class="product ma-2">
    <h3 class="subheading grey--text"> List Product Item</h3>
    <v-container class="my-5">
      <v-data-table :headers="headers"
                    :items="products[0]"
                    :items-per-page="4"
                    class="elevation-1">
        <template #item.thumbnail="{item}">
          <v-img :src="item.thumbnail" max-width="100"></v-img>
        </template>
        <template #item.actions="{item}">
          <v-icon @click="edit(item._id)">mdi-pencil</v-icon>
          <v-icon small @click="del(item._id)">mdi-delete</v-icon>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        headers: [
          {text: 'image', sortable: false, value: 'thumbnail'},
          {text: 'title', value: 'title'},
          {
            text: 'description',
            sortable: false,
            value: 'description',
            width: '400px',
            fixed: true,
          },
          {text: 'price', value: 'price'},
          {text: 'quantity', value: 'quantity'},
          {text: 'actions', sortable: false, value: 'actions'},
        ],

      }
    },
    computed: {
      products() {
        return this.$store.getters.getAllProducts
      },
      ...mapGetters({products: "getAllProducts"})
    },
    mounted() {
    },
    methods: {
      edit(item) {
        // eslint-disable-next-line no-console
        console.log(item)
      },
      del(item) {
        // eslint-disable-next-line no-console
        console.log(this.$root)
      },
    }
  }
</script>

