import axios from 'axios'

const BASE_URL = 'http://localhost:3000' // tu backend

export async function createTransaction(payload) {
  const response = await axios.post(`${BASE_URL}/transactions`, payload)
  return response.data
}

export async function sendToWompi({ transaction }) {
  // aquí llamas a la API sandbox de Wompi
  return { success: true } // simulado
}
