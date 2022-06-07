import React, { Component } from 'react';
import classNames from 'classnames';
import { BadgeProps } from './Badge.types';
import styles from './Badge.module.scss';
import { Text, TextVariantEnum } from 'components/Text';

export const BadgeComponent: React.FC<BadgeProps> = ({
  text,
  color,
  disabled = false,
  className
}) => {
  const BadgeClass = classNames(
    styles.badge,
    className
  );

  return (
    <div style={!disabled ? {backgroundColor: color} : {backgroundColor: '#515B6C'}} className={BadgeClass}>
        <Text variant={TextVariantEnum.caption}>{!disabled ? text : 'Деактивированный'}</Text>
    </div>
  );
};

BadgeComponent.displayName = 'Badge';