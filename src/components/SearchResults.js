import { useContext } from 'react';
import { SearchContext } from '../App';
import useUntappd from '../utils/useUntappd';
import toastConfig from '../utils/toastConfig';
import { x } from '@xstyled/styled-components';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchResultTable from './SearchResultsTable';

const SearchResults = () => {
  const {
    debouncedSearchTerm: searchParam,
    selectedBeers,
    setSelectedBeers,
  } = useContext(SearchContext);
  // get search results from untappd API via useUntappd util
  const { beersData, isLoading } = useUntappd({ searchParam });

  const addBeer = (beer) => {
    // console.log(selectedBeers);
    if (!selectedBeers.includes(beer)) {
      setSelectedBeers([...selectedBeers, beer]);
      localStorage.setItem('selectedBeers', JSON.stringify([...selectedBeers, beer]));
      // toast time
      toast.success('🍻 Beer added to the list.', toastConfig);
    } else {
      toast.warning('This beer is already in your list.', toastConfig);
    }
  };

  if (isLoading) {
    return <x.div padding="13px 0px 11px">Loading...</x.div>;
  }

  // no data found
  if (!Object.values(beersData).length > 0) {
    return <x.div padding="13px 0px 11px">Nothing...</x.div>;
  }
  return (
    <x.div padding="13px 0px 11px">
      <x.h2>Search Results</x.h2>
      <SearchResultTable beersData={beersData} addBeer={addBeer} />
      <ToastContainer />
    </x.div>
  );
};

export default SearchResults;
