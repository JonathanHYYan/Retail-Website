import styled from "styled-components";

export const Suggested = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  
  @media (max-width: 526px) {
    justify-content: center;
  }
`;

export const SuggestWindow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media(max-width: 526px) {
    justify-content:center;
    align-items:center;
    text-align:center;
  }
`;