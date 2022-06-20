import { Story } from '@storybook/react';
import React, { useState } from 'react';
import { Radio } from '.';
import { RadioProps } from './Radio.types';

export default {
  title: 'Components/Radio',
  component: Radio,
};

const Template: Story<RadioProps> = ({}) => {
  const [selected, setSelected] = useState<string | undefined>('');
  const ChangeSelectedRadio = (value: string | undefined) => {
    setSelected(value);
  }

  return (
    <>
      <Radio value='123' name='123' onChange={ChangeSelectedRadio} toChecked={selected} text='asdasf' />
      <Radio value='345' name='123' onChange={ChangeSelectedRadio} toChecked={selected} text='fassdv' />
      <Radio value='567' name='123' onChange={ChangeSelectedRadio} toChecked={selected} text='asdngvnfgasf' />
    </>
  );
};

export const radio = Template.bind({});
radio.args = {
  
};