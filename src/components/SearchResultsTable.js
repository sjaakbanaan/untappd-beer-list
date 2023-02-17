import { useState } from 'react';
import PropTypes from 'prop-types';
import { x } from '@xstyled/styled-components';
import { SAnimatedResultCard, SRatingContainer } from './styles';
import BeerDetails from './BeerDetails';

const SearchResultsTable = ({ beersData, addBeer, removeBeer, isRemove }) => {
  const [getBeerDetails, setGetBeerDetails] = useState(0);

  return (
    <x.div
      display="grid"
      margin="0 -5px"
      gridTemplateColumns={{ _: 1, sm: 2, md: 3, lg: 4, xl: 6 }}
    >
      {beersData.map((item) => (
        <SAnimatedResultCard key={item.beer.bid}>
          <x.div className="table-item-content">
            <x.h3 margin="24px 0px 5px">{item.beer.beer_name}</x.h3>
            {item.checkin_count.toLocaleString('nl-NL')} checkins
            <x.br />
            <x.img src={item.beer.beer_label} alt="" />
            <x.span>{item.brewery.brewery_name}</x.span>
          </x.div>
          <x.div className="table-item-footer">
            {/* TODO: this one still dirty, should change BeerDetails component
            instead, but that became messy because it expects untappd data. */}
            {getBeerDetails == item.beer.bid ? (
              <BeerDetails beerId={item.beer.bid} />
            ) : item.beer.rating_score ? (
              <SRatingContainer percentage={item.beer.rating_score * 10 * 2}>
                <x.div
                  className="rating-stars"
                  aria-label={`Rating of this beer is ${Number(
                    item.beer.rating_score
                  ).toFixed(2)} out of 5.`}
                ></x.div>
                <x.div className="rating-number">
                  {Number(item.beer.rating_score).toFixed(2)}
                </x.div>
              </SRatingContainer>
            ) : (
              <x.button onClick={() => setGetBeerDetails(item.beer.bid)}>
                Show rating
              </x.button>
            )}
            {!isRemove ? (
              <x.button onClick={() => addBeer(item)}>Add to list</x.button>
            ) : (
              <x.button onClick={() => removeBeer(item)}>Remove from list</x.button>
            )}
          </x.div>
        </SAnimatedResultCard>
      ))}
    </x.div>
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
