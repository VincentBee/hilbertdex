import Head from 'next/head'
import { getPokemons } from '../../../../services/getPokemons'
import { GetStaticPaths, GetStaticProps } from 'next';
import { Pagination } from '../../../../components/Pagination';
import { useRouter } from 'next/router';
import { PageSize } from '../../../../components/PageSize';
import { generateLink } from '../../../../utils/pagination';
import { PokemonList } from '../../../../components/PokemonList';
import { EB_Garamond } from 'next/font/google'
import { Title } from '../../../../components/Title';
import { PokemonItem } from '../../../../models/pokemonItem';

const inter = EB_Garamond({ subsets: ['latin'] })

interface PageProps {
  pokemons: PokemonItem[];
  currentPage: number;
  total: number;
}

export default function Page({ pokemons, currentPage, total }: PageProps) {
  const router = useRouter();
  const handlePageSize = (value: number) => {
    router.push(generateLink(1, value));
  }
  return (
    <>
      <Head>
        <title>Page {currentPage}</title>
        <meta name="description" content="List of pokemons" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={inter.className}>
        <Title>Pokemons</Title>
        <PokemonList pokemons={pokemons} />
        <PageSize value={20} onChange={handlePageSize} />
        <Pagination currentPage={currentPage} total={total} />
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
  const currentPage = parseInt(context?.params?.page?.toString() || '') ?? 1;
  const offset = (currentPage - 1) * 20;
  const { pokemons, total } = await getPokemons({ offset });
  return {
    props: {
      pokemons,
      total,
      currentPage,
    },
    revalidate: 10,
  }
}
