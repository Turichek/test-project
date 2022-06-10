import { Story } from '@storybook/react';
import { InputVariantEnum } from 'components/Input';
import React, { useState } from 'react';
import { Datepicker } from '.';
import { DatepickerProps } from './Datepicker.types';

export default {
  title: 'Components/Datepicker',
  component: Datepicker,
};

const Template: Story<DatepickerProps> = (args) => {
  return (
    <>
      <Datepicker {...args} />
    </>
  );
};

export const datepicker = Template.bind({});
datepicker.args = {
  variant: InputVariantEnum.lg
};