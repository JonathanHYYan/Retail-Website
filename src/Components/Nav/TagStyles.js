import styled from "styled-components";
import { Link } from "react-router-dom";

export const TagWindow = styled.div`
  display: flex;
  align-items: center;
`;

export const TagList = styled.div`
  cursor: grabbing;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: ${(props) => props.theme.mens.fontFamily};
  font-size: 0.75em;
  padding: 1rem 0;
  overflow: auto;
  white-space: nowrap;
  overflow-x: hidden;
  scroll-behavior: smooth;
  border-bottom: 1px solid lightgrey;
`;

export const TLink = styled(Link)`
  cursor: pointer;
  list-style-type: none;
  text-decoration: none;
  margin: 0 0.5rem;
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
  background-color: ${(props) => props.theme.mens.accent};
  color: white;
  padding: 0.5rem 1rem;
  text-align: center;
  border-radius: 2rem;
  font-weight: bold;

  :hover {
    transition: 0.15s;
    border: 2px solid ${(props) => props.theme.mens.accent};
    box-shadow: none;
  }

  :focus {
    border: 2px solid ${(props) => props.theme.mens.accent};
    box-shadow: none;
  }
`;

export const TagScrollLeft = styled.div`
  position: absolute;
  left: 0.5%;
  display: flex;
  align-items: center;
  opacity: 0.5;
  cursor: pointer;

  :hover {
    opacity: 1;
  }
`;
export const TagScrollRight = styled.div`
  position: absolute;
  right: 0.5%;
  display: flex;
  align-items: center;
  opacity: 0.5;
  cursor: pointer;

  :hover {
    opacity: 1;
  }
`;
