import styled from "styled-components";

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

  div {
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

export const Recommends = styled.div`
  p {
    display: flex;
    align-items: center;
    font-weight: bold;
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
