import FacebookIcon from "@material-ui/icons/Facebook";
import React from "react";
import { SocialLinkButton } from "./SocialLinkButton";

interface ButtonProps {
  text: string;
  link: string;
}
export const FacebookLinkButton = ({ text, link }: ButtonProps) => {
  return (
    <SocialLinkButton
      icon={<FacebookIcon />}
      text={text}
      link={link}
    ></SocialLinkButton>
  );
};
