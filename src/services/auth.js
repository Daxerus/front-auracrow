import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

async function validateToken(token) {
  try {
    await apiClient.get('/admin', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
        'ngrok-skip-browser-warning': true
      }
    })
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

export { validateToken }
