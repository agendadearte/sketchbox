import { render, screen } from "@testing-library/react";
import { getStyles } from "typestyle";

import { cssStringToObject } from "@/utils/cssStringToObject";
import { Card } from "./Card";

let stylesJson: { [key: string]: any } = {};

beforeEach(() => {
  render(
    <Card
      author={"Any author"}
      title={"Any title"}
      dates={{
        initialString: "Any initial string",
        initialUTF: "Any initial UTF",
        finalString: "Any final string",
        finalUTF: "Any final UTF",
      }}
      images={["Any images array"]}
    />,
  );

  const stylesCss = getStyles();
  stylesJson = cssStringToObject(stylesCss);
});

test("Autor CSS custom properties", async () => {
  const AutorElement = screen.getByRole("heading", { level: 1 });
  const autorStyles = stylesJson[AutorElement.className];

  expect(autorStyles.color).toContain("var(--sketch-box-card-author-color");
  expect(autorStyles["font-family"]).toContain(
    "var(--sketch-box-card-author-font-family",
  );
  expect(autorStyles["font-size"]).toContain(
    "var(--sketch-box-card-author-font-size",
  );
  expect(autorStyles["font-weight"]).toContain(
    "var(--sketch-box-card-author-font-weight",
  );
});

test("Title CSS custom properties", async () => {
  const TitleElement = screen.getByRole("heading", { level: 2 });
  const titleStyles = stylesJson[TitleElement.className];

  expect(titleStyles.color).toContain("var(--sketch-box-card-title-color");
  expect(titleStyles["font-family"]).toContain(
    "var(--sketch-box-card-title-font-family",
  );
  expect(titleStyles["font-size"]).toContain(
    "var(--sketch-box-card-title-font-size",
  );
  expect(titleStyles["font-weight"]).toContain(
    "var(--sketch-box-card-title-font-weight",
  );
});

test("Dates CSS custom properties", async () => {
  const DateTimeElement = screen.getByTestId("dateTime");
  const dateTimeStyles = stylesJson[DateTimeElement.className];

  expect(dateTimeStyles.color).toContain("var(--sketch-box-card-dates-color");
  expect(dateTimeStyles["font-family"]).toContain(
    "var(--sketch-box-card-dates-font-family",
  );
  expect(dateTimeStyles["font-size"]).toContain(
    "var(--sketch-box-card-dates-font-size",
  );
  expect(dateTimeStyles["font-weight"]).toContain(
    "var(--sketch-box-card-dates-font-weight",
  );
});
