import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  AppBar,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink as Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// import useAuth from "../../../hooks/useAuth";
import { Box } from "@mui/system";
import logo from "../../../../../assets/logo/navbar-logo.png";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
const useStyles = makeStyles(() => ({
  navlinks: {
    marginLeft: "20px",
    display: "flex",
    textTransform:'capitalize !important'
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    color: "#f0ffff",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: "5px",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "18px",
    marginLeft: "20px",
    
  },
  linkButton: {
    textDecoration: "none",
    color: "black",
    fontSize: "18px",
    marginLeft: "20px",
    
  },
  menuItem: {
    color: "black",
    textDecoration: "none",
    fontSize: '16px !important',
    padding: '0 10px !important'
  },
  buttons: {
    textTransform: 'capitalize !important',
    fontSize: '16px !important'
  }
}));
// navbar page
function Navigation() {
  //   const { user, logout } = useAuth();
  const user = "abdul";
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white", color: "black" }}>
      <CssBaseline />
      <Toolbar>
        <Typography
          sx={{ textAlign: "start" }}
          variant="h6"
          className={classes.logo}
        >
          <img width="50px" src={logo} alt="" />
        </Typography>
        {isMobile ? (
          <MobileNavbar />
        ) : (
          <Box className={classes.navlinks}>
            <Link
              to="/home"
              activeStyle={{
                fontWeight: "bold",
                color: "yellow",
              }}
              className={classes.link}
            >
              <Button className={classes.buttons} color="inherit">Home</Button>
            </Link>
            <Link
              activeStyle={{
                fontWeight: "bold",
                color: "yellow",
              }}
              to="/about"
              className={classes.link}
            >
              <Button className={classes.buttons} color="inherit">About Us</Button>
            </Link>
            <Link
              activeStyle={{
                fontWeight: "bold",
                color: "yellow",
              }}
              to="/blogs"
              className={classes.link}
            >
              <Button className={classes.buttons} color="inherit">Blogs</Button>
            </Link>

            <div style={{ marginLeft: "10px" }}>
              <Button
                sx={{ color: "black" }}
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                onMouseOver={handleClick}
                className={classes.buttons}
              >
                Products
              </Button>

              <Menu

                id="basic-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                  onMouseLeave: handleClose,
                }}
                elevation={0}
              >
                <MenuItem onClick={handleClose}>
                  <Link to="/bodycare" className={classes.menuItem}>
                    Body Care
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/healthcare" className={classes.menuItem}>
                    Healthy
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/beautycare" className={classes.menuItem}>
                    Beauty
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/naturalcare" className={classes.menuItem}>
                    Natural
                  </Link>
                </MenuItem>
                
              </Menu>
            </div>
            <Link
              activeStyle={{
                fontWeight: "bold",
                color: "yellow",
              }}
              to="/contact"
              className={classes.link}
            >
              <Button className={classes.buttons} color="inherit">Contact</Button>
            </Link>

            {user?.email && (
              <Link
                activeStyle={{
                  fontWeight: "bold",
                  color: "yellow",
                }}
                to="/dashboard"
                className={classes.link}
              >
                <Button color="inherit">Dashboard</Button>
              </Link>
            )}
            <Typography
              className={classes.linkButton}
              variant="body1"
              sx={{
                fontWeight: "bold",
                display: "inline-block",
                color: "#cfd8dc",
                fontSize: "16px",
                marginTop: "7px",
                marginLeft: "15px",
              }}
              component="div"
            >
              {user?.displayName}
            </Typography>

            {!user?.email ? (
              <Link className={classes.linkButton} to="/login">
                <Button variant="outlined" color="inherit">
                  Login
                </Button>
              </Link>
            ) : (
              <>
                <Link className={classes.linkButton} to="/register">
                  <Button variant="outlined" color="inherit">
                    Logout
                  </Button>
                </Link>
              </>
            )}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navigation;
