import { useContext } from 'react';
import { SearchContext } from '../App';
import toastConfig from '../utils/toastConfig';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchResultsTable from './SearchResultsTable';

const SelectedBeers = () => {
  const { selectedBeers, setSelectedBeers } = useContext(SearchContext);

  const removeBeer = (beer) => {
    if (selectedBeers.includes(beer)) {
      const removeBeer = selectedBeers.filter((item) => item !== beer);
      setSelectedBeers(removeBeer);
      localStorage.setItem('selectedBeers', JSON.stringify(removeBeer));
      toast.warning('🍻 Beer removed from the list.', toastConfig);
    }
  };

  if (selectedBeers && Object.values(selectedBeers).length > 0) {
    return (
      <div className="container">
        <h2>Selected Beers</h2>
        <SearchResultsTable beersData={selectedBeers} removeBeer={removeBeer} isRemove />
        <ToastContainer toastStyle={{ backgroundColor: '#454545' }} />
      </div>
    );
  } else {
    return <div className="container">Your list is empty.</div>;
  }
};

export { SelectedBeers };
