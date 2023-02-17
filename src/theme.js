/* eslint-disable import/no-anonymous-default-export */
export default {
  gridSize: 1440,
  fontSizes: {
    base: '16px',
    xs: '0.8125rem',
    sm: '0.88rem',
    md: '18px',
    h1: '2em',
    h2: '1.75rem',
    h3: '1.25rem',
  },
  screens: {
    _: 0,
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1440,
  },
  colors: {
    primary: '#333333',
    secondary: '#3f51b5',
    light: '#ffffff',
    dark500: '#454545',
    dark400: 'darkgray',
    dark300: '#999999',
    red: 'red',
    gray: '#cccccc',
    green: 'green',
  },
  shadows: {
    up: '1px 1px 5px -2px rgba(0, 0, 0, 1)',
  },
  gridTemplateColumns: {
    4: 'repeat(4, minmax(0px, 1fr))',
    12: 'repeat(12, minmax(0px, 1fr))',
  },
  gridTemplateRows: {
    1: 'repeat(1, minmax(0, 1fr))',
    2: 'repeat(2, minmax(0, 1fr))',
  },
  gutter: 20,
  fonts: {
    heading: '"Anek Kannada", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    body: '"Anek Kannada", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  fontWeights: {
    bold: 700,
    normal: 400,
  },
  lineHeights: {
    none: 1,
    normal: 1.5,
    mobile: 1.7,
  },
};
