import React, { useState, useCallback, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import axios from "axios";

import api from "../../services/api";


import {
  Front,
  DevInfo,
  DevInfoContacts,
  DevInfoDetails,
  DevInfoHeader,
  View, 
  Back
} from "./styles";

interface IUser {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  repos_url: string;
}

interface IRepository {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

const Card: React.FC = () => {
  const [rotate, setRotate] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({} as IUser);


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
      <View rotate={rotate} onClick={handleClick}>
        <Front rotate={rotate}>
          <DevInfo>
            <DevInfoHeader>
              <img src={user.avatar_url} alt="Profile" />
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
        </Front>
        <Back rotate={rotate}>
          <h1>Back</h1>
        </Back>
      </View>
    </>
  )
}

export default Card