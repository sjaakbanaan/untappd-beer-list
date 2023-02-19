import styled from '@xstyled/styled-components';
import { x } from '@xstyled/styled-components';
import { keyframes } from 'styled-components';

const SResultCard = styled(x.div)`
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

export { SAnimatedResultCard, SRatingContainer };
