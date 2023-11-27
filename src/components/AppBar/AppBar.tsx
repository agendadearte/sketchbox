import { FC, ReactNode } from "react";
import { Container } from "@/components/Layout/Container";

import * as css from "./assets/styles";

type AppBarProps = {
  children?: ReactNode;
};

export const AppBar: FC<AppBarProps> = ({ children }) => (
  <header className={css.container}>
    <Container>{children}</Container>
  </header>
);
