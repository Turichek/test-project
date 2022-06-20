import React, { ChangeEvent, ReactNode } from "react";

export enum InputVariantEnum {
  lg = 'large',
  md = 'medium',
}

export type InputProps = {
  value: string | undefined;
  variant: InputVariantEnum;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  readonly?: boolean;
  type?: string;
  label?: string;
  placeholder?: string;
  rightSide?: ReactNode;
  className?: string;
};
