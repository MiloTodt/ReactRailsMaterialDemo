import React from "react";
import { NavigationButton } from "./NavigationButton";

interface ButtonProps {
  text: string;
  onClick: any;
}
export const RegisterButton = ({ text, onClick }: ButtonProps) => {
  return <NavigationButton text={text} onClick={onClick} />;
};
