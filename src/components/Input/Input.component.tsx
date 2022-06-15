import React, { forwardRef, useState } from 'react';
import classNames from 'classnames';
import { InputProps } from './Input.types';
import styles from './Input.module.scss';

export const InputComponent = forwardRef<HTMLInputElement,InputProps>(({
  value,
  variant,
  placeholder,
  disabled,
  label,
  type,
  onChange,
  onClick,
  rightSide,
  className,
},ref) => {
  const [id] = useState((Math.random()*100).toString())
  const [isFocused, setIsFocused] = useState(false);

  const InputClass = classNames(
    styles.input,
    {
      [styles['input_focused']]: isFocused,
      [styles[`input_variant_${variant}`]]: variant,
    },
    className
  );

  const handleFocus = () => {
    if (disabled) return;
    setIsFocused(true);
  }

  const handleBlur = () => {
    if (disabled) return;
    if (value) return;
    setIsFocused(false);
  }

  return (
    <div className={InputClass}>
      {label && <label htmlFor={id} className={styles.label}>{label}</label>}
      <input
        id={id}
        name={id}
        ref={ref}
        value={value}
        type={type ? type : 'text'}
        placeholder={placeholder && placeholder}
        className={styles.text}

        onClick={onClick}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      ></input>
      {rightSide || null}
    </div>
  );
});

InputComponent.displayName = 'Input';