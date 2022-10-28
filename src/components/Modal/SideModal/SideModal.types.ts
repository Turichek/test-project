import { ReactNode } from "react";

export type SizeModalProps = {
  element?: HTMLElement;
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
  className?: string;
};
