import { Story } from '@storybook/react';
import React, { useState } from 'react';
import { ProductCard } from '.';
import { ProductCardProps } from './ProductCard.types';
import { BadgeColorEnum } from 'components/Badge';

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
};

const Template: Story<ProductCardProps> = (args) => {
  return (
    <>
      <ProductCard {...args} />
    </>
  );
};

export const productCard = Template.bind({});
productCard.args = {
  title: 'DS-2CD2821G0 (AC24V/DC12V)',
  subtitle: 'SAP123877',
  rating: 4,
  description: '2Мп IP-камера в стандартном корпусе',
  badges: [{ text: 'Новый', color: BadgeColorEnum.light_green }],
  price: 20000,
  src: 'https://pngroyale.com/wp-content/uploads/2021/12/Download-free-Camera-PNG-Download-Image-PNG.png',
};