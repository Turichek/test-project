import React, { Component, useState } from 'react';
import classNames from 'classnames';
import { ToggleProps } from './Toggle.types';
import styles from './Toggle.module.scss';
import { Text } from 'components/Text';
import { TextVariantEnum } from 'components/Text';

export const ToggleComponent: React.FC<ToggleProps> = ({
  checked = false,
  onClick,
  text,
  className,
}) => {
  const ToggleClass = classNames(
    styles.toggle,
    className
  );

  return (
    <div className={ToggleClass}>
      <input type='checkbox' onChange={() => {}} checked={checked} />
      <label onClick={onClick}><span><span className={styles.dot}></span></span>{text && <Text variant={TextVariantEnum.body_md} >{text}</Text>}</label>
    </div>
  );
};

ToggleComponent.displayName = 'Toggle';