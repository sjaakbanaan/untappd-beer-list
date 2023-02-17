import PropTypes from 'prop-types';
import useUntappd from '../utils/useUntappd';
import { SRatingContainer } from './styles';
import { x } from '@xstyled/styled-components';

const BeerDetails = ({ beerId }) => {
  // get search result from untappd API via useUntappd util
  const { beerData, isLoading } = useUntappd({ beerId });

  if (isLoading) {
    return <x.div padding="10px 0px">Loading...</x.div>;
  }
  // no data found
  if (!Object.values(beerData).length > 0) {
    return <x.div padding="10px 0px">No details found...</x.div>;
  }

  return (
    <SRatingContainer percentage={beerData?.rating_score * 10 * 2}>
      <x.div
        className="rating-stars"
        aria-label={`Rating of this beer is ${beerData?.rating_score.toFixed(
          2
        )} out of 5.`}
      ></x.div>
      <x.div className="rating-number">{beerData?.rating_score.toFixed(2)}</x.div>
    </SRatingContainer>
  );
};

BeerDetails.propTypes = {
  beerId: PropTypes.number.isRequired,
};

export default BeerDetails;
