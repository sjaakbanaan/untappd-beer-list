import { useContext } from 'react';
import { SearchContext } from '../App';
import toastConfig from '../utils/toastConfig';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchResultsTable from './SearchResultsTable';
import { x } from '@xstyled/styled-components';

const SelectedBeers = () => {
  const { selectedBeers, setSelectedBeers } = useContext(SearchContext);

  const removeBeer = (beer) => {
    if (selectedBeers.includes(beer)) {
      const removeBeer = selectedBeers.filter((item) => item !== beer);
      setSelectedBeers(removeBeer);
      localStorage.setItem('selectedBeers', JSON.stringify(removeBeer));
      toast.success('🍻 Beer removed from the list.', toastConfig);
    }
  };

  if (selectedBeers && Object.values(selectedBeers).length > 0) {
    return (
      <x.div padding="10px 0px">
        <h2>Selected Beers</h2>
        <SearchResultsTable beersData={selectedBeers} removeBeer={removeBeer} isRemove />
        <ToastContainer />
      </x.div>
    );
  } else {
    return <x.div padding="10px 0px">Your list is empty.</x.div>;
  }
};

export { SelectedBeers };
