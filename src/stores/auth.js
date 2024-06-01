import { defineStore } from 'pinia'

import { validateToken } from '@/services/auth'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    token: '',
    authenticated: false
  }),
  actions: {
    setToken(tokenData) {
      this.token = `${tokenData.token_type} ${tokenData.access_token}`
      sessionStorage.setItem('token', this.token)
      this.authenticated = true
    },
    async fetchToken(username, password) {
      const formData = new FormData()
      formData.append('username', username)
      formData.append('password', password)

      const requestOptions = {
        method: 'POST',
        body: formData
      }

      try {
        console.log(requestOptions)
        //
        const response = await fetch(`${import.meta.env.VITE_API_URL}/token`, requestOptions)
        if (!response.ok) {
          console.log(requestOptions)
          throw new Error(`HTTP error:  $(response.status)`)
        }
        const result = await response.json()
        console.log(result)

        this.setToken(result)
        return true
      } catch (error) {
        console.log(requestOptions)
        console.error('Error al recuperar el token:', error)
        return false
      }
    },
    getTokenFromStore() {
      this.token = sessionStorage.getItem('token')

      if (this.token) {
        return true
      } else {
        return false
      }
    },

    readToken() {
      // TODO
      // ELIMINAR ESTO DESPUES DE IMPLEMENTAR AXIOS
      console.log('Token leído:', this.token)
      return this.token
    },
    async isAuthenticated() {
      if (!this.authenticated) {
        if (!this.token) {
          this.getTokenFromStore()
        }
        const validToken = await validateToken(this.token)
        if (validToken) {
          this.authenticated = true
          return true
        } else return false
      }
      return true
    }
  }
})
