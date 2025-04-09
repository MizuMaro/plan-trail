<script setup lang="ts">
  import SpeedFormComponent from "@/components/SpeedFormComponent.vue";
  import ItinarySummary from "@/components/ItinarySummary.vue";
  import MapContainerComponent from "@/components/MapContainerComponent.vue";
  import {useItinary} from "@/composables/useItinary.ts";
  import {useItinaryStore} from "@/stores/itinaryStore.ts";


  const { calculateRoute } = useItinary();

  const itinaryStore = useItinaryStore();

  const handleCalculate = async () => {
    try {
      const itinary = await calculateRoute();
      console.log("Itinéraire calculé :", itinary);
    } catch (error) {
      console.error("Erreur lors du calcul :", error);
    }
  };
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-row>
          <h1>Planificateur de Trail</h1>
        </v-row>
        <v-row>
          <speed-form-component @calculate="handleCalculate" />
        </v-row>
        <v-row>
          <map-container-component />
        </v-row>
      </v-col>
      <v-col cols="4" v-if="itinaryStore.showItinary">
        <transition name="fade">
          <itinary-summary />
        </transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
</style>
