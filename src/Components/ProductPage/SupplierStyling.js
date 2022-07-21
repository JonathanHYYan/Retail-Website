import styled, { keyframes } from "styled-components";

const wobble = keyframes`
0% {
  -webkit-transform: none;
  transform: none
}
15% {
  -webkit-transform: translate3d(-10%, 0, 0) rotate3d(0, 0, 1, -5deg);
  transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)
}
30% {
  -webkit-transform: translate3d(5%, 0, 0) rotate3d(0, 0, 1, 3deg);
  transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)
}
45% {
  -webkit-transform: translate3d(-2%, 0, 0) rotate3d(0, 0, 1, -3deg);
  transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)
}
60% {
  -webkit-transform: translate3d(1%, 0, 0) rotate3d(0, 0, 1, 2deg);
  transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)
}
75% {
  -webkit-transform: translate3d(0%, 0, 0) rotate3d(0, 0, 1, -1deg);
  transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)
}
100% {
  -webkit-transform: none;
  transform: none
}
`;

export const SupplierSection = styled.div`
  width: 40%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 80%;
  }

  h1 {
    width: 100%;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 80%;
  }

  h2 {
    text-transform: capitalize;
    margin: 0;
  }

  p {
    margin: 0;
  }

  :focus {
    border: 1px solid black;
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0.5rem;
  position:relative;
`;

export const Sale = styled.div`
  display: ${(props) => (props.sale ? "block" : "none")};
  padding-left: 1rem;
  animation: ${wobble} 2s linear infinite;
  position: absolute;
  right:-70%;
  top: -50%;

  @media(max-width: 526px) {
    right:-50%;
    top: -50%;
  }
`;
