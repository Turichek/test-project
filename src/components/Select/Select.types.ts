import { InputVariantEnum } from "components/Input";
import { ActionMeta, SingleValue } from "react-select";

export enum SelectTypeEnum {
  default = 'default',
}

export type SelectProps = {
  variant: InputVariantEnum;
  value?: SingleValue<OptionsProps>;
  options: OptionsProps[],
  type: SelectTypeEnum,
  onChange: (newValue: SingleValue<OptionsProps>, actionMeta: ActionMeta<OptionsProps>) => void;
  className?: string;
};

export type OptionsProps = {
  value: string; 
  label: string; 
  checked?: boolean;
};