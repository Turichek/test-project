import { ReactNode } from "react";

export enum TextVariantEnum {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  sub_md = 'subtitle_medium',
  sub_sm = 'subtitle_small',
  body_lg = 'body_large',
  body_md = 'body_medium',
  caption = 'caption'
}

export type TextProps = {
  variant: TextVariantEnum;
  className?: string;
  children: ReactNode;
};
