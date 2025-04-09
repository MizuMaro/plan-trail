import { defineStore } from "pinia";
import type {Itinerary, Step} from "@/models/itinaryModel.ts";

export const useItinaryStore = defineStore("itinary", {
  state: () => ({
    showItinary: false,
    itinary: {
      steps: [],
      start: { lat: 0, lng: 0 },
      end: { lat: 0, lng: 0 },
      duration: 0,
      distance: 0,
    } as Itinerary
  }),
  actions: {
    addStep(steps: Step) {
      this.itinary.steps.push(steps);
    },
    resetStep() {
      this.itinary.steps = [];
    },
    setDuration(duration: number) {
      this.itinary.duration = duration;
    },
    setDistance(distance: number) {
      this.itinary.distance = distance;
    },
  },
});
