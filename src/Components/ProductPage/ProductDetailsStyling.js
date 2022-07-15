import styled from "styled-components";

export const Details = styled.div`
cursor: pointer;
display:flex;
flex-direction: column;
width:100%;
text-align: center;

h1{
  text-decoration: underline;
  font-size: 1.2em;
}
`;

export const DetailBox = styled.div`
display: flex;
width: 60%;
margin:auto;
flex-direction: column;
justify-content: center;
text-align: center;
font-size: 0.9em;

h2 {
  padding: 1.5rem 0 0 0;
}

ul {
  display:flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin: auto;
}
`;