
export enum AvatarVariantEnum {
  lg = 'large',
  md = 'medium',
  sm = 'small',
}

export type AvatarProps = {
  variant: AvatarVariantEnum;
  src?: string;
  creds: string;
  className?: string;
};
