import { FC } from "react";
import { createPortal } from "react-dom";

import { ModalPortalProps } from "./ModalPortal.types";

export const ModalPortalComponent: FC<ModalPortalProps> = ({ el, children }) =>
  createPortal(children, el);

ModalPortalComponent.displayName = "ModalPortal";
