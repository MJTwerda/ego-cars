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
  xUbication: 'start' | 'end';
}

const CommonMenu = (
  {
    menuLabel,
    menuIconOpened,
    menuIconClosed,
    menuItems,
    showCloseButton,
    xUbication = 'start'
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
    <div className="flex">
      <Typography variant='body1' className="hidden sm:flex self-center w-3/4">
        {menuLabel.isStrong ? <strong>{menuLabel.label}</strong> : menuLabel.label}
      </Typography>

      <IconButton onClick={handleClick} data-testid='common_menu_icon_btn'>
        {open ? menuIconOpened || menuIconClosed : menuIconClosed}
      </IconButton>

      <Menu id="common-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        <div>
          {showCloseButton && (
            <div className={`flex flex-col items-${xUbication} mb-2`}>
              <MenuItem
                onClick={handleClose}
                data-testid='common_menu_close_btn'
                sx={{ justifyContent: xUbication, alignContent: 'center' }}
              >
                <p className={`flex flex-row justify-${xUbication} items-center text-sm font-thin `}>Cerrar</p>
                <ListItemIcon
                  sx={{ display: 'flex', flexDirection: 'column', alignItems: xUbication, justifyContent: 'center' }}
                >
                  <CloseIcon fontSize="small" />
                </ListItemIcon>
              </MenuItem>
            </div>
          )}

          {menuItems.map((menuItem: MenuItemI) => (
            <div
              key={menuItem.label}
              className={`flex flex-col items-${xUbication} mr-6`}>
              {menuItem.path ? (
                <MenuItem
                  sx={{ width: '224px', display: 'flex', flexDirection: 'column', alignItems: xUbication, justifyContent: 'center' }}
                  data-testid={`common_menu_item_${menuItem.label}`}>
                  <Link
                    href={menuItem.path || ''}
                    data-testid={`common_menu_item_link_${menuItem.path}`}
                  >
                    {menuItem.label}
                  </Link>
                </MenuItem>
              ) : (
                <MenuItem
                  sx={{ width: '224px', display: 'flex', flexDirection: 'column', alignItems: xUbication, justifyContent: 'center' }}
                  onClick={menuItem.handleClick && menuItem.handleClick}
                  data-testid={`common_menu_item_${menuItem.label}`}
                >
                  {menuItem.label}
                </MenuItem>
              )}
              {menuItem.bottomDivider && <Divider sx={{ width: '100%' }} />}
            </div>
          )
          )}
        </div>
      </Menu>
    </div>
  )
};

export default CommonMenu;