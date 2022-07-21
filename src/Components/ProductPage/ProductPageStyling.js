import styled from "styled-components";

export const Product = styled.section`
  width: 80%;
  margin: 3rem auto;
  font-family: ${(props) => props.theme.mens.fontFamily};
`;

export const BreadCrumb = styled.div`
  display: flex;
  margin-top: 2rem;
  p {
    margin: 0.5rem 0.5rem 0.5rem 0;
    font-size: 0.8em;
    color: #3a3a3a;
  }
`;

export const ProductDetail = styled.div`
  font-size: 1.5em;

  h1 {
    margin: 1rem 0 0 0;
  }

  p {
    margin: 0.5rem 0 1rem 0;
    color: #3a3a3a;
  }
`;

export const ProductWindow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const SuggestWindow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media(max-width: 426px) {
    text-align:center;
  }
`;

export const CaroselRow = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

export const ProductRow = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem 0;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 0;
  }
`;

export const ProductInfo = styled.div`
  width: 50%;
  margin: 2rem auto;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const TabsWindow = styled.div`
  margin: 0 0 0.8rem 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
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

export const Colors = styled.div`
  display: flex;
  font-size: 0.8em;
  p {
    margin: 0 0.3rem;
  }
`;

export const Reviews = styled.div`
  width: 100%;
  background-color: rgb(220, 220, 220, 0.7);
`;

export const Rating = styled.span`
  display: flex;
  align-items: center;
  padding: 1.5rem 1rem;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;

  p {
    margin: 0.2rem;
  }
`;

export const Upsale = styled.div`
  width: 100%;
  display: flex;

  div {
    margin: 0.5rem;
  }
`;

export const Suggested = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  margin: auto;

  @media (max-width: 426px) {
    justify-content: center;
  }
`;

export const CustomerRating = styled.span`
  display: flex;
  align-items: center;

  p {
    margin: 0.2rem;
  }
`;