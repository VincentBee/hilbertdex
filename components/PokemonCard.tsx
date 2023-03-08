import { PokemonDetail } from "../models/pokemonDetail"
import styles from "./PokemonCard.module.css"

export interface PokemonCardProps {
  pokemon: PokemonDetail;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => (
  <div className={styles.card}>
    <h1 className={styles.name}>{pokemon.name}</h1>

    <img src={pokemon.picture} alt={pokemon.name} />

    <div>Height: <span className={styles.stat}>{pokemon.height}</span></div>

    <div>Weight: <span className={styles.stat}>{pokemon.weight}</span></div>

    <div>Types: <span className={styles.stat}>{pokemon.types.join(', ')}</span></div>
  </div>
)
