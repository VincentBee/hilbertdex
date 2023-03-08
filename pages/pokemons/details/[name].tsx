import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head";
import { PokemonDetail } from "../../../models/pokemonDetail";
import { getPokemonDetails } from "../../../services/getPokemonDetails";
import { EB_Garamond } from 'next/font/google'
import { PokemonCard } from "../../../components/PokemonCard";

const inter = EB_Garamond({ subsets: ['latin'] })

interface DetailProps {
  pokemon: PokemonDetail;
}

export default function Detail({ pokemon }: DetailProps) {
  return (
    <>
      <Head>
        <title>{pokemon.name}</title>
        <meta name="description" content={`Detail of ${pokemon.name}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={inter.className}>
        <PokemonCard pokemon={pokemon} />
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking"
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const name = context?.params?.name?.toString();
  if (!name) {
    return {
      notFound: true
    };
  }

  const pokemon = await getPokemonDetails(name);
  if (!pokemon) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      pokemon
    },
    revalidate: 10,
  };
}

