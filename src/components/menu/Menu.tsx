'use client'
import { Divider, IconButton, ListItemIcon, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MenuItemI } from './menu.interfaces';

interface CommonMenuProps {
  menuItems: MenuItemI[];
}

const CommonMenu = ({ menuItems }: CommonMenuProps) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigateByItem = (path: string) => {
    router.push(path);
  }

  return (
    <div>
      <div className="flex justify-center">
        <p className="hidden sm:flex self-center">Menu</p>
        <IconButton onClick={handleClick}>
          <MenuIcon />
        </IconButton>

        <Menu id="common-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
          <div key='close-menu' className="flex-column justify-items-end w-full">
            <div className="flex justify-end">
              <MenuItem onClick={handleClose}>
                <p>Cerrar</p>
                <ListItemIcon className="flex justify-end">
                  <CloseIcon fontSize="small" />
                </ListItemIcon>
              </MenuItem>
            </div>

            {menuItems.map((menuItem: MenuItemI) => (
              <div key={menuItem.label}>
                {menuItem.path ? (
                  <MenuItem
                    className='w-56 justify-end mr-9'
                    onClick={() => menuItem.handleClick && menuItem.handleClick}
                  >
                    <Link
                      href={menuItem.path || ''}
                      className="flex justify-items-end"
                    >
                      {menuItem.label}
                    </Link>
                  </MenuItem>
                ) : (
                  <MenuItem
                    className='w-56 justify-end'
                    onClick={() => menuItem.handleClick && menuItem.handleClick}
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