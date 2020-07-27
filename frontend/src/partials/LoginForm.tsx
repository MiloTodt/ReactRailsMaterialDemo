import { FormControl, FormHelperText } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { SignInButton } from "../components/SignInButton";
// import { RegisterButton } from "../components/RegisterButton";
import AuthService from "../services/auth-service";
import UserService from "../services/user-service";

interface LoginProps {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    const user = {
      email: email,
      password: password,
    };
    try {
      await AuthService.login(user.email, user.password);
    } catch (err) {
      alert("Invalid Login Information");
    }
  };

  // const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
  //   const user = {
  //     email: email,
  //     password: password,
  //   };
  //   try {
  //     await AuthService.register(user.email, user.password);
  //   } catch (err) {
  //     alert("Invalid Registration Information");
  //     return;
  //   }
  //   alert("Registered successfully, you may now sign in");
  // };

  return (
    <>
      <FormControl data-testid="login-form">
        <TextField
          data-testid="login-email"
          variant="outlined"
          margin="normal"
          fullWidth
          id="email"
          label="Email"
          autoComplete="email"
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          data-testid="login-password"
          variant="outlined"
          margin="normal"
          fullWidth
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormHelperText id="password-helper-text">Forgot?</FormHelperText>

        <SignInButton
          data-testid="login-signin-button"
          text="Sign In"
          onClick={async (e: any) => {
            await handleLogin(e);
            const items = await UserService.getStoreItems();
            console.log(items);
          }}
        />
        {/* <RegisterButton
          text="Register"
          onClick={async (e: any) => {
            await handleRegister(e);
          }}
        /> */}
      </FormControl>
    </>
  );
};
