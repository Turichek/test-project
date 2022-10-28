import { ReactNode } from "react";

export type ModalProps = {
  element?: HTMLElement;
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
  className?: string;
};
