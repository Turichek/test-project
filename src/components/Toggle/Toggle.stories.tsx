import { Story } from '@storybook/react';
import React, { useState } from 'react';
import { Toggle } from '.';
import { ToggleProps } from './Toggle.types';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    checked: {
      control: {
        type: 'radio',
      },
      options: [false, true],
    },
  },
};

const Template: Story<ToggleProps> = (args) => {
  return (
    <>
      <Toggle {...args} />
    </>
  );
};

export const toggle = Template.bind({});
toggle.args = {
  checked: false,
  text: ''
};