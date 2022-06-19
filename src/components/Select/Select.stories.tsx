import { Story } from '@storybook/react';
import { InputVariantEnum } from 'components/Input';
import React from 'react';
import { Select } from '.';
import { SelectProps } from './Select.types';

export default {
  title: 'Components/Select',
  component: Select,
};

const Template: Story<SelectProps> = (args) => {
  return (
    <>
      <Select {...args} />
    </>
  );
};

export const select = Template.bind({});
select.args = {
  variant: InputVariantEnum.lg
};