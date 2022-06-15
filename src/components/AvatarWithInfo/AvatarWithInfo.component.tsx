import React from 'react';
import classNames from 'classnames';
import { AvatarWithInfoProps } from './AvatarWithInfo.types';
import styles from './AvatarWithInfo.module.scss';
import { Text, TextVariantEnum } from 'components/Text';
import { Avatar, AvatarVariantEnum } from 'components/Avatar';

export const AvatarWithInfoComponent: React.FC<AvatarWithInfoProps> = ({
  variant,
  src,
  name,
  surname,
  email,
  position,
  className
}) => {
  const AvatarWithInfoClass = classNames(
    styles.avatarWithInfo,
    className
  );


  const FioVariantMap = {
    [AvatarVariantEnum.lg]: TextVariantEnum.h4,
    [AvatarVariantEnum.md]: TextVariantEnum.sub_md,
    [AvatarVariantEnum.sm]: TextVariantEnum.body_md,
  }

  return (
    <div className={AvatarWithInfoClass}>
      <Avatar variant={variant} creds={name[0]+surname[0]}/>
      <div className={styles.info}>
        {position && <Text variant={TextVariantEnum.body_md}>{position}</Text>}
        <Text variant={FioVariantMap[variant]}>{name + ' ' + surname}</Text>
        {email && <Text variant={TextVariantEnum.caption}>{email}</Text>}
      </div>
    </div>
  );
};

AvatarWithInfoComponent.displayName = 'AvatarWithInfo';