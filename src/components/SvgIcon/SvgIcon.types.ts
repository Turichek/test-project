export enum IconsEnum {
  loader = '/icons/common/loader.svg',
  search = '/icons/common/search.svg',
  eye = '/icons/common/eye.svg',
  calendar = '/icons/common/calendar.svg',
  arrowR = '/icons/common/arrowRight.svg',
  arrowL = '/icons/common/arrowLeft.svg',
  arrowB = '/icons/common/arrowBottom.svg',
  star = '/icons/common/star.svg',
  currency = '/icons/common/currency.svg',
}

export type SvgIconProps = {
  src: IconsEnum | string; // use string for icons from backend
  onClick?: () => void;
  size?: number;
  color?: colorType;
  rotate?: '0' | '90' | '180' | '270';
  className?: string;
  style?: React.CSSProperties;
  defaultStroke?: boolean;
};

export type colorType =
  | 'primary'
  | 'warning'
  | 'error'
  | 'success'
  | 'white'
  | 'light-grey'
  | 'grey'
  | 'dark-grey'
  | 'black'
  | 'metal'
  | 'light_orange'
  | 'light_green'
  | 'light_blue'
  | 'red'
  | 'blue'
  | 'orange'
  | 'green'
  | 'cyan'
  | 'disabled'
  | 'inherit';
