/* // auth.js
import axios from 'axios'

let isAuthenticated = false

export async function login(username, password) {
  try {
    const formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)

    const response = await axios.post(`${import.meta.env.VITE_API_URL}/token`, formData)

    isAuthenticated = true
    return response.data
  } catch (error) {
    console.error('Error durante el inicio de sesión:', error.response.data)
    throw new Error('Error de inicio de sesión')
  }
}

export function logout() {
  isAuthenticated = false
}

export function isAuthenticated() {
  return isAuthenticated
}
 */
