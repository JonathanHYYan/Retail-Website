import styled from "styled-components";

let accentColor = (Props) => Props.theme.mens.accent;

export const ColorSection = styled.div`
  display: flex;
  justify-content:center;

  h2 {
    margin: 0;
  }
`;

export const AvailableColors = styled.div`
  display: flex;
  justify-content: space-evenly;
  width:50%;
`;

export const ColorButton = styled.button`
cursor: pointer;
width: 7rem;
height 4rem;
background-color: ${(props) => (props.isSelected ? accentColor : "white")};
color: ${(props) => (props.isSelected ? "white" : "black")};
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

@media (max-width: 524px) {
 margin:0;
}

:select {
  border: 1px solid black;
}
`;