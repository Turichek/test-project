import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { CheckboxProps } from './Checkbox.types';
import styles from './Checkbox.module.scss';
import { Text } from 'components/Text';
import { TextVariantEnum } from 'components/Text';

export const CheckboxComponent: React.FC<CheckboxProps> = ({
  checked = false,
  onClick,
  text,
  className,
}) => {
  const CheckboxClass = classNames(
    styles.checkbox,
    className
  );

  return (
    <div className={CheckboxClass}>
      <input type='checkbox' onChange={()=>{}} checked={checked} />
      <label onClick={onClick}><span></span>{text && <Text variant={TextVariantEnum.body_md}>{text}</Text>}</label>
    </div>
  );
};

CheckboxComponent.displayName = 'Checkbox';