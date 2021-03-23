import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Button, { ButtonProps } from "components/button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = ({children, ...args}) => {
  return (
    <Button {...args}>
      {children}
    </Button>
  )
};

export const Default = Template.bind({});
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Large = Template.bind({});
export const Medium = Template.bind({});
export const Small = Template.bind({});

Default.args = {
  type: "default",
  children: "Button",
};

Primary.args = {
  type: "primary",
  children: "Button",
};

Secondary.args = {
  children: "Button",
};

Large.args = {
  size: "lg",
  children: "Button",
};

Medium.args = {
  size: "md",
  children: "Button",
};

Small.args = {
  size: "sm",
  children: "Button",
};
