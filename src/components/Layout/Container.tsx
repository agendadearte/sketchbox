import { createElement, FC, ReactNode } from "react";
import * as css from "./assets/styles";

type ContainerProps = {
  element?: string;
  id?: string;
  children?: ReactNode;
};

export const Container: FC<ContainerProps> = ({
  element = "div",
  children,
  id,
}) => createElement(element, { className: css.content, id }, children);
