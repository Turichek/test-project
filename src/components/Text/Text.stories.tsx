import { Text } from ".";

import { Story } from "@storybook/react";

import { TextProps, TextVariantEnum } from "./Text.types";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "subtitle_medium",
        "subtitle_small",
        "body_large",
        "body_medium",
        "caption",
      ],
    },
  },
};

const Template: Story<TextProps> = (args) => {
  return (
    <>
      <Text {...args}>Counter</Text>
    </>
  );
};

export const text = Template.bind({});
text.args = {
  variant: TextVariantEnum.body_lg,
};
