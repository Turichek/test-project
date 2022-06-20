import { Story } from '@storybook/react';
import React, { useState } from 'react';
import { Checkbox } from '.';
import { CheckboxProps } from './Checkbox.types';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      control: {
        type: 'radio',
      },
      options: [false, true],
    },
  },
};

const Template: Story<CheckboxProps> = (args) => {
  
  return (
    <>
      <Checkbox {...args} />
    </>
  );
};

export const checkbox = Template.bind({});
checkbox.args = {
  checked: false,
  text: ''
};