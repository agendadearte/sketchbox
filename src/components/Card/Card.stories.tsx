import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: [],
  decorators: [(Story) => <div style={{ width: "20rem" }}>{Story()}</div>],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    author: "Eduardo Chillida",
    title: "Berlín",
    dates: {
      initialString: "21 Feb",
      initialUTF: "2022-21-02",
      finalString: "16 Mar",
      finalUTF: "2022-16-03",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/d/d0/Chillida_berlin_Bundeskanzleramt.jpg",
    ],
  },
};
