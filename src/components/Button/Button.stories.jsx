import React from "react";
import { Button } from "../";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => (
  <>
    <Button {...args} size="small" /> <Button {...args} size="medium" />{" "}
    <Button {...args} size="large" />
  </>
);

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  children: "Button",
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Button",
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
  children: "Button",
};

export const Link = Template.bind({});
Link.args = {
  variant: "link",
  children: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "text",
  children: "Button",
  disabled: true,
};
