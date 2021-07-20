import styled from "styled-components";
import Theme from "../../utils/theme.json";
import banner from "../../assets/banner.jpeg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: ${Theme.colors.blackGlass};
  padding: 0 10rem;
  box-sizing: border-box;

  h1 {
    font-family: "Staatliches", cursive;
    color: ${Theme.colors.secondary};
  }

  p {
    margin-left: 3rem;
    color: #fff;
  }
`;

export const Banner = styled.div`
  display: flex;
  height: 80rem;
  width: 100%;
  background-image: url(${banner});
  background-position: 0rem 70rem;
`;
