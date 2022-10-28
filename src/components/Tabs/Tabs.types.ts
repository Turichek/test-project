import { MouseEvent, ReactNode } from "react";

export type TabsProps = {
  title: string;
  tools: ReactNode;
  children: ReactNode[];
  active: number;
  alwaysShowLines?: boolean;
  className?: string;
};

export type TabProps = {
  title: string;
  onClick: () => void;
  titleComponent?: ReactNode;
  className?: string;
};

export type TapPanelProps = {
  children: ReactNode;
  active: number;
  index: number;
  className?: string;
};
