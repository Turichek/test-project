import React from 'react';
import classNames from 'classnames';
import { TextProps } from './Text.types';
import styles from './Text.module.scss';

export const TextComponent: React.FC<TextProps> = ({
  variant,
  className,
  children
}) => {
  const TextClass = classNames(
    styles.text,
    {
      [styles[`text_variant_${variant}`]]: variant,
    },
    className
  );

  return (
    <span className={TextClass}>{children}</span>
  );
};

TextComponent.displayName = 'Text';