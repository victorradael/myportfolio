import React, { useState, useCallback } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

import logos from "../../assets/SideLogos.png";

import {
  Card,
  Container,
  Front,
  Back,
  DevInfo,
  DevInfoHeader,
  DevInfoDetails,
  DevInfoContacts,
} from "./styles";

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
          <DevInfo>
            <DevInfoHeader>
              <img
                src="https://avatars2.githubusercontent.com/u/53879758?s=460&u=4658453ce742cba23ca4624949e8d4dd521f1513&v=4"
                alt="Victor Radael Photo"
              />
              <h1>Victor Radael</h1>
            </DevInfoHeader>
            <DevInfoDetails>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam.
                Eget gravida cum sociis natoque penatibus et. Diam quis enim
                lobortis scelerisque fermentum dui faucibus.
              </div>
              <DevInfoContacts>
                <div>
                  <a href="https://github.com/victorradael">
                    <FaGithub size={35} />
                  </a>
                  <a href="https://www.linkedin.com/in/victorradael/">
                    <FaLinkedin size={35} />
                  </a>
                  <a href="https://www.instagram.com/victorradael/">
                    <FaInstagram size={35} />
                  </a>
                  <a href="https://twitter.com/VictorRadael">
                    <FaTwitter size={35} />
                  </a>
                </div>
                <p>victorradael@hotmail.com</p>
              </DevInfoContacts>
            </DevInfoDetails>
          </DevInfo>
          <img src={logos} alt="Side Logos" />
        </Front>
        <Back rotate={rotate}>
          <div>Parte de trás</div>
        </Back>
      </Card>
    </Container>
  );
};

export default Dashboard;
