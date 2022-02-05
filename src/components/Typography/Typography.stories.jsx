import React from "react";
import { Typography } from "../";

export default {
  title: "Components/Typography",
  component: Typography,
  argTypes: {
    color: { control: "color" },
  },
  parameters: {
    colorPicker: {
      applyColorTo: ["color"],
    },
  },
};

const Template = (args) => <Typography {...args} />;

export const h1 = Template.bind({});
h1.args = {
  type: "h1",
  children: "Заголовок 1",
};
export const h2 = Template.bind({});
h2.args = {
  type: "h2",
  children: "Заголовок 2",
};
export const h3 = Template.bind({});
h3.args = {
  type: "h3",
  children: "Заголовок 3",
};
export const h4 = Template.bind({});
h4.args = {
  type: "h4",
  children: "Заголовок 4",
};
export const h5 = Template.bind({});
h5.args = {
  type: "h5",
  children: "Заголовок 5",
};
export const h6 = Template.bind({});
h6.args = {
  type: "h6",
  children: "Заголовок 6",
};
export const text = Template.bind({});
text.args = {
  type: "text",
  children: "Текст",
};
export const caption = Template.bind({});
caption.args = {
  type: "caption",
  children: "Подпись",
};
export const uppercase = Template.bind({});
uppercase.args = {
  type: "h1",
  transform: "uppercase",
  children: "Заголовок 1",
};
export const capitalize = Template.bind({});
capitalize.args = {
  type: "h1",
  transform: "capitalize",
  children: "Заголовок 1",
};
export const lowercase = Template.bind({});
lowercase.args = {
  type: "h1",
  transform: "lowercase",
  children: "Заголовок 1",
};
export const underlined = Template.bind({});
underlined.args = {
  type: "h1",
  decoration: "underline",
  children: "Заголовок 1",
};
export const overlined = Template.bind({});
overlined.args = {
  type: "h1",
  decoration: "overline",
  children: "Заголовок 1",
};
export const crossed = Template.bind({});
crossed.args = {
  type: "h1",
  decoration: "line-through",
  children: "Заголовок 1",
};
export const StyleNormal = Template.bind({});
StyleNormal.args = {
  type: "h1",
  fontStyle: "normal",
  children: "Заголовок 1",
};
export const StyleItalic = Template.bind({});
StyleItalic.args = {
  type: "h1",
  fontStyle: "italic",
  children: "Заголовок 1",
};
export const StyleOblique = Template.bind({});
StyleOblique.args = {
  type: "h1",
  fontStyle: "oblique",
  children: "Заголовок 1",
};
