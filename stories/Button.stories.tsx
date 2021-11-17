import React from "react"
import { Story, Meta } from "@storybook/react"
import { within, fireEvent } from "@storybook/testing-library"
import Button, { ButtonProps } from "components/button"
import { expect } from "@storybook/jest"

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const ButtonComp = () => <div><Button type="default" label="Button">Tesst</Button></div>

// ButtonComp.play = async ({ args, canvasElement }) => {
//   const canvas = within(canvasElement);
//   await fireEvent.click(
//     canvas.getByRole("button", { name: /Tesst/i })
//   );
//   await expect(args.onClick).toHaveBeenCalled();
// };

// export const Demo = {
//   play: async ({ args, canvasElement }) => {
//     const canvas = within(canvasElement);
//     await fireEvent.click(canvas.getByRole("button", { name: /Tesst/i }));
//     await expect(args.onClick).toHaveBeenCalled();
//   },
// };

const Template: Story<ButtonProps> = () => <ButtonComp/>

export const Primary = Template.bind({})

Primary.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement)
  await fireEvent.click(
    canvas.getByRole("button", { name: /Tesst/i })
  )
  await expect(args.onClick).toHaveBeenCalled()
}

Primary.args = {
  primary: true,
  label: "Button",
  type: "default",
  onClick: {action: true}
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: "Button",
  type: "primary"
}

export const Large = Template.bind({})
Large.args = {
  size: "large",
  label: "Button",
}

export const Small = Template.bind({})
Small.args = {
  size: "small",
  label: "Button",
}
