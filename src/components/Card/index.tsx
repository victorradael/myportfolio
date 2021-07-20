import React, { useState, useCallback, useEffect } from "react";
import {
  FaDocker,
  FaAngular,
  FaReact,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaVuejs,
  FaBootstrap,
  FaAws,
  FaGitAlt,
  FaGitlab,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3,
  FaLinux,
} from "react-icons/fa";
import { DiPostgresql, DiMongodb, DiSass } from "react-icons/di";

import api from "../../services/api";

import {
  Front,
  Title,
  DevInfoContacts,
  DevInfoHeader,
  View,
  Back,
  ProfileImage,
  Bio,
  Email,
  ArrowRight,
  Techs,
} from "./styles";

interface IUser {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  repos_url: string;
}

const Card: React.FC = () => {
  const [rotate, setRotate] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({} as IUser);

  const techs = [
    {
      icon: <FaAngular color="#d6002f" size="3.75rem" />,
    },
    {
      icon: <FaReact color="#5ed3f3" size="3.75rem" />,
    },
    {
      icon: <FaReact color="#6550a0" size="3.75rem" />,
    },
    {
      icon: <FaVuejs color="#00b37d" size="3.75rem" />,
    },
    {
      icon: <FaBootstrap color="#613c8e" size="3.75rem" />,
    },
    {
      icon: <FaAws color="#ff9900" size="3.75rem" />,
    },
    {
      icon: <FaDocker color="#2391e6" size="3.75rem" />,
    },
    {
      icon: <FaGitAlt color="#e94e31" size="3.75rem" />,
    },
    {
      icon: <FaGithub color="#1b1f23" size="3.75rem" />,
    },
    {
      icon: <FaGitlab color="#f46b25" size="3.75rem" />,
    },
    {
      icon: <FaNodeJs color="#8bc500" size="3.75rem" />,
    },
    {
      icon: <FaJs color="#efd81d" size="3.75rem" />,
    },
    {
      icon: <FaHtml5 color="#f16529" size="3.75rem" />,
    },
    {
      icon: <FaCss3 color="#00a8d9" size="3.75rem" />,
    },
    {
      icon: <FaLinux color="#777" size="3.75rem" />,
    },
    {
      icon: <DiPostgresql color="#316192" size="3.75rem" />,
    },
    {
      icon: <DiMongodb color="#10a54e" size="3.75rem" />,
    },
    {
      icon: <DiSass color="#c76494" size="3.75rem" />,
    },
  ];

  useEffect(() => {
    async function loadUser() {
      const response = await api.get("/victorradael");
      setUser(response.data);
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
    <>
      <View rotate={rotate}>
        <ArrowRight onClick={handleClick} />
        <Front rotate={rotate}>
          <Title>{user.name}</Title>
          <DevInfoHeader>
            <ProfileImage src={user.avatar_url} alt="Profile" />
            <Bio>{user.bio}</Bio>
          </DevInfoHeader>

          <DevInfoContacts>
            <a
              href="https://github.com/victorradael"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub size="3rem" />
            </a>
            <a
              href="https://www.linkedin.com/in/victorradael/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin size="3rem" />
            </a>
            <a
              href="https://www.instagram.com/victorradael/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagram size="3rem" />
            </a>
            <a
              href="https://twitter.com/VictorRadael"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaTwitter size="3rem" />
            </a>
          </DevInfoContacts>
          <Email>victorradael@hotmail.com</Email>
        </Front>
        <Back rotate={rotate}>
          <Title>Knowledge</Title>
          <Techs>
            {techs.map((tech) => {
              return tech.icon;
            })}
          </Techs>
        </Back>
      </View>
    </>
  );
};

export default Card;
