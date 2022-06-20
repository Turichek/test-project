import { Story } from '@storybook/react';
import { InputVariantEnum } from 'components/Input';
import React, { useState } from 'react';
import { Datepicker } from '.';
import { DatepickerProps } from './Datepicker.types';

export default {
  title: 'Components/Datepicker',
  component: Datepicker,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['large', 'medium'],
    },
  },
};

const Template: Story<DatepickerProps> = ({variant}) => {
  const [date, setDate] = useState<Date | null>(new Date());
  return (
    <>
      <Datepicker
        value={date}
        onChange={(date)=>{setDate(date)}}
        variant={variant}
        />
    </>
  );
};

export const datepicker = Template.bind({});
datepicker.args = {
  variant: InputVariantEnum.lg
};