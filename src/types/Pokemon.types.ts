export type Pokemon = {
  id: string;
  name: string;
  url: string;
};

export type AbilityDetail = {
  is_hidden: boolean;
  ability: {
    name: string;
    url: string;
  };
};

export type MoveDetail = {
  move: {
    name: string;
    url: string;
  };
};

export type FormDetail = {
  id: number;
  url: string;
  name: string;
  is_battle_only: boolean;
};

export type PokemonDetail = {
  name: string;
  sprites: {
    back_default: string;
    front_default: string;
  };
  abilities: AbilityDetail[];
  moves: MoveDetail[];
  forms?: FormDetail[];
};
