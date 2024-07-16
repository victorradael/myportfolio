import React, { useState, useEffect } from "react";



import api from "../../services/api";
import Carousel from "../../components/Carousel"

import {
  Front,
  Title,
  DevInfoHeader,
  View,
  ProfileImage,
  Bio
} from "./styles";

interface IUser {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  repos_url: string;
}

const Card: React.FC = () => {
  const [user, setUser] = useState<IUser>({} as IUser);

  useEffect(() => {
    async function loadUser() {
      const response = await api.get("/victorradael");
      setUser(response.data);
    }

    loadUser();
  }, [user.login]);

  return (
    <>
      <View>
       
        <Front>
          <Title>{user.name}</Title>
          <DevInfoHeader>
            <ProfileImage src={user.avatar_url} alt="Profile" />
            <Bio>{user.bio}</Bio>
          </DevInfoHeader>
          <Carousel/>
        </Front>
      </View>
    </>
  );
};

export default Card;
