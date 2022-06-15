import { InputVariantEnum } from "components/Input";
import { ReactNode, SyntheticEvent } from "react";

export type DatepickerProps = {
  variant: InputVariantEnum;
  onChange: (date: Date | null, event: SyntheticEvent<any, Event> | undefined) => void;
  value: Date | null;
  className?: string;
};

export type CalenderProps = {
  className: string,
  children: ReactNode,
}
