import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';
import { STableGrid, SAnimatedResultCard, SRatingContainer } from './styles';
import BeerDetails from './BeerDetails';

const SearchResultsTable = ({ beersData, addBeer, removeBeer, isRemove }) => {
  const [getBeerDetails, setGetBeerDetails] = useState(0);

  return (
    <STableGrid>
      {beersData.map((item) => (
        <SAnimatedResultCard key={item.beer.bid}>
          <div className="table-item-content">
            <h3>{item.beer.beer_name}</h3>
            {item.checkin_count.toLocaleString('nl-NL')} checkins
            <br />
            <img src={item.beer.beer_label} alt="" />
            <span>{item.brewery.brewery_name}</span>
          </div>
          <div className="table-item-footer">
            {/* TODO: this one still dirty, should change BeerDetails component
            instead, but that became messy because it expects untappd data. */}
            {getBeerDetails == item.beer.bid ? (
              <BeerDetails beerId={item.beer.bid} />
            ) : item.beer.rating_score ? (
              <SRatingContainer percentage={item.beer.rating_score * 10 * 2}>
                <div
                  className="rating-stars"
                  aria-label={`Rating of this beer is ${Number(
                    item.beer.rating_score
                  ).toFixed(2)} out of 5.`}
                ></div>
                <div className="rating-number">
                  {Number(item.beer.rating_score).toFixed(2)}
                </div>
              </SRatingContainer>
            ) : (
              <button onClick={() => setGetBeerDetails(item.beer.bid)}>
                Show rating
              </button>
            )}
            {!isRemove ? (
              <button onClick={() => addBeer(item)}>Add to list</button>
            ) : (
              <button onClick={() => removeBeer(item)}>Remove from list</button>
            )}
          </div>
        </SAnimatedResultCard>
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
