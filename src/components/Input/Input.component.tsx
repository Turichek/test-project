import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { InputProps } from './Input.types';
import styles from './Input.module.scss';
import { IconsEnum, SvgIcon } from 'components/SvgIcon';

export const InputComponent: React.FC<InputProps> = ({
  value,
  variant,
  placeholder,
  disabled,
  label,
  type,
  rightSide,
  rightSideArgs,
  rightSideClick,
  className,
}) => {
  const [text, setText] = useState(value || '');
  const [isFocused, setIsFocused] = useState(false);
  const input = useRef<HTMLInputElement>(null);

  const InputClass = classNames(
    styles.input,
    {
      [styles['input_focused']]: isFocused,
      [styles[`input_variant_${variant}`]]: variant,
    },
    className
  );
  const LabelClass = classNames(
    styles.label,
    {
      [styles['label_focused']]: isFocused,
    },
    className
  );

  const handleFocus = () => {
    if (disabled) return;
    setIsFocused(true);    
  }

  const handleBlur = () => {
    if (disabled) return;
    if (text) return;
    setIsFocused(false);
  }

  return (
    <div className={InputClass}>
      {label && <label onClick={() => { input.current?.focus() }} className={LabelClass}>{label}</label>}
      <input
        ref={input}
        value={text}
        type={type ? type : 'text'}
        placeholder={placeholder && placeholder}
        className={styles.text}
        onChange={(e) => { setText(e.target?.value) }}
        onFocus={() => { handleFocus() }}
        onBlur={() => { handleBlur() }}
      ></input>
      {rightSide && <SvgIcon {...rightSideArgs} onClick={rightSideClick} src={rightSide} className={styles.svg} />}
    </div>
  );
};

InputComponent.displayName = 'Input';