import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";
import greenBackground from "../../../../../assets/images/greenTeaBanner/green-background.jpg";
import greenTea from "../../../../../assets/images/greenTeaBanner/green-2.jpg";

// GreenTeaBanner page
const GreenTeaBanner = () => {
  AOS.init();
  const theme = useTheme();
  const useStyle = makeStyles({
    firstBackgroundImage: {
      backgroundColor: "transparent",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${greenBackground})`,
      backgroundSize: "cover",
      backgroundPosition: "50% 50%",
      width: "100%",
      height: "450px",
      transform: "translate(0px, 0px)",
      visibility: "inherit",
      zIndex: 20,
    },

    greenContainer: {
      padding: "30px",
      [theme.breakpoints.down("sm")]: {
        padding: "5px 5px 0 0 ",
      },
    },
    buttons: {
      "&:hover": {
        backgroundColor: "#B6BEB3 !important",
        color: "#fff !important",
      },
    },
  });

  const { firstBackgroundImage, buttons, greenContainer } = useStyle();
  return (
    <Box sx={{ flexGrow: 1, py: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            data-aos="fade-up"
            data-aos-offset="100"
            component="div"
            className={firstBackgroundImage}
          >
            <Box component="div" className={greenContainer}>
              <Typography
                sx={{ pl: 5, mt: 10, fontWeight: "500", color: "#fff" }}
                variant="h3"
                gutterBottom
                component="div"
              >
                Green Tea
              </Typography>
              <Typography
                sx={{ ml: 5, color: "#fff" }}
                variant="body1"
                gutterBottom
                component="div"
              >
                Green tea lovers raise your hands! The many health benefits and
                most importantly its role in aiding weight loss has made green
                tea one of the most popular beverages of the millennium. While
                the beverage is relatively new and just about picking up in
                India, green tea has been consumed in Japan and China for
                centuries.
              </Typography>

              <Button
                sx={{ ml: 5, mt: 2 }}
                variant="outlined"
                className={buttons}
                style={{ color: "#fff", borderColor: "lightgrey" }}
              >
                Shop Now
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box data-aos="fade-down" data-aos-offset="100" component="div">
            <img width="100%" height="450" src={greenTea} alt="" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GreenTeaBanner;
