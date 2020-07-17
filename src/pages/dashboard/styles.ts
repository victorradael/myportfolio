import styled, { css } from "styled-components";
import background from "../../assets/background.png";
import logos from "../../assets/kb4invertidos.png";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(21, 6, 58, 0.383), rgba(0, 0, 0, 0.253)),
    url(${background}) no-repeat fixed center;

  overflow: hidden;
  display: flex;
  align-items: center;
  perspective: 1000px;
`;

interface Props {
  rotate: boolean;
}

export const Card = styled.div<Props>`
  width: 1000px;
  height: 540px;
  background: linear-gradient(rgba(0, 0, 0, 0.253), rgba(38, 23, 88, 0.5));

  color: #f4f4f4;

  margin: 0 auto;
  box-shadow: 1px 1px 5px 5px rgba(160, 114, 186, 0.2);
  border-radius: 8px;

  img {
    border-radius: 0 8px 8px 0;
    transition: transform 0.8s;
  }

  transition: transform 0.8s;
  transform-style: preserve-3d;
  position: relative;

  ${(props) =>
    props.rotate &&
    css`
      transform: rotateY(180deg);
      background: url(${logos}) no-repeat fixed center;
    `}
`;

export const Front = styled.div<Props>`
  width: 100%;
  height: 100%;
  position: absolute;

  display: grid;
  grid-template-columns: 1fr 1fr;

  ${(props) =>
    props.rotate &&
    css`
      backface-visibility: hidden;
      background: rgba(38, 23, 88, 0.5);
    `}
`;

export const Back = styled.div<Props>`
  width: 100%;
  height: 100%;

  position: absolute;
  transform: rotateY(180deg);
  background: rgba(0, 0, 0, 0.85);
  border-radius: 8px;

  ${(props) =>
    props.rotate === false &&
    css`
      backface-visibility: hidden;
    `}
`;
