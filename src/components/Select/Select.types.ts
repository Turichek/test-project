import { InputVariantEnum } from "components/Input";
import { ActionMeta, SingleValue } from "react-select";

export enum SelectTypeEnum {
  withCheckbox = 'withCheckbox',
  default = 'default',
  filter = 'filter',
}

export type SelectProps = {
  variant: InputVariantEnum;
  onChange: (newValue: SingleValue<Options>, actionMeta: ActionMeta<Options>) => void;
  value: SingleValue<Options>;
  options: Options[],
  type: SelectTypeEnum,
  className?: string;
};

type testOption = {
  value: string; 
  label: string; 
};

export type Options = 
  testOption;