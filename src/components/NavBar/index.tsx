import React from "react";
import { Banner, Container, DevInfoContacts, Logo } from "./styles";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const NavBar: React.FC = () => {
  const logo = "<Radael Developer />";
  return (
    <>
      <Container>
        <Logo>{logo}</Logo>
        <DevInfoContacts>
          <a
            href="https://www.linkedin.com/in/victorradael/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/victorradael"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/victorradael/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </DevInfoContacts>
      </Container>
      <Banner />
    </>
  );
};

export default NavBar;
