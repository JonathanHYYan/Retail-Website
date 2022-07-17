import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  font-family: ${(props) => props.theme.mens.fontFamily};
  align-items: center;
`;

export const NavLinks = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
  color: black;
`;

export const Logo = styled.img`
  max-height: 2.5rem;
  width: auto;
  margin: 1.25rem 2rem;
`;

export const TagList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top: solid 1px LightGray;
  font-family: ${(props) => props.theme.mens.fontFamily};
  font-size: 0.75em;
  padding: 1rem 0;
  overflow: auto;
  white-space: nowrap;
`;

export const TLink = styled(Link)`
  cursor: pointer;
  list-style-type: none;
  text-decoration: none;
  margin: 0 1rem;
  border: 1px solid transparent;
  box-shadow: 1px 1px 2px 0 grey;
  padding: 0.5rem 1rem;
  text-align: center;
  border-radius: 2rem;
  color: black;
  font-weight: bold;

  :hover {
    transition: 0.15s;
    border: 1px solid grey;
    box-shadow: none;
  }

  :focus {
    border: 1px solid blue;
    box-shadow: none;
  }
`;
export const TLinkSell = styled(Link)`
  cursor: pointer;
  list-style-type: none;
  text-decoration: none;
  margin: 0 1rem;
  border: 2px solid transparent;
  box-shadow: 2px 1px 2px 0 grey;
  background-color: ${props => props.theme.mens.accent};
  color: white;
  padding: 0.5rem 1rem;
  text-align: center;
  border-radius: 2rem;
  font-weight: bold;

  :hover {
    transition: 0.15s;
    border: 2px solid ${props => props.theme.mens.accent};
    box-shadow:none;
  }

  :focus {
    border: 2px solid ${props => props.theme.mens.accent};
    box-shadow:none;
  }
`;
