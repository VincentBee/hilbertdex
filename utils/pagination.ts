export interface Page {
  index: number;
  link?: string;
  label: string;
}

export const generatePages = (numberOfPage: number, current: number, pageSize: number): Page[] => {
  const pages = [];

  pages.push({ index: 0, link: `/pokemons/page/1/size/${pageSize}`, label: '<<' });
  for (let i = 1; i <= numberOfPage; i++) {
    if (i == 1) {
      pages.push(generatePageItem(i, i === current, pageSize));
      continue;
    }
    if (i == 2 && current > 3) {
      pages.push({ index: i, label: '...' });
      continue;
    }
    if (Math.abs(i - current) <= 2) {
      pages.push(generatePageItem(i, i === current, pageSize))
      continue;
    }
    if (i == (numberOfPage - 1) && current < (numberOfPage - 3)) {
      pages.push({ index: numberOfPage - 1, label: '...' });
      continue;
    }
    if (i == numberOfPage) {
      pages.push(generatePageItem(i, i === current, pageSize));
      continue;
    }
  }
  pages.push({ index: numberOfPage + 1, link: `/pokemons/page/${numberOfPage}/size/${pageSize}`, label: '>>' })

  return pages;
}

const generatePageItem = (index: number, current: boolean, pageSize: number) => ({
  index,
  link: !current ? generateLink(index, pageSize) : undefined,
  label: `${index}`
});

export const generateLink = (page: number, pageSize: number) => {
  if (page === 1 && pageSize === 20) {
    return '/pokemons';
  }

  if (pageSize === 20) {
    return `/pokemons/page/${page}`;
  }

  return `/pokemons/page/${page}/size/${pageSize}`;
}
