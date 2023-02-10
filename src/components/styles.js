import styled from 'styled-components';

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
  li {
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
      border: 0;
      padding: 12px;
      font-weight: 700;
      width: 100%;
      background: white;
      cursor: pointer;
      transition: background-color 0.3s ease-out;
      &:hover {
        background-color: #fff;
      }
    }
    span {
      display: block;
      margin: 10px 0;
      padding: 12px 10px 6px;
      line-height: 1;
      font-weight: 700;
      background-color: darkkhaki;
    }
    img {
      margin-bottom: 10px;
      border: 10px solid white;
    }
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const SstarRating = styled.div`
  align-items: center;
  justify-content: end;
  display: flex;
  border: 1px solid white;
  padding: 10px 20px;
  width: calc(100% - 40px);
  background: white;
  background: linear-gradient(
    90deg,
    rgba(176, 122, 0, 1) 0%,
    rgba(251, 248, 77, 1) ${(props) => props.percentage}%,
    rgba(255, 255, 255, 1) ${(props) => props.percentage}%,
    rgba(255, 255, 255, 1) 100%
  );
  div {
    font-weight: 700;
  }
`;

export { STableGrid, SSearchBar, SstarRating };
