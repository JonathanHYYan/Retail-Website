import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction:column;
  justify-content:center;
  margin-bottom: 2rem;
  
  @media (max-width: 1024px) {
    width:85%
  }
`;

export const ImgHolder = styled.div`
  width: 100%;
  height: 30rem;
  display:flex;
  justify-content: center;
  align-items: center;
  overflow:hidden;
  position: relative;
`;
export const Img = styled.img`
  width: 100%;
`;

export const BtnLeft = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left:2.5%;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0px 2px 5px rgba(0 0 0 / 0.25);
  border: 0;
  :hover {
    background: var(--color-ui-hover);
  }

  :focus {
    outline: none;
    border: 1px solid rgba(255, 255, 255, 1);
  }
`;
export const BtnRight = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top 50%;
  right:2.5%;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
  border: 0;
  :hover {
    background: var(--color-ui-hover);
  }

  :focus {
    outline: none;
    border: 1px solid rgba(255, 255, 255, 1);
  }
`;
