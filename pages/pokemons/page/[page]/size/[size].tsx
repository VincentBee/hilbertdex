import Head from 'next/head'
import { getPokemons } from '../../../../../services/getPokemons'
import { GetStaticPaths, GetStaticProps } from 'next';
import { Pagination } from '../../../../../components/Pagination';
import { PageSize } from '../../../../../components/PageSize';
import { useRouter } from 'next/router';
import { generateLink } from '../../../../../utils/pagination';
import { PokemonList } from '../../../../../components/PokemonList';
import { Title } from '../../../../../components/Title';
import { PokemonItem } from '../../../../../models/pokemonItem';

interface PageProps {
  pokemons: PokemonItem[];
  currentPage: number;
  pageSize: number;
  total: number;
}

export default function Page({ pokemons, currentPage, pageSize, total }: PageProps) {
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

      <main>
        <Title>Pokemons</Title>
        <PokemonList pokemons={pokemons} />
        <PageSize value={pageSize} onChange={handlePageSize} />
        <Pagination currentPage={currentPage} total={total} pageSize={pageSize} />
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
  const pageSize = parseInt(context?.params?.size?.toString() || '') ?? 20;
  const offset = (currentPage - 1) * pageSize;
  const { pokemons, total } = await getPokemons({ offset, limit: pageSize });
  return {
    props: {
      pokemons,
      total,
      pageSize,
      currentPage,
    },
    revalidate: 10,
  }
}
