import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoscroll from "embla-carousel-auto-scroll";
import { Embla, EmblaContainer, EmblaSlide } from "./styles";
import {
  FaDocker,
  FaAngular,
  FaReact,
  FaGithub,
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
  FaPython,
} from "react-icons/fa";
import {
  DiPostgresql,
  DiMongodb,
  DiSass,
  DiGo,
  DiDjango,
  DiTerminal,
} from "react-icons/di";

const Carousel: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoscroll({ speed: 1 }),
  ]);

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
      icon: <FaGithub color="#f1f1f1" size="3.75rem" />,
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
    {
      icon: <DiGo color="#00a7d0" size="3.75rem" />,
    },
    {
      icon: <DiDjango color="#0c4b33" size="3.75rem" />,
    },
    {
      icon: <FaPython color="#326b9a" size="3.75rem" />,
    },
    {
      icon: <DiTerminal color="#555" size="3.75rem" />,
    },
  ];

  return (
    <Embla ref={emblaRef}>
      <EmblaContainer>
        {techs.map((tech) => {
          return <EmblaSlide>{tech.icon}</EmblaSlide>;
        })}
      </EmblaContainer>
    </Embla>
  );
};
export default Carousel;
