import styled from "styled-components";

const STableGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  li {
    cursor: pointer;
    margin: 5px;
    background: powderblue;
    padding: 0 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    span {
      display: block;
      margin: 10px 0;
      font-weight: 700;
    }
    img {
      margin-bottom: 10px;
    }
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export { STableGrid };
