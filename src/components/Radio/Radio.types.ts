import { ReactNode } from "react";

export type RadioProps = {
  name: string;
  value: string;
  toChecked: string;
  handelChangeSelected: Function;
  text?: string;
  className?: string;
};
