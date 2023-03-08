import { PokemonItemResponse } from "../services/models/pokemonItemResponse"
import { PokemonListResponse } from "../services/models/pokemonListResponse"

export const givenPokemonList = (
  data: Partial<PokemonItemResponse>[]
): PokemonListResponse => {
  return {
    count: data.length || 1,
    results: [
      {
        name: "bulbasaur"
      },
    ].map((item, index: number) => ({
      ...item,
      ...data[index],
    })),
  }
}
