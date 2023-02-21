import PropTypes from 'prop-types';
import useUntappd from '../utils/useUntappd';
import RatingContainer from './RatingContainer';
import { x } from '@xstyled/styled-components';

const BeerExtraDetails = ({ beerId }) => {
  // get search result from untappd API via useUntappd util
  const { beerData, isLoading } = useUntappd({ beerId });

  if (isLoading) {
    return <x.div padding="13px 0px 11px">Loading...</x.div>;
  }

  // no data found
  if (!Object.values(beerData).length > 0) {
    return <x.div padding="13px 0px 11px">No details found...</x.div>;
  }

  return <RatingContainer beerData={beerData} />;
};

BeerExtraDetails.propTypes = {
  beerId: PropTypes.number.isRequired,
};

export default BeerExtraDetails;
