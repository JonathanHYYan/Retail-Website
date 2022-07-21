import styled from "styled-components";

export const Colors = styled.div`
  display: flex;
  font-size: 0.8em;
  p {
    margin: 0 0.3rem;
  }

  @media(max-width: 1024px) {
    text-align:center;
    font-size: 0.6rem;
  }
`;

export const ProductInfo = styled.div`
  width: 50%;
  margin: 2rem auto;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items:center;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const DetailsWindow = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  width: 80%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const DetailsTab = styled.button`
  background-color: inherit;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.3rem 0;
  transition: 0.3s;
  font-size: 0.9em;
  border-top: 2px solid transparent;
  border-bottom: 2px solid
    ${(props) => (props.isSelected ? "#dc0019" : "transparent")};
  opacity: ${(props) => (props.isSelected ? "1" : "0.7")};

  :hover {
    opacity: 1;
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: center;
  p {
    margin: 0;
    color: #3a3a3a;
    font-size: 0.8em;
    line-height: 1.6;
  }
  div {
    width: 80%;
    margin-top: 0.5rem;
  }
  ul {
    margin-top: 0.5rem;
    list-style-position: outside;
  }
  li {
    color: #3a3a3a;
    font-size: 0.8em;
    padding: 0.5em 0;
  }
`;

export const TabsWindow = styled.div`
  margin: 0 0 0.8rem 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;