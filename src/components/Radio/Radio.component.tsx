import React, { useState,useRef } from 'react';
import classNames from 'classnames';
import { RadioProps } from './Radio.types';
import styles from './Radio.module.scss';
import { Text } from 'components/Text';
import { TextVariantEnum } from 'components/Text';

export const RadioComponent: React.FC<RadioProps> = ({
  text,
  name,
  toChecked,
  handelChangeSelected: onClick,
  value,
  className,
}) => {
  const RadioClass = classNames(
    styles.radio,
    className
  );
  const radio = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    onClick(radio.current?.value);
  }

  return (
    <div className={RadioClass}>
      <input ref={radio} type='radio' name={name} value={value} onChange={() => {}} checked={toChecked === value ? true : false} />
      <label onClick={() => handleClick()}><span><span className={styles.dot}></span></span>{text && <Text variant={TextVariantEnum.body_md} >{text}</Text>}</label>
    </div>
  );
};

RadioComponent.displayName = 'Radio';