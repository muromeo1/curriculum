import React from "react";
import { Linkedin, Github, Instagram } from "react-bootstrap-icons";

interface SocialMediaIconProps {
  type: "linkedin" | "github" | "instagram";
}

const SOCIAL_MEDIA_URL_MAP = {
  linkedin: "https://www.linkedin.com/in/murilo-romeo/",
  github: "https://github.com/muromeo1",
  instagram: "https://www.instagram.com/_muromeo/",
};

const SOCIAL_MEDIA_ICON_MAP = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
};

const SociaMediaIcon = ({ type }: SocialMediaIconProps) => {
  return (
    <a href={SOCIAL_MEDIA_URL_MAP[type]} target="_blank">
      {React.createElement(SOCIAL_MEDIA_ICON_MAP[type], {
        size: 35,
        color: "#F1F5F9",
      })}
    </a>
  );
};

export default SociaMediaIcon;
