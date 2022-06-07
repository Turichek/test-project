import { ReactNode } from "react";

export enum InputVariantEnum{
  lg = 'large',
  md = 'medium',
}

export type InputProps = {
  variant: InputVariantEnum;
  label?: string;
  placeholder?: string;
  className?: string;
};
