import { ReactNode } from "react";

export enum BadgeColorEnum {
  light_orange = '#F2994A',
  light_green = '#6FCF97',
  light_blue = '#2D9CDB',
  red = '#EB5757',
  blue = '#2F80ED',
  orange = '#FF8437',
  green = '#219653',
  cyan = '#56CCF2'
}

export type BadgeProps = {
  text: string;
  color: string;
  className?: string;
  disabled?: boolean;
};
