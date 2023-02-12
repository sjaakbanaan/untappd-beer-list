/* eslint-disable no-console */
// import useSwr from 'swr';

// const baseUrl = 'http://localhost:3003/beers';
// export const useRequest = (path, name) => {
//   if (!path) {
//     throw new Error('Path is required');
//   }
//   const url = name ? baseUrl + path + '/' + name : baseUrl + path;
//   const { data, error } = useSwr(url);

//   return { data, error };
// };

import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const useGetBeerlist = () => {
  const fetcherOptions = { revalidateOnFocus: false };

  // https://mfikri.com/en/blog/express-reactjs-mysql
  const { data: beers, isLoading } = useSWR(
    'http://localhost:3003/beers',
    fetcher,
    fetcherOptions
  );
  // console.log('beers', beers);
  // TODO: loading?

  const selectedBeers = [];
  beers.forEach((beer) => {
    const beerObj = {
      checkin_count: beer.checkins,
      beer: {
        bid: beer.id,
        beer_name: beer.beer_name,
        beer_label: beer.beer_label,
        rating_score: beer.rating_score,
      },
      brewery: {
        brewery_name: beer.brewery_name,
      },
    };
    // console.log('beerObj', beerObj);
    selectedBeers.push(beerObj);
  });

  return { selectedBeers, isLoading };
};

export default useGetBeerlist;
