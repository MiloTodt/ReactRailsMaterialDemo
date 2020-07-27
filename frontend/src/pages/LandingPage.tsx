import Container from "@material-ui/core/Container";
import React from "react";
import { AppCard } from "../components/AppCard";
import { LoginForm } from "../partials/LoginForm";
import { SocialMediaLinks } from "../partials/SocialMediaLinks";

export const LandingPage = () => {
  return (
    <>
      <div className="container">
        <Container maxWidth="xs">
          <AppCard>
            <LoginForm />
            <SocialMediaLinks />
          </AppCard>
        </Container>
      </div>
    </>
  );
};
