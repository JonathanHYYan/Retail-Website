import styled from "styled-components";

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
  height 2rem;
  background-color: white;
  margin: 0.5rem;
  border: 1px solid lightgrey;
  border-radius: 0.2rem;
  display:flex;
  justify-content: center;
  align-items: center;

  :select {
    border: 1px solid black;
  }
`;

export const Tile = styled.div`
  height: 200px;
  width: 170px;
  position: relative;

  input {
    -webkit-appearance: none;
    position: relative;
    height: 100%;
    width: 100%;
    background-color: rgb(255,255,255, 0);
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid transparent;
    outline: none;
    box-shadow: 15px 15px 25px rgba(2,28,53,0.05);
    pointer-event:none;

    :hover {
      transform: scale(1.08);
    }
    :checked {
      border: 3px solid #478bfb;
    }
  }

  label{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 80%;
    width: 100%;
    position: absolute;
    bottom: 0;
    cursor: pointer;
    pointer-event:none;

    h6{
      font-family: "Poppins",sans-serif;
      font-size: 15px;
      font-weight: 400;
      color: #7b7b93;
      pointer-event:none;
    }
  }
`;
