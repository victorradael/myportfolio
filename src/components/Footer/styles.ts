import styled from "styled-components";
import Theme from "../../utils/theme.json";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${Theme.colors.blackGlass};
  padding: 0 10rem;
  box-sizing: border-box;

  p {
    color: #fff;
  }
`;
