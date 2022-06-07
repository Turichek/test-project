import React, { Component, useState } from 'react';
import classNames from 'classnames';
import { CheckboxProps } from './Checkbox.types';
import styles from './Checkbox.module.scss';
import { Text } from 'components/Text';
import { TextVariantEnum } from 'components/Text';

export const CheckboxComponent: React.FC<CheckboxProps> = ({
  checked = false,
  text,
  className,
}) => {
  const CheckboxClass = classNames(
    styles.checkbox,
    className
  );
  const [check, setCheck] = useState(checked)

  const handleClick = () => {
    setCheck(!check);
  }

  return (
    <div className={CheckboxClass}>
      <input onChange={() => {}} type='checkbox' checked={check} />
      <label onClick={() => handleClick()}><span></span>{text && <Text variant={TextVariantEnum.body_md} >{text}</Text>}</label>
    </div>
  );
};

CheckboxComponent.displayName = 'Checkbox';