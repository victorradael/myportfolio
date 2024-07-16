import styled from "styled-components";
import Theme from "../../utils/theme.json";

export const View = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0rem 1rem;
  top: 15rem;
  max-width: 40rem;
  min-height: 22.5rem;
  background: linear-gradient(
    33deg,
    rgba(0, 0, 0, 0.9) 50%,
    rgba(48, 48, 48, 0.9)
  );
  color: #f4f4f4;
  box-shadow: 1px 1px 5px 5px ${Theme.colors.lightWhite};
  border-radius: 16px;
  padding: 1.375rem 4rem;
  font-family: "Roboto", sans-serif;

  transition: all 0.8s;
  transform-style: preserve-3d;

  &:hover {
    box-shadow: 1px 1px 5px 5px ${Theme.colors.lightSecondary};
  }

  //

  transform-style: preserve-3d;
  transform: translateZ(0);

  background-color: rgba(126, 126, 126, 0.212);
  backdrop-filter: saturate(180%) blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.411);

  //

  @media (max-width: 600px) {
    top: 8rem;
    padding: 1.375rem 1rem;
    width: 90%;
  }
`;

export const Front = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const DevInfoHeader = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ProfileImage = styled.img`
  height: 7.375rem;
  margin-right: 2rem;
  transition: 0.4s;

  width: 10rem;
  height: 11.5rem;
  object-fit: cover;

  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);

  @media (max-width: 600px) {
    flex-direction: column;
    margin: 0;
  }
`;

export const Bio = styled.p`
  font-size: 1.5rem;
  margin: 1rem 0rem;

  @media (max-width: 600px) {
    text-align: justify;
    font-size: 1rem;
  }
`;

export const Title = styled.h1`
  transition: 0.4s;
  font-weight: bold;
  font-size: 2rem;
  text-transform: uppercase;
  font-family: "Staatliches", cursive;
  margin: 0.3rem 0rem;
  color: ${Theme.colors.secondary};
`;
