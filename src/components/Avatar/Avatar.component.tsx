import React from 'react';
import classNames from 'classnames';
import { AvatarProps } from './Avatar.types';
import styles from './Avatar.module.scss';
import { Text, TextVariantEnum } from 'components/Text';
import { AvatarVariantEnum } from '.';

export const AvatarComponent: React.FC<AvatarProps> = ({
  variant,
  src,
  creds,
  className,
}) => {
  const AvatarClass = classNames(
    styles.avatar,
    {
      [styles[`avatar_variant_${variant}`]]: variant,
    },
    className
  );
  
  const ImgVariantMap = {
    [AvatarVariantEnum.lg]: TextVariantEnum.h3,
    [AvatarVariantEnum.md]: TextVariantEnum.body_lg,
    [AvatarVariantEnum.sm]: TextVariantEnum.body_md,
  }

  return (
      <div className={AvatarClass} style={src ? { backgroundImage: `url(${src})` } : {}}>
        {
          !src && <Text variant={ImgVariantMap[variant]}>{creds}</Text>
        }
      </div>
  );
};

AvatarComponent.displayName = 'Avatar';