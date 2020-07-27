import { render } from "@testing-library/react";
import React from "react";
import { SocialMediaLinks } from "../partials/SocialMediaLinks";

describe("SocialMediaLinks", () => {
  const renderLinks = () => {
    const elem = render(<SocialMediaLinks />);
    return elem;
  };
  const renderedButtons = () => {
    const elems = render(<SocialMediaLinks />).queryAllByTestId(
      "social-button"
    );
    return elems;
  };
  it("Should render", () => {
    const elem = renderLinks();

    expect(elem).not.toBeNull();
  });
  it("Should should have two social buttons", () => {
    const buttons = renderedButtons();

    expect(buttons.length).toEqual(2);
  });
});
