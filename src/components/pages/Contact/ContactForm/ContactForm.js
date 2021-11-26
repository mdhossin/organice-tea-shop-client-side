import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import EmailIcon from "@mui/icons-material/Email";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles({
  buttons: {
    padding: "5px 30px !important",
    "&:hover": {
      backgroundColor: "lightgray !important",
      color: "#444 !important",
    },
  },
});
const ContactForm = () => {
  const { buttons } = useStyle();
  return (
    <Box sx={{ backgroundColor: "#F8F9F7", pt: 5 }}>
      <Container sx={{ py: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ color: "#444444", fontWeight: "600" }}
              variant="h4"
              gutterBottom
              component="div"
            >
              Contact Us
            </Typography>
            <Typography
              sx={{ mb: 3, lineHeight: "1.7", width: "350px" }}
              variant="body2"
              color="text.secondary"
            >
              Alienum phaedrum torquatos nec eu, detr periculis ex, nihil
              expetendis in mei. Mei an pericula euripidis hinc partem.
            </Typography>
            <Box sx={{ display: "flex", mt: 2 }}>
              <LocationCityIcon sx={{ color: "#91928d", mr: 2 }} />
              <Typography
                sx={{ color: "#91928d" }}
                variant="body1"
                gutterBottom
                component="div"
              >
                27 Rue du Calvaire 625 Tillé, France
              </Typography>
            </Box>
            <Box sx={{ display: "flex", mt: 2 }}>
              <CalendarViewMonthIcon sx={{ color: "#91928d", mr: 2 }} />
              <Typography
                sx={{ color: "#91928d" }}
                variant="body1"
                gutterBottom
                component="div"
              >
                Monday to Friday: 9am to 8pm
              </Typography>
            </Box>
            <Box sx={{ display: "flex", mt: 2 }}>
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
          <Grid item xs={12} md={5}>
            <form>
              <TextField
                sx={{ width: "100%", mb: 3 }}
                id="filled-textarea"
                label="Your Name"
                placeholder="Your Name"
                multiline
                variant="filled"
              />
              <TextField
                sx={{ width: "100%", mb: 3 }}
                id="filled-textarea"
                label="Your Email"
                placeholder="Your Email"
                multiline
                variant="filled"
              />
              <TextField
                sx={{ width: "100%", mb: 3 }}
                id="standard-multiline-static"
                label="Message..."
                multiline
                rows={4}
                placeholder="Write Message..."
                variant="filled"
              />
            </form>
            <Button
              className={buttons}
              variant="outlined"
              style={{ color: "#444", borderColor: "lightgrey" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactForm;
