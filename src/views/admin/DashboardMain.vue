<template>
  <v-container>
    <v-row justify="center">
      <h1 class="text-h2">Panel de Control</h1>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-btn block color="#7C17EA" @click="goToAddEntry">Añadir nueva publicación</v-btn>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-btn block color="#7C17EA" @click="goToManageEntries">Administrar publicaciones</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    goToAddEntry() {
      this.$router.push({ name: 'AddEntry' })
    },
    goToManageEntries() {
      this.$router.push({ name: 'ManageEntries' })
    }
  }
}
</script>

<style scoped>
.text-h2 {
  margin: 2rem 0;
}
</style>
