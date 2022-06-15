import { InputVariantEnum } from "components/Input";
import { ChangeEvent } from "react";

export type PasswordProps = {
  value: string;
  variant: InputVariantEnum;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean; 
  placeholder?: string;
  className?: string;
};
