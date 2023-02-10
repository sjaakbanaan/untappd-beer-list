import PropTypes from 'prop-types';
import '../styles.css';
import BeerDetails from './BeerDetails';

const SearchResults = ({ beersData, getBeerDetails, showBeerDetails, addBeer }) => {
  return beersData.map((item) => (
    <li key={item.beer.bid}>
      <span>
        {item.beer.beer_name}
        <br />
        {item.checkin_count.toLocaleString('nl-NL')} checkins
      </span>
      <img src={item.beer.beer_label} alt="" />
      <span>{item.brewery.brewery_name}</span>
      <button onClick={() => showBeerDetails(item.beer.bid)}>show info</button>
      {getBeerDetails == item.beer.bid && <BeerDetails beerId={item.beer.bid} />}
      <button onClick={() => addBeer(item.beer)}>add to list</button>
    </li>
  ));
};
SearchResults.propTypes = {
  beersData: PropTypes.object.isRequired,
};

export default SearchResults;
