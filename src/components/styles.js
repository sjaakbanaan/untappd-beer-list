import styled from "styled-components";

const SSearchBar = styled.ul`
  input {
    border: 1px solid white;
    color: black;
    background-color: darkgray;
    padding: 12px;
    width: 200px;
    font-weight: 700;
  }
`;

const STableGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 -5px;
  li {
    cursor: pointer;
    padding: 0;
    margin: 5px;
    background: white;
    color: #000;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    }
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export { STableGrid, SSearchBar };
