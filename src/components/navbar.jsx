import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import LanguageIcon from "@material-ui/icons/Language";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static" className="bg-dark">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <LanguageIcon />
          </IconButton>
          <Typography variant="h6">
            <Link to="/" className="text-white">
              Inspire World
            </Link>{" "}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
