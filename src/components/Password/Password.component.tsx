import React, { useState } from 'react';
import { PasswordProps } from './Password.types';
import { IconsEnum } from 'components/SvgIcon';
import { Input } from 'components/Input';

export const PasswordComponent: React.FC<PasswordProps> = ({
  variant,
  placeholder,
  disabled,
}) => {
  const [isView, setIsView] = useState(false);
  const rightArgs = {
    color: !isView ? "grey" : "primary"
  }

  const handleRightClick = () => {
    setIsView(!isView);
  }

  return (
    <Input
      disabled={disabled}
      placeholder={placeholder}
      type={!isView ? 'password' : 'text'}
      variant={variant}
      label="Введите пароль"
      rightSide={IconsEnum.eye}
      rightSideArgs={rightArgs}
      rightSideClick={handleRightClick}
    />
  );
};

PasswordComponent.displayName = 'Password';