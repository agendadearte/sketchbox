import { render, screen } from "@testing-library/react";
import { getStyles } from "typestyle";

import { cssStringToObject } from "@/utils/cssStringToObject";
import { AppBar } from "./AppBar";

let stylesJson: { [key: string]: any } = {};

beforeEach(() => {
  render(<AppBar />);

  const stylesCss = getStyles();
  stylesJson = cssStringToObject(stylesCss);
});

test("AppBar CSS custom properties", async () => {
  const AppBarElement = screen.getByRole("banner");
  const appbarStyles = stylesJson[AppBarElement.className];

  expect(appbarStyles["background-color"]).toContain(
    "var(--sketch-box-app-bar-container-background-color",
  );
});
