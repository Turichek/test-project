import React, { Component, useRef, useState } from 'react';
import classNames from 'classnames';
import { InputProps } from './Input.types';
import styles from './Input.module.scss';
import { IconsEnum, SvgIcon } from 'components/SvgIcon';

export const InputComponent: React.FC<InputProps> = ({
  variant,
  placeholder,
  label,
  type,
  rightSide,
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
  const input = useRef<HTMLInputElement>(null)

  return (
    <div className={InputClass}>
      <label onClick={() => {input.current?.focus()}} className={styles.label}>{label}</label>
      <input
        ref={input}
        type={type ? type : 'text'}
        placeholder={placeholder && placeholder}
        className={styles.text}
        onChange={(e) => { setValue(e.target?.value) }}
        value={value}
      />
      {rightSide && <SvgIcon src={IconsEnum.eye} color='grey' className={styles.svg} />}
    </div>
  );
};

InputComponent.displayName = 'Input';