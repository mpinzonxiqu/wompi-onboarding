<template>
  <form @submit.prevent="nextStep">
    <input v-model="client.name" placeholder="Nombre completo" required />
    <input v-model="client.address" placeholder="Dirección" required />
    <input v-model="client.phone" placeholder="Teléfono" required />
    <button>Continuar</button>
  </form>
</template>

<script setup>
import { useStore } from 'vuex'
import { reactive } from 'vue'

const emit = defineEmits(['next'])
const store = useStore()

const client = reactive({ name: '', address: '', phone: '' })

function nextStep() {
  store.commit('setClientInfo', client)
  emit('next')
}
</script>
