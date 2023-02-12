/* eslint-disable no-console */
import useSWR from 'swr';
import 'react-toastify/dist/ReactToastify.css';
import SearchResultsTable from './SearchResultsTable';
import { SContainer } from './styles';

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
    return <div>Loading...</div>;
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
      <SContainer>
        <h2>Selected Beers</h2>
        <SearchResultsTable beersData={selectedBeers} removeBeer={removeBeer} isRemove />
      </SContainer>
    );
  } else {
    return <SContainer>Your list is empty.</SContainer>;
  }

  // return <div>bla</div>;

  // return <div>hoi</div>;
};

export { DbGetTest };
