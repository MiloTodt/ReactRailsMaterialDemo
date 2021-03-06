import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import AuthService from "../services/auth-service";
interface ButtonProps {}

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
  },
});

export const LogoutButton = () => {
  const classes = useStyles();
  const handleLogout = async (event: React.FormEvent<HTMLFormElement>) => {
    AuthService.logout();
  };
  return (
    <Button
      variant="contained"
      className={classes.button}
      onClick={(e: any) => handleLogout(e)}
    >
      Logout
    </Button>
  );
};
