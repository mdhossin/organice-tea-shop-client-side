import React from "react";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import aboutBg from "../../../../../assets/images/aboutUsImage/aboutus.jpg";
import Footer from "../../../Shared/Footer/Footer/Footer";
import OurBest from "../../OurBest/OurBest";
import WhyOrganic from "../../WhyOrganic/WhyOrganic";

const useStyle = makeStyles({
  aboutBg: {
    background: `url(${aboutBg}) no-repeat center`,
    backgroundColor: "rgba(45, 58, 74, .5)",
    backgroundBlendMode: "darken, luminosity",
    height: "300px",
  },
  buttons: {
    marginLeft: "25px !important",
    "&:hover": {
      backgroundColor: "lightgray !important",
      color: "#444 !important",
    },
  },
});
const AboutUs = () => {
  const { aboutBg, buttons } = useStyle();
  return (
    <>
      <Box sx={{ marginTop: "55px" }}>
        <Box className={aboutBg}>
          <Box sx={{ color: "white", width: "200px", m: "0 auto", pt: 12 }}>
            <Typography color="white" variant="h3" gutterBottom component="div">
              About Us
            </Typography>

            <Button
              className={buttons}
              variant="outlined"
              style={{ color: "white", borderColor: "#fff" }}
            >
              Read more
            </Button>
          </Box>
        </Box>
      </Box>
      <WhyOrganic></WhyOrganic>
      <OurBest></OurBest>
      <Footer></Footer>
    </>
  );
};

export default AboutUs;
