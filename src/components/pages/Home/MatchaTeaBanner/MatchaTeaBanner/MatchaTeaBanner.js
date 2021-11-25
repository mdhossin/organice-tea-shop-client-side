import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";
import matchaOne from "../../../../../assets/images/matchaTeaBanner/matchaOne.jpg";
import matchaTwo from "../../../../../assets/images/matchaTeaBanner/matchaTwo.jpg";

// MatchaTeaBanner page
const MatchaTeaBanner = () => {
  AOS.init();
  const theme = useTheme();
  const useStyle = makeStyles({
    firstBackgroundImage: {
      backgroundColor: "transparent",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${matchaOne})`,
      backgroundSize: "cover",
      backgroundPosition: "50% 50%",
      width: "100%",
      height: "400px",
      transform: "translate(0px, 0px)",
      visibility: "inherit",
      zIndex: 20,
    },
    secondBackgroundImage: {
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${matchaTwo})`,
      backgroundSize: "cover",
      backgroundPosition: "50% 50%",
      width: "100%",
      height: "400px",
      transform: "translate(0px, 0px)",
      visibility: "inherit",
      zIndex: 20,
    },
    collection: {
      fontFamily: "Pacifico !important",
      [theme.breakpoints.down("sm")]: {
        fontSize: "25px !important",
      },
    },
    buttons: {
      "&:hover": {
        backgroundColor: "#B6BEB3 !important",
        color: "#fff !important",
      },
    },
  });

  const { firstBackgroundImage, buttons, secondBackgroundImage } = useStyle();
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
            <Typography
              sx={{ pt: 18, pl: 5, fontWeight: "500", color: "rgb(34,34,34)" }}
              variant="h4"
              gutterBottom
              component="div"
            >
              Matcha Powder <br /> Natureal
            </Typography>
            <Button
              sx={{ ml: 5 }}
              variant="outlined"
              className={buttons}
              style={{ color: "rgb(34,34,34)", borderColor: "lightgrey" }}
            >
              Shop Now
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            data-aos="fade-down"
            data-aos-offset="100"
            component="div"
            className={secondBackgroundImage}
          >
            <Typography
              sx={{ pt: 18, pl: 5, fontWeight: "500", color: "rgb(34,34,34)" }}
              variant="h4"
              gutterBottom
              component="div"
            >
              100% Organic
            </Typography>
            <Button
              sx={{ ml: 5 }}
              variant="outlined"
              className={buttons}
              style={{ color: "rgb(34,34,34)", borderColor: "lightgrey" }}
            >
             Shop Now
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MatchaTeaBanner;
