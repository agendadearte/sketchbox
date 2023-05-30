import { style } from "typestyle";
import { buildPropName } from "../../utils/buildPropName";

import { css } from "./variables";

const buildCustomProp = (prop: keyof typeof css) =>
  `var(${buildPropName("card", prop)}, ${css[prop]})`;

export const container = style({
  padding: ".4rem",
});

export const author = style({
  marginTop: 0,
  marginBottom: 0,
  fontSize: buildCustomProp("authorFontSize"),
  fontFamily: buildCustomProp("authorFontFamily"),
  fontWeight: buildCustomProp("authorFontWeight"),
  color: buildCustomProp("authorFontColor"),
});

export const title = style({
  marginTop: 0,
  marginBottom: ".4rem",
  fontSize: buildCustomProp("titleFontSize"),
  fontFamily: buildCustomProp("titleFontFamily"),
  fontWeight: buildCustomProp("titleFontWeight"),
  color: buildCustomProp("titleFontColor"),
});

export const dates = style({
  marginBottom: ".4rem",
  fontSize: buildCustomProp("datesFontSize"),
  fontFamily: buildCustomProp("datesFontFamily"),
  fontWeight: buildCustomProp("datesFontWeight"),
  color: buildCustomProp("datesFontColor"),
});

export const image = style({
  display: "block",
  width: "100%",
});
