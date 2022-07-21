import styled from "styled-components";

export const SupplierBox = styled.div`
width: 40%;
margin: auto;
display: flex;
padding: 0 2rem 2rem 2rem;
flex-wrap: wrap;
justify-content: center;

@media(max-width: 1024px) {
  width: 80%;
}

h1 {
  width:100%;
  display: flex;
  justify-content: center;
  font-size: 1.7em;
}
`;

export const Supplier = styled.button`
  cursor: pointer;
  width: 70%;
  height: 6rem;
  background-color: white;
  border: 1px solid lightgrey;
  margin: 0.5rem 0;
  border-radius: 0.5rem;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;

  @media(max-width: 1024px) {
    width: 80%;
  }
 

  h2 {
    text-transform: capitalize;
    margin:0;
  }

  p{
    margin:0;
  }

  :focus {
    border: 1px solid black;
  }
`;