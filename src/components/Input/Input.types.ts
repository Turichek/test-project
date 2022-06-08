import { IconsEnum } from "components/SvgIcon";
import { ReactNode } from "react";

export enum InputVariantEnum{
  lg = 'large',
  md = 'medium',
}

export type InputProps = {
  variant: InputVariantEnum;
  type?: string;
  label?: string;
  placeholder?: string;
  rightSide?: IconsEnum;
  className?: string;
};
