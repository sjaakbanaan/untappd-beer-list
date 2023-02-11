import { useContext } from 'react';
import { SearchContext } from '../App';
import useUntappd from '../utils/useUntappd';
import toastConfig from '../utils/toastConfig';
import '../styles.css';

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
    if (!selectedBeers.includes(beer)) {
      setSelectedBeers([...selectedBeers, beer]);
      localStorage.setItem('selectedBeers', JSON.stringify([...selectedBeers, beer]));
      // toast time
      toast.warning('🍻 Beer removed from the list.', toastConfig);
    }
  };

  if (isLoading) {
    return <div className="container">Loading...</div>;
  }

  // no data found
  if (!Object.values(beersData).length > 0) {
    return <div className="container">Nothing...</div>;
  }
  return (
    <div className="container">
      <h2>Search Results</h2>
      <SearchResultTable beersData={beersData} addBeer={addBeer} />
      <ToastContainer />
    </div>
  );
};

export default SearchResults;
