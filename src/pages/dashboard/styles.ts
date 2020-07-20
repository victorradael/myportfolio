import styled, { css } from "styled-components";

import background from "../../assets/background.png";
import logos from "../../assets/kb4invertidos.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(21, 6, 58, 0.383), rgba(0, 0, 0, 0.253)),
    url(${background}) no-repeat fixed center;

  overflow: hidden;

  align-items: center;
  perspective: 1000px;
`;

interface Props {
  rotate: boolean;
}

export const Card = styled.div<Props>`
  width: 1080px;
  height: 600px;
  background: rgba(0, 0, 0, 0.6);

  color: #f4f4f4;

  margin: 0 auto;
  box-shadow: 1px 1px 5px 5px rgba(160, 114, 186, 0.2);
  border-radius: 16px;

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
  border-radius: 16px;

  overflow: hidden;

  display: grid;
  grid-template-columns: 1fr 1fr;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(21, 6, 58, 0.8))
    no-repeat fixed center;

  ${(props) =>
    props.rotate &&
    css`
      backface-visibility: hidden;
    `}
`;

export const DevInfo = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 16px;
`;

export const DevInfoHeader = styled.div`
  height: 200px;
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 50%;
    border-radius: 50%;
    border: 4px solid #764abc;
    transition: 0.4s;

    &:hover {
      border: 4px solid #61dafb;
    }
  }

  h1 {
    color: #764abc;
    transition: 0.4s;
    &:hover {
      color: #61dafb;
    }
  }
`;

export const DevInfoDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  div {
    text-align: justify;
    margin-bottom: 32px;
  }
`;

export const DevInfoContacts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 0;
    a {
      text-align: center;
      color: #764abc;
      transition: 0.4s;
      &:hover {
        color: #61dafb;
      }
    }
  }
  p {
    font-size: 14px;
    color: #61dafb;
  }
`;

export const Back = styled.div<Props>`
  width: 100%;
  height: 100%;
  border-radius: 16px;

  position: absolute;
  transform: rotateY(180deg);
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(21, 6, 58, 0.9))
    no-repeat fixed center;

  ${(props) =>
    props.rotate === false &&
    css`
      backface-visibility: hidden;
    `}
`;
