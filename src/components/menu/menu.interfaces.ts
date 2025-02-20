export interface MenuItemI {
  label: string;
  handleClick?: () => void;
  path?: string;
  bottomDivider?: boolean;
};