import { PokemonDetail } from "../models/pokemonDetail";
import { PokemonDetailResponse } from "./models/pokemonDetailResponse";

export const getPokemonDetails = async (id: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await response.json() as PokemonDetailResponse;

  return {
    name: data.name,
    height: data.height,
    weight: data.weight,
    types: data.types.map(type => type.type.name),
    picture: data.sprites.front_default,
  } as PokemonDetail
}
