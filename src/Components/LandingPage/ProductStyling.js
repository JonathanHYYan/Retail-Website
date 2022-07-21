import styled from "styled-components";

export const ProductGallery = styled.section`
  max-width: 1500px;
  width: 80%;
  margin: 3em auto;
  font-family: ${(props) => props.theme.mens.fontFamily};
  display: flex;
  flex-direction: column;

  @media (max-width: 1148px) {
    width: 95%;
    margin: auto;
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
  margin: auto;

  @media (max-width: 526px) {
    justify-content: center;
  }
`;
