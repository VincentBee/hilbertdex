import { PokemonItem } from "../models/pokemonItem";
import { PokemonListResponse } from "./models/pokemonListResponse";

export interface GetPokemonOptions {
  limit?: number;
  offset?: number;
}
export const getPokemons = async ({
  limit = 20,
  offset = 0
}: GetPokemonOptions = {}) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const response = await fetch(url);
  const data = await response.json() as PokemonListResponse;

  return {
    total: data.count,
    pokemons: data.results.map(item => ({
      name: item.name,
    })) as PokemonItem[],
  }

}
