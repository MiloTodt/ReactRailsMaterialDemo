import { render } from "@testing-library/react";
import React from "react";
import { LoginForm } from "../partials/LoginForm";

describe("SocialMediaLinks", () => {
  const renderForm = () => {
    const elem = render(<LoginForm />);
    return elem;
  };

  it("Should render", () => {
    const elem = renderForm();

    expect(elem).not.toBeNull();
  });
  it("Should have a form present", () => {
    const elem = renderForm().queryAllByTestId("login-form");

    expect(elem).toBeDefined();
  });
  it("Should have an entry for email", () => {
    const elem = renderForm().queryAllByTestId("login-email");

    expect(elem).toBeDefined();
  });
  it("Should have an entry for password", () => {
    const elem = renderForm().queryAllByTestId("login-password");

    expect(elem).toBeDefined();
  });
});
