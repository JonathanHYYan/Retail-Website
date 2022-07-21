import styled from "styled-components";

export const ProductGallery = styled.section`
  max-width: 1500px;
  width: 80%;
  margin: 5em auto;
  font-family: ${(props) => props.theme.mens.fontFamily};
  display: flex;
  flex-direction: column;

  @media (max-width: 1148px) {
    width: 95%;
    margin: 3em auto;
  }
`;

export const CatHeader = styled.h2`
  text-transform: uppercase;
  font-weight: bold;
  margin: 2rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0 auto 4rem 0;

  @media (max-width: 526px) {
    justify-content: center;
    margin: 0 auto 8rem 0;
  }
`;
