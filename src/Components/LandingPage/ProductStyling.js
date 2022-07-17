import styled from "styled-components";

export const ProductGallery = styled.section`
  width: 80%;
  margin: 3em auto;
  font-family: ${(props) => props.theme.mens.fontFamily};
`;

export const CatHeader = styled.h2`
  text-transform: uppercase;
  font-weight: bold;
  margin: 2rem;
`;

export const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
