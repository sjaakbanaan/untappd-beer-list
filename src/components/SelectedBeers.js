import { useContext } from 'react';
import { SearchContext } from '../App';
import toastConfig from '../utils/toastConfig';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchResultsTable from './SearchResultsTable';
import { SContainer } from './styles';

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
      <SContainer>
        <h2>Selected Beers</h2>
        <SearchResultsTable beersData={selectedBeers} removeBeer={removeBeer} isRemove />
        <ToastContainer toastStyle={{ backgroundColor: '#454545' }} />
      </SContainer>
    );
  } else {
    return <SContainer>Your list is empty.</SContainer>;
  }
};

export { SelectedBeers };
