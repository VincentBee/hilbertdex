import { PokemonItemResponse } from "./pokemonItemResponse";

export interface PokemonListResponse {
  count: number;
  results: PokemonItemResponse[];
}
