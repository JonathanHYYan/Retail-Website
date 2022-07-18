import styled from "styled-components";

export const Product = styled.section`
  width: 80%;
  margin: 3rem auto;
  font-family: ${(props) => props.theme.mens.fontFamily};
`;

export const BreadCrumb = styled.div`
  display: flex;
  margin-top: 2rem;
  p {
    margin: 0.5rem 0.5rem 0.5rem 0;
    font-size: 0.8em;
  }
`;

export const ProductDetail = styled.div`
  font-size: 1.5em;

  h1 {
    margin: 1rem 0 0 0;
  }

  p {
    margin: 0.5rem 0 1rem 0;
  }
`;

export const ProductWindow = styled.div`
  width: 100%;
`;

export const ProductRow = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem 0;
`;

export const ProductInfo = styled.div`
  width: 50%;
  margin: 2rem auto;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TabsWindow = styled.div`
  margin: 0 0 0.8rem 0;
  background-color: #ddd;
  width:100%;
  display: flex;
  justify-content: space-evenly;
`;
export const DetailsWindow = styled.div`
  width:80%;
`;

export const DetailsTab = styled.button`
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.3rem 0;
  transition: 0.3s;
  font-size: 17px;
  border-bottom: 2px solid transparent;

  :hover {
    border-bottom: 2px solid #ddd;
  }

  :focus {
    border-bottom: 2px solid ${props => props.theme.mens.accent};
  }
`;

export const Details = styled.div`
  height: 10rem;

  p {
    margin:0;
  }
  div {
    margin-top: 0.5rem;
  }
`;

export const Colors = styled.div`
  display: flex;
  font-size: 0.8em;
  p {
    margin: 0 0.3rem;
  }
`;

export const Reviews = styled.div`
  width: 100%;
  background-color: rgb(220, 220, 220, 0.7);
`;

export const Rating = styled.span`
  display: flex;
  align-items: center;
  padding: 1.5rem 1rem;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;

  p {
    margin: 0.2rem;
  }
`;

export const CustomerReviews = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  h1 {
    margin: 2rem 0 0 0;
  }
`;

export const ReviewWindow = styled.section`
  width: 100%;
`;

export const ReviewBoxes = styled.div`
  display: flex;
  padding: 1.5rem 0 1.5rem 1rem;
  width: 100%;
  border: 1px solid rgb(220, 220, 220, 0.9);
  border-radius: 5px;
`;

export const User = styled.div`
  width: 30%;

  p {
    font-weight: bold;
  }

  span {
    font-weight: normal;
  }
`;

export const UserReview = styled.div`
  width: 70%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;

  p {
    font-size: 0.9em;
  }
`;

export const CustomerRating = styled.span`
  display: flex;
  align-items: center;

  p {
    margin: 0.2rem;
  }
`;

export const ReviewButton = styled.button`
  background-color: ${(props) => props.theme.mens.accent};
  border: none;
  border-radius: 5px;
  margin: 2rem 0;
  float:right;
  color:white;
  width 7rem;
  padding: 0.5rem;
  cursor: pointer;
`;

export const Reccomends = styled.div`
  p {
    display: flex;
    align-items: center;
    font-weight: bold;
  }
`;

export const Buy = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

export const Btn = styled.button`
  cursor: pointer;
  background-color:${(props) => props.theme.mens.accent};
  border:none;
  border-radius: 5px;
  color: white;
  padding 1em;
  border-radius: 5px;
`;
