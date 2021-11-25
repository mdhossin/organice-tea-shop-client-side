
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

// import useAuth from "../../../hooks/useAuth";
import { Box } from "@mui/system";
import logo from '../../../../../assets/logo/navbar-logo.png'
import MobileNavbar from "../MobileNavbar/MobileNavbar";
const useStyles = makeStyles(() => ({
  navlinks: {
    marginLeft: "20px",
    display: "flex",
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
}));
// navbar page
function Navigation() {
//   const { user, logout } = useAuth();
const user = 'abdul'
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="fixed" sx={{backgroundColor:'white', color: 'black'}}>
      <CssBaseline />
      <Toolbar>
        <Typography
          sx={{ textAlign: "start" }}
          variant="h6"
          className={classes.logo}
        >
          <img width='50px' src={logo} alt="" />
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
              <Button color="inherit">Home</Button>
            </Link>
            <Link
              activeStyle={{
                fontWeight: "bold",
                color: "yellow",
              }}
              to="/about"
              className={classes.link}
            >
              <Button color="inherit">About Us</Button>
            </Link>
            <Link
              activeStyle={{
                fontWeight: "bold",
                color: "yellow",
              }}
              to="/contact"
              className={classes.link}
            >
              <Button color="inherit">Contact</Button>
            </Link>
            <Link
              activeStyle={{
                fontWeight: "bold",
                color: "yellow",
              }}
              to="/allServices"
              className={classes.link}
            >
              <Button color="inherit">Services</Button>
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
                  <Button  variant="outlined" color="inherit">
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



















