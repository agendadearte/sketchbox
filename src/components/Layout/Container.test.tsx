import { render, screen } from "@testing-library/react";
import { getStyles } from "typestyle";

import { cssStringToObject } from "@/utils/cssStringToObject";
import { Container } from "./Container";

let stylesJson: { [key: string]: any } = {};

beforeEach(() => {
  render(<Container element="main" />);

  const stylesCss = getStyles();
  stylesJson = cssStringToObject(stylesCss);
});

test("Container CSS custom properties", async () => {
  const ContainerElement = screen.getByRole("main");
  const containerStyles = stylesJson[ContainerElement.className];

  expect(containerStyles["max-width"]).toContain(
    "var(--sketch-box-layout-container-max-width",
  );
});
