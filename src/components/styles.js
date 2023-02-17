import styled from '@xstyled/styled-components';
import { x } from '@xstyled/styled-components';
import { keyframes } from 'styled-components';

const SSearchBar = styled(x.div)`
  /* input {
    border: 1px solid;
    border-color: light;
    border-color: primary;
    background-color: dark400;
    padding: 18px 14px 14px;
    width: 100%;
    font-weight: bold;
    box-shadow: up;
    transition: background-color 0.3s ease-out;
  } */
  // TODO: xstyled
  input {
    &:focus-visible {
      outline: none;
      background-color: light;
    }
  }
`;

const SResultCard = styled(x.div)`
  padding: 0;
  margin: 5px;
  background-color: dark400;
  color: primary;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 1px 1px 5px -2px rgba(0, 0, 0, 1);
  border: 1px solid;
  border-color: light;
  justify-content: space-between;
  button {
    font-family: body;
    font-size: normal;
    border: 1px 0 0;
    border-color: dark400;
    padding: 18px 14px 14px;
    color: primary;
    font-weight: bold;
    width: 100%;
    background-color: light;
    cursor: pointer;
    transition: background-color 0.3s ease-out;
    &:hover {
      background-color: dark300;
    }
    &:first-of-type {
      border-top: 1px solid;
      border-color: light;
    }
  }
  span {
    display: block;
    margin: 10px 0;
    font-weight: bold;
  }
  img {
    margin: 10px 0;
    border: 10px solid;
    border-color: light;
  }
  .table-item-footer {
    width: 100%;
  }
  .table-item-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const appendAnimation = keyframes`
  from {
    transform: translate(0, -60px);
    opacity: 0;
  }
  to {
    transform: translate(0, 0);
    opacity: 1;
  }
`;

const SAnimatedResultCard = styled(SResultCard)`
  animation: ${appendAnimation} 0.2s linear;
`;

const SRatingContainer = styled(x.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  .rating-stars {
    display: inline-block;
    font-size: 30px;
    @media (min-width: xl) and (max-width: xxl) {
      font-size: 22px;
    }
    line-height: none;
    padding: 10px;
    &::before {
      content: '★★★★★';
      letter-spacing: 3px;
      background: linear-gradient(
        90deg,
        #fc0 ${(props) => props.percentage}%,
        white ${(props) => props.percentage}%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .rating-number {
    font-weight: bold;
  }
`;

export { SAnimatedResultCard, SSearchBar, SRatingContainer };
