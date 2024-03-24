import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { URL, URL_POKEMON_DETAILS } from '../constants/API';

import type {
  FormDetail,
  Pokemon,
  PokemonDetail,
} from '../types/Pokemon.types';

type PokemonProviderProps = {
  children: React.ReactNode;
};

export type PokemonContextType = {
  pokemons: Pokemon[];
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  pokemonDetails: { [key: string]: PokemonDetail };
  setPokemonDetails: Dispatch<
    SetStateAction<{
      [key: string]: PokemonDetail;
    }>
  >;
  fetchPokemonDetails: (id: string) => void;
};

const defaultContextValue: PokemonContextType = {
  pokemons: [],
  setPokemons: () => {},
  searchTerm: '',
  setSearchTerm: () => {},
  pokemonDetails: {},
  setPokemonDetails: () => {},
  fetchPokemonDetails: () => {},
};

export const PokemonContext = createContext<PokemonContextType>(
  defaultContextValue
);

export function PokemonProvider({ children }: PokemonProviderProps) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const [pokemonDetails, setPokemonDetails] = useState<{
    [key: string]: PokemonDetail;
  }>({});

  const [searchTerm, setSearchTerm] = useState('');

  const fetchPokemon = async (): Promise<void> => {
    try {
      const res: Response = await fetch(URL);
      const data = await res.json();
      setPokemons(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPokemonDetails = async (pokemonId: string) => {
    const response = await fetch(
      `${URL_POKEMON_DETAILS}/${pokemonId}`
    );
    const pokemonData = await response.json();

    const formsWithDetails = await Promise.all(
      pokemonData.forms.map(async (form: FormDetail) => {
        const formResponse = await fetch(form.url);
        const formData = await formResponse.json();
        return {
          url: form.url,
          id: formData.id,
          is_battle_only: formData.is_battle_only,
          name: formData.name,
        };
      })
    );

    setPokemonDetails((prev) => ({
      ...prev,
      [pokemonId]: {
        ...pokemonData,
        forms: formsWithDetails,
      },
    }));
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        setPokemons,
        searchTerm,
        setSearchTerm,
        pokemonDetails,
        setPokemonDetails,
        fetchPokemonDetails,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
