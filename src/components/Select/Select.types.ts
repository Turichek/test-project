import { InputVariantEnum } from "components/Input";
import { ReactNode } from "react";
import { ActionMeta, MultiValue, SingleValue } from "react-select";

export type SelectProps = {
  variant: InputVariantEnum;
  onChange: (newValue: SingleValue<testOption>, actionMeta: ActionMeta<testOption>) => void;
  value: SingleValue<testOption>;
  className?: string;
};

export type testOption = {
  value: string; 
  label: string; 
};