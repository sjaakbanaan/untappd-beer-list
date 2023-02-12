import { useContext } from 'react';
import { SearchContext } from '../App';
import useUntappd from '../utils/useUntappd';
import toastConfig from '../utils/toastConfig';
import '../styles.css';
import { SContainer } from './styles';

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
    return <SContainer>Loading...</SContainer>;
  }

  // no data found
  if (!Object.values(beersData).length > 0) {
    return <SContainer>Nothing...</SContainer>;
  }
  return (
    <SContainer>
      <h2>Search Results</h2>
      <SearchResultTable beersData={beersData} addBeer={addBeer} />
      <ToastContainer />
    </SContainer>
  );
};

export default SearchResults;
