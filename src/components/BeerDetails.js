import PropTypes from 'prop-types';
import useUntappd from '../utils/useUntappd';
import '../styles.css';
import { SstarRating } from './styles';

const BeerDetails = ({ beerId }) => {
  // get search result from untappd API via useUntappd util
  const { beerData, isLoading } = useUntappd({ beerId });

  if (isLoading) {
    return <div className="container">Loading...</div>;
  }
  return (
    <SstarRating percentage={beerData?.rating_score * 10 * 2}>
      <div>{beerData?.rating_score}</div>
    </SstarRating>
  );
};
BeerDetails.propTypes = {
  beerId: PropTypes.string.isRequired,
};

export default BeerDetails;
