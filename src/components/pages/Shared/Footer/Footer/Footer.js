import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
const Footer = () => {
  return (
    <div style={{ backgroundColor: "#F8F9F7" }}>
      <Container sx={{ py: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3}>
            <Typography
              sx={{ color: "#444" }}
              variant="h5"
              gutterBottom
              component="div"
            >
              About Us
            </Typography>
            <Typography
              sx={{ color: "#91928d", mt: 2, lineHeight: "1.7" }}
              variant="body1"
              gutterBottom
              component="div"
            >
              Your nature-inspired supplier of all-organic and fresh produce for
              all your daily needs. We offer skin treatments, nutrition advisory
              and more.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Typography
              sx={{ color: "#444" }}
              variant="h5"
              gutterBottom
              component="div"
            >
              Contact us
            </Typography>
            <Box sx={{ display: "flex", mt: 2 }}>
              <LocationCityIcon sx={{ color: "#91928d", mr: 2 }} />
              <Typography
                sx={{ color: "#91928d" }}
                variant="body1"
                gutterBottom
                component="div"
              >
                27 Rue du Aire 60000 Tillé, France
              </Typography>
            </Box>
            <Box sx={{ display: "flex", mt: 1 }}>
              <AddIcCallIcon sx={{ color: "#91928d", mr: 2 }} />
              <Typography
                sx={{ color: "#91928d" }}
                variant="body1"
                gutterBottom
                component="div"
              >
                +589 55668 8569 44
              </Typography>
            </Box>
            <Box sx={{ display: "flex", mt: 1 }}>
              <EmailIcon sx={{ color: "#91928d", mr: 2 }} />
              <Typography
                sx={{ color: "#91928d" }}
                variant="body1"
                gutterBottom
                component="div"
              >
                tea@qodeinteractive.com
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={3}>
            <Typography
              sx={{ color: "#444" }}
              variant="h5"
              gutterBottom
              component="div"
            >
              Profile
            </Typography>
            <Box sx={{ display: "flex", mt: 2 }}>
              <PersonIcon sx={{ color: "#91928d", mr: 2 }} />
              <Typography
                sx={{ color: "#91928d" }}
                variant="body1"
                gutterBottom
                component="div"
              >
                My account
              </Typography>
            </Box>
            <Box sx={{ display: "flex", mt: 1 }}>
              <DriveFileRenameOutlineIcon sx={{ color: "#91928d", mr: 2 }} />
              <Typography
                sx={{ color: "#91928d" }}
                variant="body1"
                gutterBottom
                component="div"
              >
                Checkout
              </Typography>
            </Box>
            <Box sx={{ display: "flex", mt: 1 }}>
              <RemoveRedEyeIcon sx={{ color: "#91928d", mr: 2 }} />
              <Typography
                sx={{ color: "#91928d" }}
                variant="body1"
                gutterBottom
                component="div"
              >
                Wishlist
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Typography
              sx={{ color: "#444" }}
              variant="h5"
              gutterBottom
              component="div"
            >
              Payment
            </Typography>

            <Box sx={{ mt: 1 }}>
              <Typography
                sx={{ color: "#91928d", lineHeight: "1.7" }}
                variant="body1"
                gutterBottom
                component="div"
              >
                Alienum phaedrum torquatos nec eu, detr periculis ex, nihil
                expet.
              </Typography>
            </Box>
            <Box sx={{ mt: 3 }}>
              <img
                width="100%"
                src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/futer-img-1.png"
                alt=""
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <div>
        <Typography
          sx={{ color: "#91928d", textAlign: "center", pb: 2 }}
          variant="body1"
          gutterBottom
          component="div"
        >
          Copyright © 2021 Qode Interactive, All Rights Reserved
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
