import axios from "axios";
import {useMapStore} from "@/stores/mapStore.ts";
import {useItinaryStore} from "@/stores/itinaryStore.ts";
import {useSpeedStore} from "@/stores/speedStore.ts";
import type {Position} from "@/models/positionModel.ts";


const apiKey = import.meta.env.VITE_OPENROUTE_API_KEY;

export const calculateItinary = async (start: Position, end: Position) => {
  const mapStore = useMapStore();
  const speedStore = useSpeedStore();
  const itinaryStore = useItinaryStore();

  try {
    const response = await axios.get("https://api.openrouteservice.org/v2/directions/foot-hiking", {
      params: {
        api_key: apiKey, start: `${start.lng},${start.lat}`, end: `${end.lng},${end.lat}`,
      },
    });
    if (response.status === 200) {
      mapStore.setPolyline(response.data.features[0].geometry.coordinates.map((coord: any) => ({
        lat: coord[1], lng: coord[0],
      })));
      const distance = response.data.features[0].properties.segments[0].distance;

      if (speedStore.speed) {
        // division par 3.6 pour km/h vers m/s
        itinaryStore.setDuration(distance / (speedStore.speed / 3.6));
      }
      itinaryStore.setDistance(response.data.features[0].properties.segments[0].distance);

      itinaryStore.resetStep();
      // l'api ne renvoie pas clairement la position à chaque étape, il faudrait récupérer approximativement les données en essayant de s'approcher
      // le plus possible de la demi heure de trajet en calculant combien de mètres on peut parcourir en une demi heure
      // Malheureusement la mise en place de la methode de calcul est complexe et le developpement de celle-ci ne rentre pas dans les delais de 3h
      itinaryStore.showItinary = true;
    }
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'appel à l'API OpenRouteService :", error);
    throw error;
  }
};

