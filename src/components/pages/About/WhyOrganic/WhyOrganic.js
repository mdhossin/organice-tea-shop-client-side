import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Accordions from "../Accordion/Accordions";
const useStyle = makeStyles({
  buttons: {
    "&:hover": {
      backgroundColor: "lightgray !important",
      color: "#444 !important",
    },
  },
});
const WhyOrganic = () => {
  const { buttons } = useStyle();
  return (
    <Container sx={{ py: 5 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              fontFamily: "Pacifico !important",
              letterSpacing: "2px",
            }}
            variant="h5"
            color="text.secondary"
          >
            Testimonials
          </Typography>
          <Typography
            sx={{ color: "#444444", fontWeight: "600" }}
            variant="h4"
            gutterBottom
            component="div"
          >
            Our philosophy
          </Typography>
          <Typography
            sx={{ mb: 3, lineHeight: "1.7" }}
            variant="body2"
            color="text.secondary"
          >
            Qui soleat legere gloriatur an, ad zril labores pro, eum postea
            veritus eu. Ei iudico essent latine has. Modus omnium vi tuperata
            vis ei, ea tale erat app lantur sit, pro ex tale doming molestiae.
            De mo critum sa dip scing mea ex. Lorem ipsum dolor sit amet, mea
            omnes.
          </Typography>
          <Button
            className={buttons}
            variant="outlined"
            style={{ color: "black", borderColor: "lightgrey" }}
          >
            Read more
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Accordions></Accordions>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhyOrganic;
