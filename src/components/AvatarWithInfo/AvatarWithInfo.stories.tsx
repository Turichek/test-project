import { Story } from '@storybook/react';
import { AvatarVariantEnum } from 'components/Avatar';
import React, { useState } from 'react';
import { AvatarWithInfo } from '.';
import { AvatarWithInfoProps } from './AvatarWithInfo.types';

export default {
  title: 'Components/AvatarWithInfo',
  component: AvatarWithInfo,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['large','medium','small'],
    },
  },
};

const Template: Story<AvatarWithInfoProps> = (args) => {
  return (
    <>
      <AvatarWithInfo {...args} />
    </>
  );
};

export const avatarWithInfo = Template.bind({});
avatarWithInfo.args = {
  variant: AvatarVariantEnum.lg,
  name: 'Name',
  surname: "Surname",
  position: "Sales",
  email: 'example@gmail.com'
};