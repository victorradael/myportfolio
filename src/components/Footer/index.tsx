import React from "react";
import { Container } from "./styles";

const Footer: React.FC = () => {
  const date = new Date();
  return (
    <>
      <Container>
        <p>&copy; Copyright {date.getFullYear()} Radael Developer</p>
      </Container>
    </>
  );
};

export default Footer;
