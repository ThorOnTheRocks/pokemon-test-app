import type {
  AbilityDetail,
  MoveDetail,
  FormDetail,
} from '../../types/Pokemon.types';

export type PokemonDetailsProps = {
  name: string;
  sprites: {
    back_default: string;
    front_default: string;
  };
  abilities: AbilityDetail[];
  moves: MoveDetail[];
  forms?: FormDetail[];
};
