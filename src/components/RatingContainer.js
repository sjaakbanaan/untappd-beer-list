import PropTypes from 'prop-types';
import { SStarRating } from './styles';
import { x } from '@xstyled/styled-components';

const RatingContainer = ({ beerData }) => {
  const score = Number(beerData.rating_score);
  return (
    <x.div
      display="flex"
      alignItems="center"
      padding="0 10px"
      h="42px"
      justifyContent="center"
    >
      <x.div
        display="block"
        fontSize={{ _: 'xl', xl: 'lg' }}
        lineHeight="normal"
        as={SStarRating}
        percentage={score * 10 * 2}
        aria-label={`Rating of this beer is ${score.toFixed(2)} out of 5.`}
      ></x.div>
      <x.div ml="8px" fontWeight="bold">
        {score.toFixed(2)}
      </x.div>
    </x.div>
  );
};

RatingContainer.propTypes = {
  beerData: PropTypes.object.isRequired,
};

export default RatingContainer;
