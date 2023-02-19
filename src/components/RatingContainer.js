import PropTypes from 'prop-types';
import { SRatingContainer } from './styles';
import { x } from '@xstyled/styled-components';

const RatingContainer = ({ beerData }) => {
  const score = Number(beerData.rating_score);
  return (
    <x.div
      display="flex"
      alignItems="center"
      justifyContent="center"
      as={SRatingContainer}
      percentage={score * 10 * 2}
    >
      <x.div
        className="rating-stars"
        aria-label={`Rating of this beer is ${score.toFixed(2)} out of 5.`}
      ></x.div>
      <x.div fontWeight="bold">{score.toFixed(2)}</x.div>
    </x.div>
  );
};

RatingContainer.propTypes = {
  beerData: PropTypes.object.isRequired,
};

export default RatingContainer;
