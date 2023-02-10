import { useContext } from 'react';
import { SearchContext } from '../App';
import { STableGrid } from './styles';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SelectedBeers = () => {
  const { selectedBeers, setSelectedBeers } = useContext(SearchContext);

  const removeBeer = (beer) => {
    if (selectedBeers.includes(beer)) {
      const removeBeer = selectedBeers.filter((item) => item !== beer);
      setSelectedBeers(removeBeer);
      localStorage.setItem('selectedBeers', JSON.stringify(removeBeer));
      toast.warning('🍻 Beer removed from the list.', {
        position: 'top-center',
        autoClose: 2400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  if (selectedBeers && Object.values(selectedBeers).length > 0) {
    return (
      <div className="container">
        <h2>Selected Beers</h2>
        <STableGrid>
          {selectedBeers.map((beer) => (
            <li key={beer.bid}>
              <span>{beer.beer_name}</span>
              <img src={beer.beer_label} alt="" />
              <button onClick={() => removeBeer(beer)}>remove from list</button>
            </li>
          ))}
        </STableGrid>
        <ToastContainer />
      </div>
    );
  } else {
    return <div className="container">Your list is empty.</div>;
  }
};

export { SelectedBeers };
