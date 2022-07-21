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

  @media (max-width: 1024px) {
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
 
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const MobileLink = styled(Link)`
  list-style-type: none;
  text-decoration: none;
  margin: 0 1rem;
  color: black;
  padding: 0.5em;

  @media (max-width: 815px) {
    font-size: 0.8em;
    padding: 0.5em;
  }
`;
export const Search = styled.div`
  list-style-type: none;
  text-decoration: none;
  margin: 0 1rem;
  color: black;
  padding: 0.5em;

  @media (max-width: 1024px) {
    display: none;
  }
`;
export const MobileSearch = styled.div`
  list-style-type: none;
  text-decoration: none;
  margin: 0 1rem;
  color: black;
  padding: 0.5em;

  @media (max-width: 815px) {
    font-size: 0.8em;
    padding: 0.5em;
  }
`;

export const DropLinks = styled.ul`
  display: none;
  font-family: helvetica;
  padding-bottom: 1rem;
  border-bottom: solid 1px LightGray;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
  }
`;

export const Logo = styled.img`
  max-height: 2.5rem;
  width: auto;
  margin: 1.25rem 2rem;
`;

export const NIcon = styled.a`
  cursor:pointer;
  font-size: 1em;
  margin: 0.1rem 3rem;
  display:none;
  @media (max-width: 1024px) {
    display:block;
  }
`;

export const SearchInput = styled.input`
  background-color: #1C1C1C;
  color:white;
  padding:0;
  border-right: none;
  border-bottom: 1px solid white;
  visibility: ${(props) => (props.search ? "visibile" : "hidden")};
  transition-delay: 0.2s;
  transition-timing-function: ease-in-out;
  
  margin: 0 2rem 0 0;
  :focus {
    outline:none;
  }

  @media(max-width: 1024px) {
    display:${(props) => (props.search ? "block" : "none")};;
  }
`;

export const MobileInput = styled.input`
  background-color: white;
  color:black;
  padding:0;
  border-top:none;
  border-right: none;
  border-left:none;
  border-bottom: 1px solid #1c1c1c;
  display: ${(props) => (props.search ? "inline-block" : "none")};
  transition-delay: 0.2s;
  transition-timing-function: ease-in-out;
  
  margin: 0 2rem 0 0;
  :focus {
    outline:none;
  }
`;