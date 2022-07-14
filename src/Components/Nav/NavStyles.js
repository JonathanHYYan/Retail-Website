import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  font-family: Helvetica;
  align-items: center;
`;

export const NavLinks = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
  font-family: Helvetica;
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
  border: 2px solid grey;
  padding: 0.5rem 1rem;
  text-align: center;
  border-radius: 2rem;
  color: black;
  font-weight: bold;

  :hover {
    transition: 0.15s;
    border: 2px solid transparent;
    box-shadow: 1px 1px 2px 0 grey;
  }

  :focus {
    border: 1px solid blue;
  }
`;
export const TLinkSell = styled(Link)`
  cursor: pointer;
  list-style-type: none;
  text-decoration: none;
  margin: 0 1rem;
  border: 2px solid blue;
  padding: 0.5rem 1rem;
  text-align: center;
  border-radius: 2rem;
  color: black;
  font-weight: bold;

  :hover {
    transition: 0.15s;
    border: 2px solid transparent;
    box-shadow: 1px 1px 2px 0 grey;
  }

  :focus {
    border: 1px solid blue;
  }
`;
