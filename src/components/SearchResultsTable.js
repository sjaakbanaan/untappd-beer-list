import PropTypes from 'prop-types';
import { x } from '@xstyled/styled-components';
import BeerDetails from './BeerDetails';

const SearchResultsTable = ({ beersData, addBeer, removeBeer, isRemove }) => {
  return (
    <x.div
      display="grid"
      margin="0 -5px"
      gridTemplateColumns={{ _: 1, sm: 2, md: 3, lg: 4, xl: 6 }}
    >
      {beersData.map((item) => (
        <BeerDetails
          key={item.checkin_count}
          beer={item}
          addBeer={addBeer}
          removeBeer={removeBeer}
          isRemove={isRemove}
        />
      ))}
    </x.div>
  );
};
SearchResultsTable.propTypes = {
  beersData: PropTypes.array.isRequired,
  addBeer: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
  removeBeer: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
  isRemove: PropTypes.bool,
};

SearchResultsTable.defaultProps = {
  addBeer: undefined,
  removeBeer: undefined,
  isRemove: false,
};

export default SearchResultsTable;
