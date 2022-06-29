import { BadgeProps } from "components/Badge";

export type ProductCardProps = {
  title: string;
  subtitle: string;
  rating: number;
  description: string;
  price: number;
  badges: BadgeProps[]; 
  src?: string;
  className?: string;
};
