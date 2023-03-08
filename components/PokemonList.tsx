import Link from "next/link";
import { PokemonItem } from "../models/pokemonItem";
import styles from "./PokemonList.module.css"

export interface PokemonListProps {
  pokemons: PokemonItem[];
}

export const PokemonList = ({ pokemons }: PokemonListProps) => (
  <div className={styles.list}>
    {pokemons.map(pokemon => (
      <Link key={pokemon.name} className={styles.link} href={`/pokemons/details/${pokemon.name}`}>
        <div className={styles.item}>
          {pokemon.name}
        </div>
      </Link>
    ))}
  </div>
)
