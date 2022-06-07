import { AvatarVariantEnum } from "components/Avatar";
import { ReactNode } from "react";

export type AvatarWithInfoProps = {
  variant: AvatarVariantEnum;
  src?: string;
  name: string;
  surname: string;
  email?: string;
  position?: string;
  className?: string;
};
