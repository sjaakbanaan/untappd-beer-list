import { x } from '@xstyled/styled-components';
import PropTypes from 'prop-types';

const Button = ({ children, ...props }) => {
  return (
    <x.button
      fontSize="base"
      borderWidth="1px 0 0 0"
      borderColor={{ _: 'dark400', first: 'light' }}
      display="block"
      lineHeight="none"
      padding="10px 0"
      color="primary"
      fontWeight="bold"
      w="100%"
      bg={{ _: 'light', hover: 'dark300' }}
      transition
      transitionDuration={300}
      transitionProperty="background-color"
      {...props}
    >
      {children}
    </x.button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};

Button.defaultProps = {
  children: [],
};

export default Button;
