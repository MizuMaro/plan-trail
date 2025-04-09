import { defineStore } from 'pinia';
import type {Position} from "@/models/positionModel.ts";

export const useMapStore = defineStore('map', {
  state: () => ({
    start: { lat: 48.858093, lng: 2.294694 },
    end: null as Position | null,
    polyline: null as Position[] | null,
  }),
  actions: {
    setEnd(lat: number, lng: number) {
      this.end = { lat, lng };
    },
    setPolyline(coordinates: Position[]) {
      this.polyline = coordinates;
    }
  },
});
