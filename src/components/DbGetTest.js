/* eslint-disable no-console */
import useSWR from 'swr';
import 'react-toastify/dist/ReactToastify.css';
import SearchResultsTable from './SearchResultsTable';
import { x } from '@xstyled/styled-components';

const fetcher = (url) => fetch(url).then((res) => res.json());

const DbGetTest = () => {
  const fetcherOptions = { revalidateOnFocus: false };

  // https://mfikri.com/en/blog/express-reactjs-mysql
  const { data: beers, isLoading } = useSWR(
    'http://localhost:3003/beers',
    fetcher,
    fetcherOptions
  );
  if (isLoading) {
    return <x.div padding="10px 0px">Loading...</x.div>;
  }
  // console.log('beers', beers);

  const dbResult = [];
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
    dbResult.push(beerObj);
  });
  // console.log('dbResult', dbResult);
  const selectedBeers = dbResult;

  const removeBeer = (beer) => {
    console.log('removeBeer temp. func', beer);
  };

  if (selectedBeers && Object.values(selectedBeers).length > 0) {
    return (
      <x.div padding="10px 0px">
        <x.h2>Selected Beers</x.h2>
        <SearchResultsTable beersData={selectedBeers} removeBeer={removeBeer} isRemove />
      </x.div>
    );
  } else {
    return <x.div padding="10px 0px">Your list is empty.</x.div>;
  }

  // return <div>bla</div>;

  // return <div>hoi</div>;
};

export { DbGetTest };
