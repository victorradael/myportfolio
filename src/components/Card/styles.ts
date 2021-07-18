import styled, { css } from "styled-components";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  rotate: boolean;
}

export const ArrowRight = styled(FaArrowRight)`
  position: absolute;
  right: 2rem;
  top: 2rem;

  width: 1.5rem;
  height: 1.5rem;

  transition: 0.4s;

  &:hover {
    cursor: pointer;
    color: rgba(97, 217, 251, 1);
  }
`;

export const View = styled.div<Props>`
  width: 40rem;
  height: 22.5rem;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(21, 6, 58, 0.9));
  color: #f4f4f4;
  box-shadow: 1px 1px 5px 5px rgba(97, 217, 251, 0.5);
  border-radius: 16px;
  padding: 1.375rem 4rem;
  font-family: "Roboto", sans-serif;

  transition: transform 0.8s;
  transform-style: preserve-3d;

  ${(props) =>
    props.rotate &&
    css`
      transform: rotateY(180deg);
    `}
`;

export const Front = styled.div<Props>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  ${(props) =>
    props.rotate &&
    css`
      backface-visibility: hidden;
      display: none;
    `}
`;

export const DevInfoHeader = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const ProfileImage = styled.img`
  height: 7.375rem;
  border-radius: 50%;
  border: 4px solid #764abc;
  margin-right: 2rem;
  transition: 0.4s;

  &:hover {
    border: 4px solid #61dafb;
  }
`;

export const Bio = styled.p`
  font-size: 1.5rem;
`;

export const Title = styled.h1`
  color: #764abc;
  transition: 0.4s;
  font-weight: bold;
  font-size: 2rem;
  text-transform: uppercase;
  font-family: "Staatliches", cursive;
  margin: 0.3rem 0rem;
  &:hover {
    color: #61dafb;
  }
`;

export const DevInfoContacts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  padding: 0rem 6rem;
  box-sizing: border-box;
  margin-bottom: 0;
  justify-content: space-between;
  a {
    text-align: center;
    color: #764abc;
    transition: 0.4s;
    &:hover {
      color: #61dafb;
    }
  }
`;

export const Email = styled.p`
  font-size: 1.5rem;
`;

export const Back = styled.div<Props>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  transform: rotateY(180deg);

  ${(props) =>
    props.rotate === false &&
    css`
      backface-visibility: hidden;
      display: none;
    `}
`;

export const Techs = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
`;
