import React from "react"
import { Story } from "@storybook/react";
import InputEl, { PropTypes } from "components/input"

export default {
  title: "Components/Input",
  component: InputEl
}

const Template: Story<PropTypes> = (args) => <InputEl {...args}/>

export const Input = Template.bind({})