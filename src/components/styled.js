import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 90vw;
  @media (max-width: 480px) {
    width: 100vw;
  }
`;

export const Panel = styled.div`
  background-image: url(${(props) => props.img});
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  flex: 0.5;
  margin: 10px;
  transition: flex 0.7s ease-in;
  position: relative;
  &.active {
    flex: 5;
    h3 {
      opacity: 1;
    }
  }
  h3 {
    font-size: 24px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    opacity: 0;
    transition: opacity 1.5s ease-in-out;
  }
  @media (max-width: 480px) {
    &:nth-of-type(4),
    &:nth-of-type(5) {
      display: none;
    }
  }
`;
