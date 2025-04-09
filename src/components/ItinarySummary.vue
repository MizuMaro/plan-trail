<script setup lang="ts">
import {useItinaryStore} from "@/stores/itinaryStore.ts";

const itinaryStore = useItinaryStore();


</script>

<template>
  <v-card>
    <v-card-title>
      <h2>Résumé de l'itinéraire</h2>
    </v-card-title>
    <v-card-text>
      <p><strong>Distance totale :</strong> {{ itinaryStore.itinary.distance }} km</p>
      <p><strong>Durée totale :</strong> {{ itinaryStore.itinary.duration / 3600 }} heures</p>
        //liste des etapes
        <ul>
          <li v-for="(step, index) in itinaryStore.steps" :key="index">
            {{ step.name }} - {{ step.distance }} km
          </li>
        </ul>
    </v-card-text>
  </v-card>

</template>

<style scoped>

</style>
