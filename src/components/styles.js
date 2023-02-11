import styled from 'styled-components';
import { keyframes } from 'styled-components';

const SContainer = styled.div`
  padding: 10px 0;
`;

const SSearchBar = styled.div`
  input {
    border: 1px solid white;
    color: black;
    background-color: darkgray;
    padding: 12px;
    width: calc(100% - 24px);
    font-weight: 700;
    box-shadow: 1px 1px 5px -2px rgba(0, 0, 0, 1);
    transition: background-color 0.3s ease-out;
    &:focus-visible {
      outline: none;
      background-color: white;
    }
  }
`;

const STableGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 -5px;
  @media (min-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const SResultCard = styled.div`
  padding: 0;
  margin: 5px;
  background: darkgray;
  color: #000;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 1px 1px 5px -2px rgba(0, 0, 0, 1);
  border: 1px solid white;
  justify-content: space-between;
  button {
    font-family: 'Anek Kannada', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 1rem;
    border: 0;
    border-top: 1px solid darkgray;
    padding: 11px;
    font-weight: 700;
    width: 100%;
    background: white;
    cursor: pointer;
    transition: background-color 0.3s ease-out;
    &:hover {
      background-color: #999;
    }
    &:first-of-type {
      border-top: 1px solid white;
    }
  }
  span {
    display: block;
    margin: 10px 0;
    font-weight: 700;
  }
  img {
    margin: 10px 0;
    border: 10px solid white;
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

const SRatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .rating-stars {
    display: inline-block;
    font-size: 30px;
    line-height: 1;
    padding: 10px;
    &::before {
      content: '★★★★★';
      letter-spacing: 3px;
      background: linear-gradient(
        90deg,
        #fc0 ${(props) => props.percentage}%,
        #fff ${(props) => props.percentage}%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .rating-number {
    font-weight: 700;
  }
`;

export { SContainer, STableGrid, SAnimatedResultCard, SSearchBar, SRatingContainer };
