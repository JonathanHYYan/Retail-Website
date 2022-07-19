import styled from "styled-components";

let accentColor = Props => Props.theme.mens.accent;

export const SizeBox = styled.div`
  width: 40%;
  margin: auto;
  display: flex;
  padding: 0 2rem 2rem 2rem;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media (max-width: 1024px) {
    width:70%;
    margin:auto;
    padding:0;
  }
  @media (max-width: 768px) {
    width:100%;
    padding:0;
  }

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

  
  @media(max-width: 1200px) {
    transform: scale(0.8);
    margin: 0.1rem;
  }

  :select {
    border: 1px solid black;
  }
`;
