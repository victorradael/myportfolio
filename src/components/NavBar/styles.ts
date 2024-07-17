import styled from "styled-components";
import Theme from "../../utils/theme.json";
import banner from "../../assets/banner.jpeg";

export const Logo = styled.h1`
  line-height: 2rem;
  font-size: 2rem;

  margin-left: 3rem;
  font-family: "Staatliches", cursive;
  color: ${Theme.colors.secondary};

  @media (max-width: 600px) {
    margin-left: 1rem;
    line-height: 1.4rem;
    font-size: 1.4rem;
  }
`;

export const Container = styled.div`
  background: ${Theme.colors.blackGlass};

  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0rem 0.3rem;

  p {
    margin-left: 3rem;
    color: #fff;
  }
`;

export const Banner = styled.div`
  display: flex;
  height: 30rem;
  width: 100%;
  background-image: url(${banner});
  background-position: 0rem 70rem;
`;

export const DevInfoContacts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 20rem;
  /* padding: 0rem 6rem; */
  box-sizing: border-box;
  margin-bottom: 0;
  justify-content: space-between;

  a {
    text-align: center;
    color: ${Theme.colors.hoverOff};
    transition: 0.4s;
    &:hover {
      color: ${Theme.colors.secondary};
    }

    svg {
      height: 1.6rem;
      width: 1.6rem;

      @media (max-width: 600px) {
        height: 2rem;
        width: 2rem;
      }
    }
  }
`;
