import { givenPokemonList } from "../mock/givenPokemonList";
import { fetchMock, givenResponse } from "../utils/test/fetchMock";
import { getPokemons } from "./getPokemons";

describe("The getPokemons service", () => {
  it("Should return a list of pokemon", async () => {
    givenResponse(
      givenPokemonList([
        { name: "Vincent" }
      ])
    )
    const { pokemons: result } = await getPokemons();
    expect(result[0].name).toEqual("Vincent");
  })

  it("Should send the offset in the request", async () => {
    await getPokemons();
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('offset=0')
    )
  })

  it("Should override the offset in the request", async () => {
    await getPokemons({ offset: 10 });
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('offset=10')
    )
  })

  it("Should send the page size in the request", async () => {
    await getPokemons();
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('limit=20')
    )
  })

  it("Should override the page size in the request", async () => {
    await getPokemons({ limit: 100 });
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('limit=100')
    )
  })
})
