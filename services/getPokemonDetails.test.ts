import { givenPokemonDetail } from "../mock/givenPokemonDetail";
import { fetchMock, givenResponse } from "../utils/test/fetchMock";
import { getPokemonDetails } from "./getPokemonDetails";

describe("The getPokemonDetails service", () => {
  it("Should return a pokemon detail", async () => {
    givenResponse(
      givenPokemonDetail({
        name: "Vincent"
      })
    )
    const result = await getPokemonDetails("vincent");
    expect(result.name).toEqual("Vincent");
  })

  it("Should send the pokemon name in the path of the endpoint", async () => {
    await getPokemonDetails("vincent");
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('vincent')
    )
  })
})
