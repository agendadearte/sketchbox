import { Story, Meta } from "@storybook/react/types-6-0";
import { Card, CardProps } from "./Card";

export default {
  title: "Card",
  component: Card,
  decorators: [(Story) => <div style={{ width: "20rem" }}>{Story()}</div>],
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
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
};
