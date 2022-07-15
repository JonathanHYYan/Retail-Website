import styled from "styled-components";

export const Foot = styled.section`
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  padding: 3em 0;
  font-family: ${(props) => props.theme.mens.fontFamily};
`;

export const SignUp = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content:center;

  p{
    font-size: 0.8em;
  }

  h1 {
    font-size: 2.5em;
    margin: 0 0 1rem 0;
  }

  h2 {
    text-transform: uppercase;
    font-size: 1 em;
  }
`;

export const H2 = styled.div`
  display: flex;
  align-items: center;
`;
export const Form = styled.form``;
export const Input = styled.input`
  border-style: none;
  border-bottom: 1px solid white;
  background-color: black;
  color: white;
  outline: none;
  font-size: 0.8em;
  padding: 0.5rem 0;
`;
export const Btn = styled.button`
  cursor: pointer;
  display: inline;
  color: white;
  background-color: black;
  text-transform: uppercase;
  border: 1px solid white;
  font-size: 0.8em;
  padding: 0.5rem ;
`;

export const CService = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  border-left: 1px solid white;
`;

export const Label = styled.label``;

export const Logo = styled.img`
  width: auto;
  height: 2.8em;
  margin: 0;
`;

export const Socials = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0;
`;

export const Misc = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export const Brands = styled.div`
  display: flex;
  height: 50%;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    margin: 1rem 0 0 0;
    font-size: 0.85em;
  }

  ul {
    padding: 0;
  }
  li {
    font-size: 0.8em;
    list-style: none;
    padding: 0.5rem 0;
  }
`;

export const Legal = styled.div`
width:100%;
border-top: 1px solid white;
display:flex;
justify-content: center;
background-color: black;
color:white;
`;

export const Policy = styled.div`
display:flex;
align-items: center;
padding: 0 5em;
font-size: 0.7em;

p{
  padding: 0 1rem;
}
`;