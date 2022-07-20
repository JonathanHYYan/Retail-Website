import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  font-family: ${(props) => props.theme.mens.fontFamily};
  align-items: center;
  border-bottom: solid 1px LightGray;
  background-color: #1C1C1C;
`;

export const NavLinks = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 815px) {
    display: none;
  }
`;

export const LLink = styled(Link)`
  list-style-type: none;
  text-decoration: none;
  color: black;
`;
export const NLink = styled(Link)`
  list-style-type: none;
  text-decoration: none;
  margin: 0 1rem;
  color: white;
 
  @media (max-width: 815px) {
    display: none;
  }
`;
export const DLink = styled(Link)`
  list-style-type: none;
  text-decoration: none;
  margin: 0 1rem;
  color: black;

  @media (max-width: 815px) {
    font-size: 0.6em;
    padding: 0.5em;
  }
`;

export const DropLinks = styled.ul`
  display: none;
  font-family: helvetica;
  padding-bottom: 1rem;
  border-bottom: solid 1px LightGray;

  @media (max-width: 815px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 700px) {
    flex-direction:column;
  }
`;

export const Logo = styled.img`
  max-height: 2.5rem;
  width: auto;
  margin: 1.25rem 2rem;
`;

export const NIcon = styled.a`
  font-size: 1em;
  margin: 0.1rem 3rem;
  display:none;
  @media (max-width: 815px) {
    display:block;
  }
`;

