import styled, { css } from "styled-components";

interface Props {
  rotate: boolean;
}

export const View = styled.div<Props>`
  min-width: 30rem;
  min-height: 20rem;
  background: rgba(0, 0, 0, 0.6);

  color: #f4f4f4;

  box-shadow: 1px 1px 5px 5px rgba(97, 217, 251, 0.5);
  border-radius: 16px;

  transition: transform 0.8s;
  transform-style: preserve-3d;
  position: relative;

  ${(props) =>
    props.rotate &&
    css`
      transform: rotateY(180deg);
    `}
`;

export const Front = styled.div<Props>`
  width: 100%;
  height: 100%;
  border-radius: 2rem;

  overflow: hidden;

  display: flex;
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

  border-radius: 2rem;

  padding: 16px;
`;

export const DevInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 5rem;
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
    font-size: 1rem;
    &:hover {
      color: #61dafb;
    }
  }
`;

export const DevInfoDetails = styled.div`
  width: 30%;
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
  padding: 48px;
  box-sizing: border-box;

  position: absolute;
  transform: rotateY(180deg);
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(21, 6, 58, 0.9))
    no-repeat fixed center;

  h1 {
    font-family: "Press Start 2P", cursive;
    color: #764abc;
    transition: 0.4s;

    &:hover {
      color: #61dafb;
    }
  }

  ${(props) =>
    props.rotate === false &&
    css`
      backface-visibility: hidden;
    `}
`;
