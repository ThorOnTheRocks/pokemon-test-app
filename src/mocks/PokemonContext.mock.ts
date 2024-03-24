import { PokemonContextType } from '../context/PokemonContext';

export const MOCKED_CONTEXT_VALUES: PokemonContextType = {
  pokemons: [
    {
      id: '1',
      name: 'Bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
    {
      id: '2',
      name: 'Ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/2/',
    },
  ],
  setPokemons: () => {},
  searchTerm: '',
  setSearchTerm: () => {},
  pokemonDetails: {},
  setPokemonDetails: () => {},
  fetchPokemonDetails: () => {},
};
