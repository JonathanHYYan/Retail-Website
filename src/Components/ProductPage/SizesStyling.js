import styled from "styled-components";

export const SizeBox = styled.div`
  width: 40%;
  margin:auto;
  display: flex;
  padding: 0 2rem 2rem 2rem;
  flex-wrap: wrap;
  justify-content: space-evenly;

  h1 {
    width:100%;
    display: flex;
    justify-content: center;
  }
`;

export const Size = styled.button`
  cursor: pointer;
  width: 5rem;
  height 2rem;
  background-color: white;
  margin: 0.5rem;
  border: 1px solid lightgrey;
  border-radius: 0.2rem;
  display:flex;
  justify-content: center;
  align-items: center;

  :focus {
    border: 1px solid black;
  }
`;