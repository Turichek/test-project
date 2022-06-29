import { Story } from '@storybook/react';
import { InputVariantEnum } from 'components/Input';
import React, { useState } from 'react';
import { SingleValue } from 'react-select';
import { Select } from '.';
import { OptionsProps, SelectProps,SelectTypeEnum } from './Select.types';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['default'],
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['large', 'medium'],
    },
  },
};

const Template: Story<SelectProps> = (args) => {
  const options1 = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const [select1, setSelect1] = useState<SingleValue<OptionsProps>>(options1[0]);

  return (
    <>
      <Select {...args} options={options1} value={select1} onChange={(newValue) => { setSelect1(newValue) }} />
    </>
  );
};

export const select = Template.bind({});
select.args = {
  type: SelectTypeEnum.default,
  variant: InputVariantEnum.lg
};