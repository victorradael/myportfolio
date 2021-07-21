import styled from "styled-components";
import Theme from "../../utils/theme.json";

export const Container = styled.footer`
  background: ${Theme.colors.blackGlass};

  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0rem 0.3rem;

  p {
    color: #fff;
    font-size: 1rem;
  }
`;
