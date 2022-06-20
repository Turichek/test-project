import { Story } from '@storybook/react';
import React, { useState } from 'react';
import { Input, InputVariantEnum } from '.';
import { InputProps } from './Input.types';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['large', 'medium'],
    },
  },
};

const Template: Story<InputProps> = (args) => {
  return (
    <>
      <Input {...args} />
    </>
  );
};

export const input = Template.bind({});
input.args = {
  variant: InputVariantEnum.lg
};