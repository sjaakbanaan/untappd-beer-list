import PropTypes from 'prop-types';
import useUntappd from '../utils/useUntappd';
import '../styles.css';
import { SContainer, SRatingContainer } from './styles';

const BeerDetails = ({ beerId }) => {
  // get search result from untappd API via useUntappd util
  const { beerData, isLoading } = useUntappd({ beerId });

  if (isLoading) {
    return <SContainer>Loading...</SContainer>;
  }
  // no data found
  if (!Object.values(beerData).length > 0) {
    return <SContainer>No details found...</SContainer>;
  }

  return (
    <SRatingContainer percentage={beerData?.rating_score * 10 * 2}>
      <div
        className="rating-stars"
        aria-label={`Rating of this beer is ${beerData?.rating_score.toFixed(
          2
        )} out of 5.`}
      ></div>
      <div className="rating-number">{beerData?.rating_score.toFixed(2)}</div>
    </SRatingContainer>
  );
};

BeerDetails.propTypes = {
  beerId: PropTypes.number.isRequired,
};

export default BeerDetails;
