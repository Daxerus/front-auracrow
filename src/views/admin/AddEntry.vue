<template>
  <v-container>
    <h1 class="text-h2">Añadir nueva publicación</h1>
    <v-form @submit.prevent="submitEntry">
      <v-text-field v-model="entry.name" label="Name" outlined required></v-text-field>
      <v-textarea v-model="entry.description" label="Description" outlined required></v-textarea>
      <v-select v-model="entry.type" :items="types" label="Type" outlined required></v-select>
      <v-text-field v-model="entry.path" label="Path" outlined required></v-text-field>
      <v-text-field
        v-model="entry.thumbnail_path"
        label="Thumbnail Path"
        outlined
        required
      ></v-text-field>
      <v-checkbox v-model="entry.project" label="Project"></v-checkbox>
      <v-btn type="submit" color="primary">Submit</v-btn>
    </v-form>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-btn block color="primary" @click="goToDashboard">Volver al menú principal</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { submitEntry } from '@/services/dashboard'

export default {
  data() {
    return {
      entry: {
        name: '',
        description: '',
        type: '',
        path: '',
        thumbnail_path: '',
        project: false
      },
      types: ['personajes', 'comic', 'animacion2d', 'animacion3d', 'concept', 'diseño']
    }
  },
  methods: {
    async submitEntry() {
      const response = await submitEntry(this.entry)
      if (response) {
        alert('Publicación creada con éxito')
        this.goToDashboard()
      } else {
        alert('Error al crear la publicación')
      }
    },
    goToDashboard() {
      this.$router.push({ name: 'Dashboard' })
    }
  }
}
</script>

<style>
.text-h2 {
  margin: 2rem 0;
}

.v-selection-control__input input {
  opacity: 1;
}
</style>
