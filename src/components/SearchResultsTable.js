import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';
import { STableGrid } from './styles';
import BeerDetails from './BeerDetails';

const SearchResultsTable = ({ beersData, addBeer, removeBeer, isRemove }) => {
  const [getBeerDetails, setGetBeerDetails] = useState(0);

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
          <div className="table-item-footer">
            <button onClick={() => setGetBeerDetails(item.beer.bid)}>show info</button>
            {getBeerDetails == item.beer.bid && <BeerDetails beerId={item.beer.bid} />}
            {!isRemove ? (
              <button onClick={() => addBeer(item)}>add to list</button>
            ) : (
              <button onClick={() => removeBeer(item)}>remove from list</button>
            )}
          </div>
        </li>
      ))}
    </STableGrid>
  );
};
SearchResultsTable.propTypes = {
  beersData: PropTypes.array.isRequired,
  getBeerDetails: PropTypes.string,
  addBeer: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
  removeBeer: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
  isRemove: PropTypes.bool,
};

SearchResultsTable.defaultProps = {
  getBeerDetails: '',
  addBeer: undefined,
  removeBeer: undefined,
  isRemove: false,
};

export default SearchResultsTable;
