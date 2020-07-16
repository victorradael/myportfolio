import React, { useState, useCallback } from "react";

import logos from "../../assets/sidelogos.png";

import { Card, Container, Front, Back } from "./styles";

const Dashboard: React.FC = () => {
  const [rotate, setRotate] = useState(false);

  const handleClick = useCallback(() => {
    if (rotate) {
      setRotate(false);
    } else {
      setRotate(true);
    }
  }, [rotate]);

  return (
    <Container>
      <button onClick={handleClick}>Girar</button>
      <Card rotate={rotate}>
        <Front rotate={rotate}>
          <div>Frente</div>
        </Front>
        <Back rotate={rotate}>
          <div>Parte de tras</div>
        </Back>
      </Card>
    </Container>
  );
};

export default Dashboard;
