
export type RadioProps = {
  name: string;
  value: string;
  onChange: (value: string | undefined) => void;
  checked?: boolean;
  text?: string;
  className?: string;
};
