import { Story } from '@storybook/react';
import React, { useState } from 'react';
import { Badge, BadgeColorEnum } from '.';
import { BadgeProps } from './Badge.types';

export default {
  title: 'Components/Babge',
  component: Badge,
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: ['#F2994A','#6FCF97','#2D9CDB','#EB5757','#2F80ED','#FF8437','#219653','#56CCF2'],
    },
    disabled: {
      control: {
        type: 'select',
      },
      options: [true,false],
    }
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
  text: 'Vadim',
  color: BadgeColorEnum.light_blue,
  disabled: false
};