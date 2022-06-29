import { Story } from '@storybook/react';
import React from 'react';
import { Radio } from '.';
import { RadioProps } from './Radio.types';

export default {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    checked: {
      control: {
        type: 'radio',
      },
      options: [false, true],
    },
  },
};

const Template: Story<RadioProps> = (args) => {
  return (
    <>
      <Radio {...args} />
    </>
  );
};

export const radio = Template.bind({});
radio.args = {
  checked: false,
  text: '',
};