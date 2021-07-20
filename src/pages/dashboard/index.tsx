import React from "react";
import Card from "../../components/Card";
import Content from "../../components/Content";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

import { Container } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Card />
      <Content />
      <Footer />
    </Container>
  );
};

export default Dashboard;
