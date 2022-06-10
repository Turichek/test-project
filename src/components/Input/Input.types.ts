import { IconsEnum } from "components/SvgIcon";

export enum InputVariantEnum{
  lg = 'large',
  md = 'medium',
}

export type InputProps = {
  variant: InputVariantEnum;
  value?: string;
  disabled?: boolean; 
  type?: string;
  label?: string;
  placeholder?: string;
  rightSide?: IconsEnum;
  rightSideArgs?: object;
  rightSideClick?: () => void;
  className?: string;
};
