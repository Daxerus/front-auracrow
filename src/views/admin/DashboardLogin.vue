<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title class="text-center">Login</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field v-model="username" label="Username" outlined required></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                outlined
                type="password"
                required
              ></v-text-field>
              <v-btn type="submit" color="#B340FF">Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

export default {
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()
    const username = ref('')
    const password = ref('')

    const login = async () => {
      if (await authStore.fetchToken(username.value, password.value)) {
        console.log('Respuesta del servidor: ', authStore.token)
        router.push({ name: 'Dashboard' })
      } else {
        alert('Credenciales incorrectos')
      }
    }

    return {
      username,
      password,
      login
    }
  }
}
</script>

<style scoped>
/* Estilos específicos del componente */
</style>
