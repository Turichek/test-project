import { Story } from '@storybook/react';
import { InputVariantEnum } from 'components/Input';
import React, { useState } from 'react';
import { Password } from '.';
import { PasswordProps } from './Password.types';

export default {
  title: 'Components/Password',
  component: Password,
};

const Template: Story<PasswordProps> = (args) => {
  return (
    <>
      <Password {...args} />
    </>
  );
};

export const password = Template.bind({});
password.args = {
  variant: InputVariantEnum.lg
};