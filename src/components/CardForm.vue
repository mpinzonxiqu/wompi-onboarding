<template>
  <form @submit.prevent="nextStep">
    <input v-model="card.number" placeholder="Número de tarjeta" required />
    <input v-model="card.name" placeholder="Nombre" required />
    <input v-model="card.expiry" placeholder="MM/YY" required />
    <input v-model="card.cvc" placeholder="CVC" required />
    <button>Continuar</button>
  </form>
</template>

<script setup>
import { useStore } from 'vuex'
import { reactive } from 'vue'

const emit = defineEmits(['next'])
const store = useStore()

const card = reactive({ number: '', name: '', expiry: '', cvc: '' })

function nextStep() {
  store.commit('setCardInfo', card)
  emit('next')
}
</script>
