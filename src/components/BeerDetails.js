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
  // no data found
  if (!Object.values(beerData).length > 0) {
    return <div className="container">No details found...</div>;
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <SstarRating
        percentage={beerData?.rating_score * 10 * 2}
        aria-label={`Rating of this beer is ${beerData?.rating_score.toFixed(
          2
        )} out of 5.`}
      ></SstarRating>
      <div style={{ marginLeft: '20px', fontWeight: '700' }}>
        {beerData?.rating_score.toFixed(2)}
      </div>
    </div>
  );
  //   <SstarRating percentage={beerData?.rating_score * 10 * 2}>
  //
  // </SstarRating>
};
BeerDetails.propTypes = {
  beerId: PropTypes.number.isRequired,
};

export default BeerDetails;
