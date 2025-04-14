export interface pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  location_area_encounters: string;
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
  type: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
      url: string;
    };
  }[];
}
