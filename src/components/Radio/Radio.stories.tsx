import { Story } from '@storybook/react';
import React, { useState } from 'react';
import { Radio } from '.';
import { RadioProps } from './Radio.types';

export default {
  title: 'Components/Radio',
  component: Radio,
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
  toChecked: '',
  text: ''
};