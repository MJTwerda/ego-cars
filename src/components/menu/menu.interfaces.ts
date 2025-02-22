export interface MenuItemI {
  label: string;
  value?:string;
  handleClick?: () => void;
  path?: string;
  bottomDivider?: boolean;
};

export interface MenuLabelI {
  label: string;
  isStrong?: boolean;
}