import styled from "styled-components";

const SResultList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
  cursor: pointer;
  li {
    display: block;
    margin: 5px;
    flex: 1 0 calc(25% - 10px);
    text-align: center;
    span {
      display: block;
      margin-bottom: 1rem;
      font-weight: 700;
    }
  }
`;

export { SResultList };
