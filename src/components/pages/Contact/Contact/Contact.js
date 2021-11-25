import { makeStyles } from "@mui/styles";
import contactBg from "../../../../assets/images/aboutUsImage/aboutus.jpg";
import React from "react";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../../Shared/Footer/Footer/Footer";
const useStyle = makeStyles({
  contactBg: {
    background: `url(${contactBg}) no-repeat center`,
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
const Contact = () => {
  const { contactBg, buttons } = useStyle();

  return (
      <>
    <Box sx={{ marginTop: "55px" }}>
      <Box className={contactBg}>
        <Box sx={{ color: "white", width: "300px", m: "0 auto", pt: 12 }}>
          <Typography color="white" variant="h3" gutterBottom component="div">
            Contact Us
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
    <ContactForm></ContactForm>
    <Footer></Footer>
    </>
  );
};

export default Contact;
