import TwitterIcon from "@material-ui/icons/Twitter";
import { SocialLinkButton } from "./SocialLinkButton";
import React from "react";

interface ButtonProps {
  text: string;
  link: string;
}
export const TwitterLinkButton = ({ text, link }: ButtonProps) => {
  return (
    <SocialLinkButton
      icon={<TwitterIcon />}
      text={text}
      link={link}
    ></SocialLinkButton>
  );
};
