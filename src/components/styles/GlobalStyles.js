import { createGlobalStyle } from '@xstyled/styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: body;
    color: light;
    background-color: dark500;
  }

  @font-face {
  font-display: swap;
  font-family: 'Anek Kannada';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/anek-kannada-v4-latin-regular.woff2') format('woff2'),
    url('/fonts/anek-kannada-v4-latin-regular.woff') format('woff');
  }
  @font-face {
    font-display: swap;
    font-family: 'Anek Kannada';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/anek-kannada-v4-latin-700.woff2') format('woff2'),
      url('/fonts/anek-kannada-v4-latin-700.woff') format('woff');
  }

  a {
    color: secondary;
  }
  a:visited {
    color: dark500;
  }
  a:hover {
    color: dark500;
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }


  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: secondary;
    color: light;
  }  

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: heading;
    font-weight: bold;
  }
  h1 {
    font-size: h1;
    margin-bottom: 20px;
  }
  h2 {
    font-size: h2;
    margin-bottom: 10px;
  }
  h3 {
    font-size: h3;
  }
  h4 {
    font-size: h3;
  }
  h5 {
    font-size: h3;
  }
  h6 {
    font-size: h3;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  select::-ms-expand {
    display: none;
  }
  .accessibly-hidden {
    position: absolute;
    left: -999em;
  }
`;

export default GlobalStyle;
