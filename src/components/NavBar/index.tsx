import React from "react";
import { Banner, Container } from "./styles";

const NavBar: React.FC = () => {
  const logo = "<Radael Developer />";
  return (
    <>
      <Container>
        <h1>{logo}</h1>
      </Container>
      <Banner />
    </>
  );
};

export default NavBar;
