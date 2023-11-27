import { style } from "typestyle";
import { buildCustomProps } from "@/utils/buildCustomProps";

import { component, cssProps } from "./variables";

export const content = style({
  margin: "0 auto",
  padding: "0 .8rem",
  ...buildCustomProps(component, "container", cssProps),
});
