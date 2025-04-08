export interface pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  location_area_encounters: string;
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
}
