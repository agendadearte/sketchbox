import { style } from "typestyle";
import { buildCustomProps } from "@/utils/buildCustomProps";

import { component, cssProps } from "./variables";

export const container = style({
  width: "100%",
  padding: ".8rem 0",
  ...buildCustomProps(component, "container", cssProps),
});

export const logoContainer = style({
  display: "flex",
  gap: ".8rem",
  alignItems: "center",
});

export const icon = style({
  height: "1.75rem",
});

export const logotype = style({
  marginTop: ".2rem",
  fontSize: "2.2rem",
  fontFamily: "Rubik, sans-serif",
  fontWeight: 300,
  color: "hsla(200, 10%, 100%, 1)",
  textTransform: "uppercase",
  lineHeight: ".75",
});
