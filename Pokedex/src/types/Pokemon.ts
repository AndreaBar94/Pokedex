
interface Ability {
    is_hidden: boolean;
    slot: number;
    ability: {
      name: string;
      url: string;
    };
  }
  
  interface Form {
    name: string;
    url: string;
  }
  
  interface GameIndex {
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }
  
  interface VersionDetails {
    rarity: number;
    version: {
      name: string;
      url: string;
    };
  }
  
  interface HeldItem {
    item: {
      name: string;
      url: string;
    };
    version_details: VersionDetails[];
  }
  
  interface Move {
    move: {
      name: string;
      url: string;
    };
    version_group_details: {
      level_learned_at: number;
      version_group: {
        name: string;
        url: string;
      };
      move_learn_method: {
        name: string;
        url: string;
      };
    }[];
  }
  
  interface Species {
    name: string;
    url: string;
  }
  
  interface Sprites {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
      dream_world: {
        front_default: string | null;
        front_female: string | null;
      };
      home: {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
      official_artwork: {
        front_default: string | null;
      };
    };
    versions: {
      [key: string]: {
        back_default: string | null;
        back_gray?: string | null;
        front_default: string | null;
        front_gray?: string | null;
      };
    };
  }
  
  interface Stat {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }
  
  interface Type {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }
  
  interface PastType {
    generation: {
      name: string;
      url: string;
    };
    types: Type[];
  }
  
  interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: Ability[];
    forms: Form[];
    game_indices: GameIndex[];
    held_items: HeldItem[];
    location_area_encounters: string;
    moves: Move[];
    species: Species;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    past_types: PastType[];
  }
  
  export interface PokemonAction {
    type: string;
    payload: Pokemon | null;
  }

  export default Pokemon;
  