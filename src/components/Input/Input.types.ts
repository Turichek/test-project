import { IconsEnum } from "components/SvgIcon";
import React, { ChangeEvent, ReactNode } from "react";

export enum InputVariantEnum {
  lg = 'large',
  md = 'medium',
}

export type InputProps = {
  value: string | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  variant: InputVariantEnum;
  disabled?: boolean;
  type?: string;
  label?: string;
  placeholder?: string;
  rightSide?: ReactNode;
  className?: string;
};
