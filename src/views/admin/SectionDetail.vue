<template>
  <v-container>
    <h1 class="text-h2">Publicaciones de {{ sectionMappings[section] }}</h1>
    <v-row justify="center">
      <v-col v-for="entry in entries" :key="entry.id" cols="12" sm="6" md="4">
        <v-card class="pa-2 mb-4">
          <v-row justify="center">
            <v-img :src="entry.thumbnail_path" height="200"></v-img>
          </v-row>
          <v-row justify="center">
            <p class="entry-name">
              {{ entry.name }}
            </p>
          </v-row>
          <v-row justify="center">
            <v-btn @click="editEntry(entry)" color="#A0F860">Editar</v-btn>
            <v-btn @click="deleteEntry(entry)" color="error">Eliminar</v-btn>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row block justify="space-around">
      <v-btn @click="goMain" color="#7C17EA">Volver al menú principal</v-btn>
      <v-btn @click="goBack" color="#7C17EA">Volver al selector de sección</v-btn>
    </v-row>

    <!-- Modal para editar entrada -->
    <v-dialog v-model="editDialog" max-width="600px">
      <template v-slot:activator="{}"></template>
      <v-card>
        <v-card-title>Editar Entrada</v-card-title>
        <v-card-text>
          <v-text-field v-model="editedEntry.name" label="Nombre"></v-text-field>
          <v-textarea v-model="editedEntry.description" label="Description"></v-textarea>
          <v-select v-model="editedEntry.type" :items="types" label="Type"></v-select>
          <v-text-field v-model="editedEntry.path" label="Path"></v-text-field>
          <v-text-field v-model="editedEntry.thumbnail_path" label="Thumbnail Path"></v-text-field>
          <v-checkbox v-model="editedEntry.project" label="Project"></v-checkbox>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="saveEdit">Guardar</v-btn>
          <v-btn color="error" @click="closeEditModal">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { saveEdit, deleteEntry, fetchEntries, getEntry } from '@/services/dashboard'

export default {
  data() {
    return {
      section: this.$route.params.section,
      entries: [], // Aquí se almacenarán las entradas de la sección seleccionada
      editDialog: false,
      editedEntry: {
        name: '',
        description: '',
        type: '',
        path: '',
        thumbnail_path: '',
        project: false
      },
      editedEntryId: '',
      types: ['personajes', 'comic', 'animacion2d', 'animacion3d', 'concept', 'diseño']
    }
  },
  computed: {
    sectionMappings() {
      return {
        personajes: 'Diseño de personajes',
        comic: 'Ilustración y cómic',
        animacion2d: 'Animación 2D y motion graphics',
        animacion3d: 'Animación 3D',
        concept: 'Concept y storyboard',
        diseño: 'Diseño gráfico y UI'
      }
    }
  },

  methods: {
    async editEntry(entry) {
      const response = await getEntry(entry)
      this.editedEntry = response.data
      this.editedEntryId = this.editedEntry.id
      delete this.editedEntry.id
      this.editDialog = true
      console.log('Entrada a editar obtenida:', this.editedEntry)
    },
    async saveEdit() {
      const response = await saveEdit(this.editedEntry, this.editedEntryId)

      if (response.ok) {
        console.log('Entrada editada:', response.data)
      }
      this.editDialog = false

      await this.fetchEntries()
    },
    closeEditModal() {
      this.editDialog = false
    },

    async deleteEntry(entry) {
      const confirmed = window.confirm(
        `¿Estás seguro de querer eliminar la publicación ${entry.name}?`
      )
      if (confirmed) {
        await deleteEntry(entry)
        this.entries = this.entries.filter((item) => item.id !== entry.id)
      }
    },

    goMain() {
      this.$router.push({ name: 'Dashboard' })
    },
    goBack() {
      this.$router.push({ name: 'ManageEntries' })
    },

    async fetchEntries() {
      const response = await fetchEntries(this.section)
      this.entries = response.data
    }
  },
  mounted() {
    this.fetchEntries()
  }
}
</script>

<style scoped>
.text-h2 {
  margin-bottom: 20px;
}
.entry-name {
  overflow-wrap: break-word;
}
</style>
