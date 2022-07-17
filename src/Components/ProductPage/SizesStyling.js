import styled from "styled-components";

let accentColor = Props => Props.theme.mens.accent;

export const SizeBox = styled.div`
  width: 40%;
  margin: auto;
  display: flex;
  padding: 0 2rem 2rem 2rem;
  flex-wrap: wrap;
  justify-content: space-evenly;

  h1 {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const Size = styled.button`
  cursor: pointer;
  width: 5rem;
  height 4rem;
  background-color: ${(props) =>
    props.isSelected ? accentColor : "white"};
  color: ${props => props.isSelected ? "white" : "black"};
  margin: 0.5rem;
  border: 1px solid lightgrey;
  border-radius: 0.6rem;
  display:flex;
  justify-content: center;
  align-items: center;

  :select {
    border: 1px solid black;
  }
`;
