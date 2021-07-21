import styled from "styled-components";
import Theme from "../../utils/theme.json";
import banner from "../../assets/banner.jpeg";

export const Container = styled.div`
  background: ${Theme.colors.blackGlass};

  display: flex;
  box-sizing: border-box;
  justify-content: left;
  align-items: center;
  width: 100%;
  padding: 0rem 0.3rem;

  h1 {
    margin-left: 3rem;
    font-family: "Staatliches", cursive;
    color: ${Theme.colors.secondary};

    @media (max-width: 600px) {
      margin-left: 1rem;
    }
  }

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
