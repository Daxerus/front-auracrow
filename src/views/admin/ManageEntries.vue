<template>
  <v-container>
    <v-row justify="center">
      <h1 class="text-h2">Gestionar Publicaciones</h1>
    </v-row>

    <v-row
      justify="center"
      v-for="(displayName, sectionName) in sectionMappings"
      :key="sectionName"
    >
      <v-col cols="12" sm="6" md="6">
        <v-btn block color="purple" @click="navigateToSection(sectionName)">
          {{ displayName }}
        </v-btn>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="6" md="6">
        <v-btn block color="green" @click="goToDashboard">Volver al menú principal</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      sectionMappings: {
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
    navigateToSection(section) {
      this.$router.push({ name: 'SectionDetail', params: { section } })
    },
    goToDashboard() {
      this.$router.push({ name: 'Dashboard' })
    }
  }
}
</script>

<style scoped>
.text-h2 {
  margin-bottom: 20px;
}
</style>
