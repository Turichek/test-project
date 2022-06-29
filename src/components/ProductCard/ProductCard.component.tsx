import React from 'react';
import classNames from 'classnames';
import { ProductCardProps } from './ProductCard.types';
import styles from './ProductCard.module.scss';
import { Text, TextVariantEnum } from 'components/Text';
import { Badge } from 'components/Badge';
import { IconsEnum, SvgIcon } from 'components/SvgIcon';
import { url } from 'inspector';

export const ProductCardComponent: React.FC<ProductCardProps> = ({
  title,
  subtitle,
  rating,
  description,
  price,
  badges,
  src,
  className,
}) => {
  const ProductCardClass = classNames(
    styles.productCard,
    className
  );

  return (
    <div className={ProductCardClass}>
      <div className={styles.imgWithBadgeContainer}>
        <div className={styles.badgeContainer}>
          {
            badges.map((item, index) => <Badge key={index} text={item.text} color={item.color}></Badge>)
          }
        </div>
        <img src={src} alt="..." />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <Text variant={TextVariantEnum.h4}>{title}</Text>
          <Text variant={TextVariantEnum.caption}>{subtitle}</Text>
          <div className={styles.stars}>
            {
              [...Array(rating)].map((item, index) => <SvgIcon key={index} src={IconsEnum.star} />)
            }
          </div>
          <Text variant={TextVariantEnum.body_md}>{description}</Text>
        </div>
        <div className={styles.price}>
          <Text variant={TextVariantEnum.h4}  >{price}</Text>
          <SvgIcon src={IconsEnum.currency} />
        </div>
      </div>
    </div>
  );
};

ProductCardComponent.displayName = 'ProductCard';