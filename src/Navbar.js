import React from "react";
import { AppBar, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

function Header() {
  return (
    <AppBar position='static' style={{ backgroundColor: "white", color: "black" }}>
      <Toolbar>
        <div>
          <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
          <MenuIcon style={{ marginRight: "10px" }}></MenuIcon>
        </div>
        <Typography>
          <b>Good Morning</b> Tue Jan 12,2021 9:39 AM
        </Typography>
      </Toolbar>
    </AppBar>

  );
}
export default Header;