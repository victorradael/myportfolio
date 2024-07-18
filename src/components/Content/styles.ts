import styled from "styled-components";
import Theme from "../../utils/theme.json";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex: 1;
`;

export const InfoCard = styled.div`
  margin-top: 5rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem 1rem;

  max-width: 40rem;

  color: #fff;

  h1 {
    color: ${Theme.colors.secondary};

    @media (max-width: 600px) {
      margin-top: 0.6rem;
      line-height: 1rem;
      font-size: 1.2em;
    }
  }

  @media (max-width: 600px) {
    margin-top: 0.6rem;
  }
`;

export const DescribeCard = styled.div`
  padding: 0rem 0rem 0rem;

  @media (max-width: 1920px) {
    padding: 4rem 0rem 0rem;
  }
  max-width: 30rem;
`;
