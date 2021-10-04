<template>
  <v-app>
    <header>
      <Navbar></Navbar>
    </header>
    <v-main class="mt-3">
      <v-container fluid>
        <nuxt/>
        <Confirm ref="confirm"></Confirm>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import Navbar from '@/components/NavBar'
  import Confirm from "@/components/Confirm";
  export default {
    components: {
      Navbar,
      Confirm,
    },
    mounted() {
      this.$root.$confirm = this.$refs.confirm.open;
    }
  }
</script>
