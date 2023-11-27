import type { Meta, StoryObj } from "@storybook/react";

import { Container } from "./Container";

const meta = {
  title: "Layout/Container",
  component: Container,
  tags: [],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div style={{ padding: "1rem" }}>Container</div>,
  },
};
