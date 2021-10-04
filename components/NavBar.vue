<template>
  <nav>
    <v-app-bar app height="50px">
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer">
      </v-app-bar-nav-icon>
      <v-toolbar-title v-text="getTitleLink"></v-toolbar-title>
      <AlertMessage/>
      <v-spacer/>
      <v-btn elevation="0">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-card>
      <v-navigation-drawer v-model="drawer" app class="mx-auto"
                           max-width="250">
        <v-layout column align-center>
          <v-flex class="mt-5">
            <v-avatar size="100">
              <img
                src="https://anh.24h.com.vn/upload/3-2019/images/2019-07-02/1562038857-564-sieu-pham-ducati-panigale-v4r-gia-tren-2-ty-dong-sap-ve-viet-nam-panigale-v4r-4-1562038551-width660height505.jpg"
                alt="">
            </v-avatar>
            <p class="subheading mt-1 text-center">Admin</p>
          </v-flex>
        </v-layout>
        <v-list permanent>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item v-for="(link, index) in links" :key="index" nuxt-link
                         :to="link.router">
              <v-list-item-icon>
                <v-icon v-text="link.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="link.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </nav>
</template>

<script>
  import AlertMessage from "@/components/AlertMessage";
  export default {
    components: {
      AlertMessage,
    },
    data() {
      return {
        drawer: false,
        selectedItem: 0,
        links: [
          {icon: 'mdi-clock', text: 'Dashboards', router: '/dashboard'},
          {icon: 'mdi-calendar', text: 'Products', router: '/product'},
          {icon: 'mdi-account', text: 'Users', router: '/user'},
        ]
      }
    },
    computed: {
      getTitleLink() {
        return this.$route.name;
      }
    },
    methods: {}
  }
</script>
