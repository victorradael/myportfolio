import React from "react";
import { Container, DescribeCard, InfoCard } from "./styles";

const Content: React.FC = () => {
  return (
    <Container>
      <InfoCard>
        <DescribeCard>
          <h1>How can I help you?</h1>
          <p>
            To find out what Radael Developer can do for you, turn the card over
            and select an element in the knowledge area.
          </p>
        </DescribeCard>
      </InfoCard>
    </Container>
  );
};

export default Content;
