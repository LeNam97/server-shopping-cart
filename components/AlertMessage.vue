<template>
  <div>
    <v-layout row align-center>
      <v-flex >
        <v-alert dismissible type="success" max-width="300">
          đây là mes
        </v-alert>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogMessage: true,
      }
    },
  }
</script>
