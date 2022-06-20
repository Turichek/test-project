import { Story } from '@storybook/react';
import React, { useState } from 'react';
import { Button, ButtonVariantEnum } from '.';

import { IconsEnum } from '../SvgIcon';
import { Text, TextVariantEnum } from '../Text';

import { ButtonProps } from './Button.types';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    width: {
      control: {
        type: 'select',
      },
      options: ['content', 'full'],
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'outlined', 'text'],
    },
    iconPosition: {
      control: {
        type: 'select',
      },
      options: ['left', 'right'],
    },
  },
};

const Template: Story<ButtonProps & { showIcon: boolean }> = ({
  showIcon,
  ...args
}: ButtonProps & { showIcon: boolean }) => {
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setCounter(counter + 1);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };
  return (
    <>
      <Text variant={TextVariantEnum.body_lg}>Counter: {counter}</Text>
      <Button
        onClick={handleClick}
        loading={isLoading}
        icon={showIcon ? IconsEnum.eye : undefined}
        {...args}
      />
    </>
  );
};

export const button = Template.bind({});
button.args = {
  text: 'Click me',
  variant: ButtonVariantEnum.primary,
  disabled: false,
  width: 'content',
  showIcon: true,
  iconPosition: 'left',
};
