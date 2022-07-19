import styled from "styled-components";

export const Card = styled.div`
  width: 18%;
  margin: 0 2rem;

  @media(max-width: 1180px) {
    width: 25%;
  } 

  @media(max-width: 815px) {
    width:80%;
  }

`;

export const Img = styled.img`
  max-width: 100%;
`;

export const Name = styled.p`
  font-size: 1em;
  margin: 8px 0;
`;

export const Type = styled.p`
  font-size: 0.75em;
  margin: 8px 0;
`;

export const Price = styled.p`
  font-weight: bold;
  margin: 8px 0;
`;
