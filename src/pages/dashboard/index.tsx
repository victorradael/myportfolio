import React, { useState, useCallback, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import axios from "axios";

import api from "../../services/api";
import logos from "../../assets/SideLogos.png";

import {
  Card,
  Container,
  ButtonRotate,
  Front,
  Back,
  DevInfo,
  DevInfoHeader,
  DevInfoDetails,
  DevInfoContacts,
} from "./styles";

interface IUser {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  repos_url: string;
}

interface IRepository {}

const Dashboard: React.FC = () => {
  const [rotate, setRotate] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  useEffect(() => {
    async function loadUser() {
      const response = await api.get("/victorradael");
      console.log(response.data);
      setUser(response.data);

      if (response) {
        const repos = await axios.get(
          `https://api.github.com/users/${user.login}/repos`
        );
        console.log(repos.data);
        setRepositories(repos.data);
      }
    }

    loadUser();
  }, [user.login]);

  const handleClick = useCallback(() => {
    if (rotate) {
      setRotate(false);
    } else {
      setRotate(true);
    }
  }, [rotate]);

  return (
    <Container>
      <ButtonRotate onClick={handleClick}>
        <GiReturnArrow size={20} />
      </ButtonRotate>
      <Card rotate={rotate}>
        <Front rotate={rotate}>
          <DevInfo>
            <DevInfoHeader>
              <img src={user.avatar_url} alt="Victor Radael Photo" />
              <h1>{user.name}</h1>
            </DevInfoHeader>
            <DevInfoDetails>
              <p>{user.bio}</p>
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
