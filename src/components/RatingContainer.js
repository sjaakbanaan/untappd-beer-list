import PropTypes from 'prop-types';
import { SRatingContainer } from './styles';
import { x } from '@xstyled/styled-components';

const RatingContainer = ({ beerData }) => {
  const score = Number(beerData.rating_score);
  return (
    <SRatingContainer percentage={score * 10 * 2}>
      <x.div
        className="rating-stars"
        aria-label={`Rating of this beer is ${score.toFixed(2)} out of 5.`}
      ></x.div>
      <x.div className="rating-number">{score.toFixed(2)}</x.div>
    </SRatingContainer>
  );
};

RatingContainer.propTypes = {
  beerData: PropTypes.object.isRequired,
};

export default RatingContainer;
