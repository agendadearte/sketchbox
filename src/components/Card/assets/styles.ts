import { style } from "typestyle";
import { buildCustomProps } from "@/utils/buildCustomProps";

import { component, cssProps } from "./variables";

export const container = style({
  padding: ".4rem",
});

export const author = style({
  marginTop: 0,
  marginBottom: 0,
  ...buildCustomProps(component, "author", cssProps),
});

export const title = style({
  marginTop: 0,
  marginBottom: ".4rem",
  ...buildCustomProps(component, "title", cssProps),
});

export const dates = style({
  marginBottom: ".4rem",
  ...buildCustomProps(component, "dates", cssProps),
});

export const image = style({
  display: "block",
  width: "100%",
});
