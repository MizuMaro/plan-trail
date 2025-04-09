import { useMapStore } from "@/stores/mapStore.js";
import { useSpeedStore } from "@/stores/speedStore.ts";
import { calculateItinary } from "@/services/itinaryService";

export function useItinary() {
  const mapStore = useMapStore();
  const speedStore = useSpeedStore();

  const validateInputs = () => {
    if (!mapStore.end) {
      alert("Veuillez sélectionner un point d'arrivée sur la carte.");
      return false;
    }
    if (!speedStore.speed) {
      alert("Veuillez définir une vitesse moyenne.");
      return false;
    }
    return true;
  };

  const calculateRoute = async () => {
    if (!validateInputs()) return;

    try {
      if (!mapStore.end) throw new Error("Le point d'arrivé n'est pas défini.");
      const itinary = await calculateItinary(mapStore.start, mapStore.end);
      console.log("Itinéraire calculé :", itinary);
      return itinary;
    } catch (error) {
      console.error("Erreur lors du calcul de l'itinéraire :", error);
      throw error;
    }
  };

  return {
    validateInputs,
    calculateRoute,
  };
}
