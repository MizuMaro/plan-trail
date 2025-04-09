import {defineStore} from "pinia";

export const useSpeedStore = defineStore('speed', {
  state: () => ({
    speed: null as number | null,
  }),
  actions: {
    resetSpeed() {
      this.speed = null;
    },
  },
});
