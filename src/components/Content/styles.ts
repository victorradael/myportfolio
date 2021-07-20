import styled from "styled-components";
import Theme from "../../utils/theme.json";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const InfoCard = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 40rem;

  color: #fff;

  h1 {
    color: ${Theme.colors.secondary};
  }
`;
