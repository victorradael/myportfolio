import styled from "styled-components";
import background from "../../assets/background.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(21, 6, 58, 0.383), rgba(0, 0, 0, 0.253)),
    url(${background}) no-repeat fixed center;

  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
`;


