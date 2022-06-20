import { ChangeEvent, ReactNode } from "react";

export type RadioProps = {
  name: string;
  value: string;
  toChecked: string | undefined;
  onChange: (value: string | undefined) => void;
  text?: string;
  className?: string;
};
