import React, { Component, useState } from 'react';
import classNames from 'classnames';
import { InputProps } from './Input.types';
import styles from './Input.module.scss';

export const InputComponent: React.FC<InputProps> = ({
  variant,
  placeholder,
  label,
  className,
}) => {
  const InputClass = classNames(
    styles.input,
    {
      [styles[`input_variant_${variant}`]]: variant,
    },
    className
  );
  const [value, setValue] = useState('');

  return (
    <div className={InputClass}>
      <input onChange={(e) => { setValue(e.target?.value)}} value={value}/>
    </div>
  );
};

InputComponent.displayName = 'Input';