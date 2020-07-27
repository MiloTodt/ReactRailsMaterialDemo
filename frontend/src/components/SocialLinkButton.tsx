import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

interface ButtonProps {
  text: string;
  icon: any;
  link: string;
}

const useStyles = makeStyles({
  button: {
    background: "linear-gradient(45deg, #000428 50%, #004e92 90%)",
    border: 0,
    borderRadius: 3, // Size of 'roundness'
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 38,
    width: "51%", // Ensures items stack horizontally
    padding: "0 30px",
    marginBottom: "5px",
    "& .MuiButton-endIcon": {
      align: "right",
      marginLeft: 26,
      marginRight: -20,
    },
  },
});

export const SocialLinkButton = ({
  text,
  icon,
  link,
}: React.PropsWithChildren<ButtonProps>) => {
  const classes = useStyles();

  return (
    <Button
      data-testid="social-button"
      variant="contained"
      className={classes.button}
      size="large"
      endIcon={icon}
      target="_blank"
      href={link}
    >
      {text}
    </Button>
  );
};
