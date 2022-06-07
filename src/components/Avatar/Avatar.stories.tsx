import { Story } from '@storybook/react';
import React, { useState } from 'react';
import { Avatar } from '.';
import { AvatarProps, AvatarVariantEnum } from './Avatar.types';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['large','medium','small'],
    },
  },
};

const Template: Story<AvatarProps> = (args) => {
  return (
    <>
      <Avatar {...args} />
    </>
  );
};

export const avatar = Template.bind({});
avatar.args = {
  variant: AvatarVariantEnum.lg,
  creds: 'TV',
};