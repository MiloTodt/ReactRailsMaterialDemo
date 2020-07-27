import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

interface ButtonProps {
  text: string;
  onClick: any;
}

const useStyles = makeStyles({
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 38,
    padding: "0 30px",
    marginBottom: "10px",
    marginTop: "10px",
    marginRight: "10px",
  },
});

export const NavigationButton = ({ text, onClick }: ButtonProps) => {
  const classes = useStyles();
  return (
    <Button variant="contained" className={classes.button} onClick={onClick}>
      {text}
    </Button>
  );
};
