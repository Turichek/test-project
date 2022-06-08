import { ReactNode } from "react";

export enum BadgeColorEnum {
  light_orange = 'light_orange',
  light_green = 'light_green',
  light_blue = 'light_blue',
  red = 'red',
  blue = 'blue',
  orange = 'orange',
  green = 'green',
  cyan = 'cyan',
  disabled = 'disabled',
}

export type BadgeProps = {
  text: string;
  color: string;
  className?: string;
};
