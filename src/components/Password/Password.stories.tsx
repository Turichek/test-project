import { Story } from '@storybook/react';
import { InputVariantEnum } from 'components/Input';
import React, { useState } from 'react';
import { Password } from '.';
import { PasswordProps } from './Password.types';

export default {
  title: 'Components/Password',
  component: Password,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['large', 'medium'],
    },
  },
};

const Template: Story<PasswordProps> = ({variant}) => {
  const [password,setPassword] = useState('');
  return (
    <>
      <Password 
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        variant={variant}
      />
    </>
  );
};

export const password = Template.bind({});
password.args = {
  variant: InputVariantEnum.lg
};