import React from "react";
import { FacebookLinkButton } from "../components/FacebookLinkButton";
import { TwitterLinkButton } from "../components/TwitterLinkButton";

export const SocialMediaLinks = () => {
  return (
    <>
      <FacebookLinkButton
        data-testid="social-facebook"
        text="Facebook"
        link="https://www.facebook.com"
      />
      <TwitterLinkButton
        data-testid="social-twitter"
        text="Twitter"
        link="https://www.twitter.com"
      />
    </>
  );
};
