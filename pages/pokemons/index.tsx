import Head from 'next/head'
import { getPokemons } from '../../services/getPokemons'
import { GetStaticProps } from 'next';
import { Pagination } from '../../components/Pagination';
import { PageSize } from '../../components/PageSize';
import { useRouter } from 'next/router';
import { generateLink } from '../../utils/pagination';
import { EB_Garamond } from 'next/font/google'
import { PokemonList } from '../../components/PokemonList';
import { Title } from '../../components/Title';
import { PokemonItem } from '../../models/pokemonItem';

const inter = EB_Garamond({ subsets: ['latin'] })

interface PageProps {
  total: number;
  pokemons: PokemonItem[];
}

export default function Page({ pokemons, total }: PageProps) {
  const router = useRouter();
  const handlePageSize = (value: number) => {
    router.push(generateLink(1, value));
  }
  return (
    <>
      <Head>
        <title>List</title>
        <meta name="description" content="List of pokemons" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={inter.className}>
        <Title>Pokemons</Title>
        <PokemonList pokemons={pokemons} />
        <PageSize value={20} onChange={handlePageSize} />
        <Pagination currentPage={1} total={total} />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { pokemons, total } = await getPokemons();
  return {
    props: {
      pokemons,
      total
    },
    revalidate: 10,
  }
}
