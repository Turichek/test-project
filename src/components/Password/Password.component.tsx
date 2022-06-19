import React, { useState } from 'react';
import { PasswordProps } from './Password.types';
import { IconsEnum, SvgIcon } from 'components/SvgIcon';
import { Input } from 'components/Input';
import styles from './Password.module.scss';
import classNames from 'classnames';

export const PasswordComponent: React.FC<PasswordProps> = ({
  value,
  onChange,
  variant,
  placeholder,
  disabled,
  className,
}) => {
  const PasswordClass = classNames(
    styles.password,
    className
  );
  const [isView, setIsView] = useState(false);

  const handleRightClick = () => {
    setIsView(!isView);
  }

  return (
    <Input
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      type={!isView ? 'password' : 'text'}
      variant={variant}
      label="Введите пароль"
      rightSide={<SvgIcon  onClick={handleRightClick} src={IconsEnum.eye} color={isView ? 'primary' : 'grey'} />}
      className={PasswordClass}
    />
  );
};

PasswordComponent.displayName = 'Password';