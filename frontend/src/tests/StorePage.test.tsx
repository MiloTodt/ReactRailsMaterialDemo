import { render } from "@testing-library/react";
import React from "react";
import { StorePage } from "../pages/StorePage";

describe("SocialMediaLinks", () => {
  const renderForm = () => {
    const elem = render(<StorePage />);
    return elem;
  };

  it("Should have a start shopping button", () => {
    const elem = renderForm().queryAllByTestId("store-shopping-button");

    expect(elem).toBeDefined();
  });
  it("Should have a container", () => {
    const elem = renderForm().queryAllByTestId("store-container");

    expect(elem).toBeDefined();
  });
  it("Should have a button to log out", () => {
    const elem = renderForm().queryAllByTestId("store-logout-button");

    expect(elem).toBeDefined();
  });
});
