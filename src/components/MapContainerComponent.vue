<script setup>
import { ref, onMounted } from 'vue';
import "leaflet/dist/leaflet.css";
import * as L from 'leaflet';
import {useMapStore} from "@/stores/mapStore.js";
import { watch } from 'vue';

const initialMap = ref(null);
const mapStore = useMapStore();

const initializeMap = () => {
  initialMap.value = L.map('map').setView([48.858093, 2.294694], 13);
};

const addTileLayer = () => {
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(initialMap.value);
};

const addStartMarker = () => {
  if (mapStore.start) {
    L.marker([mapStore.start.lat, mapStore.start.lng]).addTo(initialMap.value);
  }
};

const addMapClickListener = () => {
  initialMap.value.on('click', (click) => {
    const { lat, lng } = click.latlng;
    mapStore.setEnd(lat, lng);
    if (initialMap.value._lastMarker) {
      initialMap.value.removeLayer(initialMap.value._lastMarker);
    }
    const marker = L.marker([lat, lng]).addTo(initialMap.value);
    initialMap.value._lastMarker = marker;
  });

};

onMounted(() => {
  initializeMap();
  addTileLayer();
  addStartMarker();
  addMapClickListener();
});

watch(() => mapStore.polyline, (newPolyline) => {
  if (newPolyline && initialMap.value) {
    initialMap.value.eachLayer((layer) => {
      if (layer instanceof L.Polyline) {
        initialMap.value.removeLayer(layer);
      }
    });
    const latLngs = newPolyline.map(coord => [coord.lat, coord.lng]);
    L.polyline(latLngs, { color: 'blue' }).addTo(initialMap.value);
  }
});

</script>

<template>
  <div id="map" style="height: 80vh; width: 80vh"></div>
</template>

<style scoped>
  #map {
    margin: 0 auto;
  }
</style>
