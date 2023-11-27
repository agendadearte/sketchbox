import type { Meta, StoryObj } from "@storybook/react";

import { AppBar } from "./AppBar";
import * as css from "./assets/styles";
import logoSvg from "./assets/logo-header.svg";

const meta = {
  title: "Components/AppBar",
  component: AppBar,
  tags: [],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className={css.logoContainer}>
        <img className={css.icon} src={logoSvg} alt="Logo Agenda de Arte" />
        <span className={css.logotype}>Agenda de Arte</span>
      </div>
    ),
  },
};
