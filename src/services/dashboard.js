import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.request.use(function (config) {
  const authStore = useAuthStore()
  config.headers['Authorization'] = authStore.token

  return config
})

async function submitEntry(entry) {
  try {
    await apiClient.post('/entries', entry)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

async function getEntry(entry) {
  try {
    return await apiClient.get(`/entries/${entry.id}`, {
      headers: {
        'ngrok-skip-browser-warning': true
      }
    })
  } catch (error) {
    console.log('Error al obtener la entrada para editar: ', error)
    return false
  }
}

async function saveEdit(entry, id) {
  try {
    return await apiClient.put(`/entries/${id}`, entry)
  } catch (error) {
    console.log('Error al guardar la entrada editada: ', error)
  }
}

async function deleteEntry(entry) {
  try {
    return await apiClient.delete(`/entries/${entry.id}`)
  } catch (error) {
    console.log('Error al borrar la entrada: ', error)
  }
}

async function fetchEntries(section) {
  try {
    const response = await apiClient.get(`/entries/type/${section}`, {
      headers: {
        'ngrok-skip-browser-warning': true
      }
    })
    console.log('Respuesta del servidor:', response.data)
    return response
  } catch (error) {
    console.error('Error al obtener las publicaciones', error)
  }
}

export { submitEntry, getEntry, saveEdit, deleteEntry, fetchEntries }
