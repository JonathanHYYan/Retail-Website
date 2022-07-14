import styled from "styled-components";
import hero from "../../assets/hero.png";

export const HeroBG = styled.section`
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 60vw;
  font-family: Helvetica;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const HeroText = styled.div`
  padding: 1rem 0 3rem 0;
  color: black;
  text-align: center;
  font-size: 2em;
  font-weight: 2000;
  font-family: Helvetica;
  background-color: rgb(220,220,220, 0.45);
`;

export const Shop = styled.button`
  cursor: pointer;
  color: white;
  background-color: black;
  text-transform: uppercase;
  font-weight: bold;
  padding: 1rem 1.5rem;
  font-size: 0.25em;
`;
