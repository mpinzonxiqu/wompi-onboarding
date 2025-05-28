<template>
  <div class="page">
    <h2>Resultado del pago</h2>
    <p v-if="status === 'SUCCESS'">✅ ¡Pago exitoso!</p>
    <p v-else>❌ Error en el pago</p>

    <router-link to="/">Volver al producto</router-link>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const status = computed(() => store.state.paymentStatus)
</script>
