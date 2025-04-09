import type {Position} from "@/models/positionModel.ts";

export interface Step {
  position: Position
  name?: string;
  time?: string;
  weather?: {
    weatherIcon: string;
    temp: string;
  }
}

export interface Itinerary {
  steps: Step[];
  duration: number;
  distance: number;
}
