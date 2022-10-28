import React, { ChangeEvent, ReactNode, FocusEvent } from "react";

export enum InputVariantEnum {
  lg = "large",
  md = "medium",
}

export type InputProps = {
  value: string | number | readonly string[] | undefined;
  variant: InputVariantEnum;
  disabled?: boolean;
  readonly?: boolean;
  hidden?: boolean;
  type?: string;
  label?: string;
  placeholder?: string;
  rightSide?: ReactNode;
  children?: ReactNode;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  className?: string;
};
