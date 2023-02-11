import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';
import { STableGrid } from './styles';
import BeerDetails from './BeerDetails';

const SearchResultsTable = ({ beersData, addBeer, removeBeer, isRemove }) => {
  const [getBeerDetails, setGetBeerDetails] = useState(0);

  const showBeerDetails = (beerId) => {
    setGetBeerDetails(beerId);
  };

  return (
    <STableGrid>
      {beersData.map((item) => (
        <li key={item.beer.bid}>
          <div>
            <span>
              {item.beer.beer_name}
              <br />
              {item.checkin_count.toLocaleString('nl-NL')} checkins
            </span>
            <img src={item.beer.beer_label} alt="" />
            <span>{item.brewery.brewery_name}</span>
          </div>
          <button onClick={() => showBeerDetails(item.beer.bid)}>show info</button>
          {getBeerDetails == item.beer.bid && <BeerDetails beerId={item.beer.bid} />}
          {!isRemove ? (
            <button onClick={() => addBeer(item)}>add to list</button>
          ) : (
            <button onClick={() => removeBeer(item)}>remove from list</button>
          )}
        </li>
      ))}
    </STableGrid>
  );
};
SearchResultsTable.propTypes = {
  beersData: PropTypes.array.isRequired,
  getBeerDetails: PropTypes.string,
  addBeer: PropTypes.func,
  removeBeer: PropTypes.func,
  isRemove: PropTypes.bool,
};

SearchResultsTable.defaultProps = {
  getBeerDetails: '',
  addBeer: [],
  removeBeer: [],
  isRemove: false,
};

export default SearchResultsTable;
