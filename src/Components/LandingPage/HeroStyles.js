import styled from "styled-components";
import hero from "../../assets/hero.png";
import { Link } from "react-router-dom";

export const HeroBG = styled.section`
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 60vw;
  font-family: ${(props) => props.theme.mens.fontFamily};
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
  font-family: ${(props) => props.theme.mens.fontFamily};
  background-color: rgb(220, 220, 220, 0.45);

  @media (max-width: 768px) {
    padding: 1rem;
    background-color:white;
    h1 {
      display: none;
    }
  }
`;
export const SLink = styled(Link)`
  list-style-type: none;
  text-decoration: none;
  margin: 0 1rem;
  color: black;
`;

export const Shop = styled.button`
  cursor: pointer;
  color: white;
  background-color: ${(props) => props.theme.mens.accent};
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 1rem 1.5rem;
  font-size: 0.25em;
`;
