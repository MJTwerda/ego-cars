'use client'
import { Divider, IconButton, ListItemIcon, Menu, MenuItem, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import Link from "next/link";
import { MenuItemI, MenuLabelI } from './menu.interfaces';

export interface CommonMenuProps {
  menuLabel: MenuLabelI;
  menuIconOpened?: React.ReactNode;
  menuIconClosed: React.ReactNode;
  menuItems: MenuItemI[];
  showCloseButton?: boolean;
  justifyItems: 'start' | 'end';
}

const CommonMenu = (
  {
    menuLabel,
    menuIconOpened,
    menuIconClosed,
    menuItems,
    showCloseButton,
    justifyItems
  }: CommonMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="flex justify-center">
        <Typography variant='body1' className="flex self-center w-3/4">
          {menuLabel.isStrong ? <strong>{menuLabel.label}</strong> : menuLabel.label}
        </Typography>

        <IconButton onClick={handleClick} data-testid='common_menu_icon_btn'>
          {open ? menuIconOpened || menuIconClosed : menuIconClosed}
        </IconButton>

        <Menu id="common-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
          <div key='close-menu' className={`flex-column justify-items-${justifyItems}`}>
            {showCloseButton && (
              <div>
                <MenuItem onClick={handleClose} data-testid='common_menu_close_btn'>
                  <p>Cerrar</p>
                  <ListItemIcon className={`flex justify-${justifyItems}`}>
                    <CloseIcon fontSize="small" />
                  </ListItemIcon>
                </MenuItem>
              </div>
            )}

            {menuItems.map((menuItem: MenuItemI) => (
              <div key={menuItem.label}>
                {menuItem.path ? (
                  <MenuItem className={`w-56 justify-${justifyItems} mr-9`} data-testid={`common_menu_item_${menuItem.label}`}>
                    <Link
                      href={menuItem.path || ''}
                      data-testid={`common_menu_item_link_${menuItem.path}`}
                    >
                      {menuItem.label}
                    </Link>
                  </MenuItem>
                ) : (
                  <MenuItem
                    className={`w-56 justify-${justifyItems} mr-9`}
                    onClick={menuItem.handleClick && menuItem.handleClick}
                    data-testid={`common_menu_item_${menuItem.label}`}
                  >
                    {menuItem.label}
                  </MenuItem>
                )}
                {menuItem.bottomDivider && <Divider />}
              </div>
            )
            )}
          </div>
        </Menu>
      </div>
    </div>
  )
};

export default CommonMenu;