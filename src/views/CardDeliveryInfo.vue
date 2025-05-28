<template>
  <div class="page">
    <h2>Información de tarjeta</h2>
    <CardForm @next="goToSummary" />

    <h2>Información de entrega</h2>
    <DeliveryForm @next="goToSummary" />
  </div>
</template>

<script setup>
import CardForm from '../components/CardForm.vue'
import DeliveryForm from '../components/DeliveryForm.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToSummary() {
  router.push('/summary')
}
</script>
