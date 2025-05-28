<template>
  <div class="page">
    <h2>Resumen del pago</h2>
    <p>Producto: {{ product?.name }}</p>
    <p>Precio base: ${{ product?.price }}</p>
    <p>Tarifa base: $3000</p>
    <p>Envío: $5000</p>
    <p><strong>Total: ${{ total }}</strong></p>

    <button @click="handlePayment">Pagar ahora</button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { createTransaction, sendToWompi } from '../services/payment'

const store = useStore()
const router = useRouter()

const product = computed(() => store.state.product)
const total = computed(() => product.value.price + 3000 + 5000)

async function handlePayment() {
  const tx = await createTransaction({ amount: total.value })
  store.commit('setTransaction', tx)

  const result = await sendToWompi({ transaction: tx })
  store.commit('setPaymentStatus', result.success ? 'SUCCESS' : 'FAIL')

  router.push('/result')
}
</script>
