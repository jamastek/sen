import React from "react";
import { Story, Meta } from "@storybook/react";

import Button, { ButtonProps } from "components/button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Tesst</Button>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
  type: "default"
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
  type: "primary"
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
