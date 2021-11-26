import React, { useState } from "react";
import {
  Avatar,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
// import useAuth from "../../../hooks/useAuth";
import { Box } from "@mui/system";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "#000",
    fontSize: "18px",
    paddingLeft: "50px",
    display: "block",
    "&:hover": {
      backgroundColor: "rgb(7, 177, 77, 0.42)",
    },
  },
  buttons: {
    color: "#000 !important",
    fontSize: "18px !important",
    paddingLeft: "50px !important",
    textTransform: "capitalize !important",
  },
  menuItem: {
    color: "black",
    textDecoration: "none",
    padding: "0 10px !important",
  },
}));
// drawer page like navbar for mobile design only show this
function MobileNavbar() {
  //   const { user, logout } = useAuth();
  const user = "abudl";
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  // for dropdown menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        {user?.email && (
          <Box sx={{ backgroundColor: "#fff" }}>
            {user?.photoURL ? (
              <Avatar
                style={{ marginLeft: "60px", marginTop: "20px" }}
                alt="Remy Sharp"
                src={user?.photoUrl}
                sx={{ width: 60, height: 60 }}
              />
            ) : (
              <AccountCircleIcon
                style={{
                  marginLeft: "60px",
                  marginTop: "20px",
                  color: "white",
                }}
                sx={{ fontSize: "60px" }}
              />
            )}
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "white",
                marginLeft: "50px",
                mt: 1,
                mb: 0,
              }}
              component="div"
            >
              {user?.displayName}
            </Typography>
          </Box>
        )}
        <List
          sx={{
            backgroundColor: "#fff",
            color: "black",
            height: "100%",
            width: "240px",
          }}
        >
          <ListItem sx={{ px: 0, pt: 3 }} onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/home" className={classes.link}>
                Home
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem sx={{ px: 0 }} onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about" className={classes.link}>
                About
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem sx={{ px: 0 }} onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/blogs" className={classes.link}>
                Blogs
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem sx={{ px: 0 }}>
            <ListItemText>
              <div>
                <Button
                  className={classes.buttons}
                  id="basic-button"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  Products
                </Button>
                <Menu
                  sx={{ ml: 16 }}
                  elevation={0}
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  onClick={() => setOpenDrawer(false)}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <Link to="/bodycare" className={classes.menuItem}>
                      Body Care
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/beautycare" className={classes.menuItem}>
                      Beauty
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/healthcare" className={classes.menuItem}>
                      Healthy
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/naturalcare" className={classes.menuItem}>
                      Natural
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem sx={{ px: 0 }} onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/contact" className={classes.link}>
                Contact
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          {user?.email && (
            <ListItem sx={{ px: 0 }} onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/dashboard" className={classes.link}>
                  Dashboard
                </Link>
              </ListItemText>
            </ListItem>
          )}

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              {user?.email ? (
                <Link className={classes.buttons} to="/register">
                  <Button variant="outlined" color="inherit">
                    Logout
                  </Button>
                </Link>
              ) : (
                <Link to="/login" className={classes.buttons}>
                  <Button variant="outlined" color="inherit">
                    Login
                  </Button>
                </Link>
              )}
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        className={classes.icon}
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default MobileNavbar;
