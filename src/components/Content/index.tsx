import React from "react";
import { Container, InfoCard } from "./styles";

const Content: React.FC = () => {
  return (
    <Container>
      <InfoCard>
        <h1>How can I help you?</h1>
        <p>
          To find out what Radael Developer can do for you, turn the card over
          and select an element in the knowledge area.
        </p>
      </InfoCard>
    </Container>
  );
};

export default Content;
