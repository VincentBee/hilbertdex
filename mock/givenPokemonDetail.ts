import { PokemonDetailResponse } from "../services/models/pokemonDetailResponse";

export const givenPokemonDetail = (
  data: Partial<PokemonDetailResponse>
): PokemonDetailResponse => ({
  name: "bulbasaur",
  height: 7,
  weight: 69,
  sprites: {
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  types: [
    {
      type: {
        name: "grass",
      }
    },
    {
      type: {
        name: "poison",
      }
    }
  ],
  ...data,
})
