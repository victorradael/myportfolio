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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
`;

export const ButtonRotate = styled.button`
  height: 50px;
  width: 50px;
  border: none;
  background: #61dafb;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  padding: 16px;
  color: #764abc;
  transition: 0.4s;
  margin-bottom: 32px;
  border-radius: 50%;
  box-shadow: 1px 1px 10px 10px rgba(160, 114, 186, 0.5);

  &:focus {
    outline: none;
  }

  &:hover {
    color: #61dafb;
    background: #764abc;
    box-shadow: 1px 1px 15px 15px rgba(160, 114, 186, 0.5);
  }
`;

interface Props {
  rotate: boolean;
}

export const Card = styled.div<Props>`
  width: 1080px;
  height: 600px;
  background: rgba(0, 0, 0, 0.6);

  color: #f4f4f4;

  box-shadow: 1px 1px 5px 5px rgba(160, 114, 186, 0.5);
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
  border: 5px solid transparent;

  border-radius: 16px;
  transition: 0.7s;

  padding: 16px;

  &:hover {
    border: 5px solid #764abc;
  }
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
    font-family: "Press Start 2P", cursive;
    font-size: 24px;
    &:hover {
      color: #61dafb;
    }
  }
`;

export const DevInfoDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    text-align: justify;

    font-family: "Roboto", sans-serif;
  }
`;

export const DevInfoContacts = styled.div`
  margin-top: 48px;
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
