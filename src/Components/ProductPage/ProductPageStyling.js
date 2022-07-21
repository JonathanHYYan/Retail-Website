import styled from "styled-components";

export const Product = styled.section`
  width: 80%;
  max-width: 1400px;
  margin: 3rem auto;
  font-family: ${(props) => props.theme.mens.fontFamily};
`;





export const ProductSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const Upsale = styled.div`
  width: 100%;
  display: flex;

  div {
    margin: 0.5rem;
  }
`;

export const CustomerRating = styled.span`
  display: flex;
  align-items: center;

  p {
    margin: 0.2rem;
  }
`;

export const Specs = styled.div`
width:40%;
display:flex;
padding: 0 1rem;
justify-content:center;
flex-direction: column;

@media(max-width: 1025px) {
  width:100%;
}
`;