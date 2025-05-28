<template>
  <div class="page">
    <h1>{{ product?.name }}</h1>
    <p>Precio: ${{ product?.price }}</p>
    <p>Stock: {{ stock }}</p>
    <button @click="goToInfo">Pagar con tarjeta</button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { onMounted, computed } from 'vue'

const store = useStore()
const router = useRouter()

const product = computed(() => store.state.product)
const stock = computed(() => store.state.stock)

onMounted(() => {
  store.commit('setProduct', { name: 'Producto X', price: 35000 })
  store.commit('setStock', 10)
})

function goToInfo() {
  router.push('/info')
}
</script>

<style scoped>
.page {
  padding: 1rem;
}
</style>
