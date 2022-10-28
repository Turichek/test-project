import { Badge, BadgeColorEnum } from ".";

import { Story } from "@storybook/react";

import { BadgeProps } from "./Badge.types";

export default {
  title: "Components/Babge",
  component: Badge,
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: [
        "light_orange",
        "light_green",
        "light_blue",
        "red",
        "blue",
        "orange",
        "green",
        "cyan",
        "disabled",
      ],
    },
  },
};

const Template: Story<BadgeProps> = (args) => {
  return (
    <>
      <Badge {...args} />
    </>
  );
};

export const badge = Template.bind({});
badge.args = {
  text: "Something text",
  color: BadgeColorEnum.light_blue,
};
