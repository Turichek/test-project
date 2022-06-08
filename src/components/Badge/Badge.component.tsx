import React, { Component } from 'react';
import classNames from 'classnames';
import { BadgeProps } from './Badge.types';
import styles from './Badge.module.scss';
import { Text, TextVariantEnum } from 'components/Text';

export const BadgeComponent: React.FC<BadgeProps> = ({
  text,
  color,
  className
}) => {
  const BadgeClass = classNames(
    styles.badge,
    {
      [styles[`badge_${color}`]]: color,
    },
    className
  );

  return (
    <div className={BadgeClass}>
      <Text variant={TextVariantEnum.caption}>{text}</Text>
    </div>
  );
};

BadgeComponent.displayName = 'Badge';