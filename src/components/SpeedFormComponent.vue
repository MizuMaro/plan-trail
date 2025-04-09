<script setup lang="ts">
import {useSpeedStore} from "@/stores/speedStore.ts";

const speedStore = useSpeedStore();
const emit = defineEmits(['calculate']);
</script>

<template>
  <v-container class="ma-auto">
    <div class=" d-flex flex-row justify-sm-center align-center ga-3 align-content-center">
        <v-number-input
          v-model="speedStore.speed"
          label="Vitesse moyenne (km/h)"
          type="number"
          outlined
          dense
          :rules="[v => !!v || 'Vitesse requise']"
          :max="25"
          :min="0"
          max-width="300"
        />
        <v-btn color="primary" @click="emit('calculate')">Calculer le trajet</v-btn>
    </div>
  </v-container>
</template>

<style scoped>

</style>
