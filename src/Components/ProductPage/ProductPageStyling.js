import styled from "styled-components";

export const Product = styled.section`
  width: 80%;
  max-width: 1400px;
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
