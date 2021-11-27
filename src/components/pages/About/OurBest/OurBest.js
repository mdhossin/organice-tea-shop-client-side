import React from "react";
import { Container, Grid, Typography } from "@mui/material";

const OurBest = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Typography
        sx={{
          mb: 3,
          color: "#444444",
          fontWeight: "600",
          textAlign: "center",
          fontSize: "36px",
        }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Our Best Qualities
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Grid item xs={12} md={10}>
            <Typography
              sx={{
                color: "#444444",
                fontWeight: "500",
              }}
              variant="h5"
              gutterBottom
              component="div"
            >
              100% Organic
            </Typography>
            <Typography
              sx={{ mb: 3, lineHeight: "1.7" }}
              variant="body2"
              color="text.secondary"
            >
              Quisque ut nisi at mi venenatis blandit. In ante risus, hendrerit
              sed tempus eget, eleifend id massa. Nam neque felis, iaculis
              cursus libero id, mattis convallis nisi.
            </Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <Typography
              sx={{
                color: "#444444",
                fontWeight: "500",
              }}
              variant="h5"
              gutterBottom
              component="div"
            >
              Highly Fresh
            </Typography>
            <Typography
              sx={{ mb: 3, lineHeight: "1.7" }}
              variant="body2"
              color="text.secondary"
            >
              Etiam sit amet lacus et eros pellentesque congue in eu tellus.
              Fusce facilisis egestas dapibus. Duis volutpat est odio, ac nulla
              elementum vitae. Vestibulum tincidunt ipsum.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid item xs={12} md={10}>
            <Typography
              sx={{
                color: "#444444",
                fontWeight: "500",
              }}
              variant="h5"
              gutterBottom
              component="div"
            >
              Affordable Price
            </Typography>
            <Typography
              sx={{ mb: 3, lineHeight: "1.7" }}
              variant="body2"
              color="text.secondary"
            >
              Fusce feugiat sem dui, non accumsan elit ornare eu. Quisque
              posuere ac libero at efficitur. Integer tempor suscipit velit nec
              porttitor. Vestibulum velit arcu, interdum.
            </Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <Typography
              sx={{
                color: "#444444",
                fontWeight: "500",
              }}
              variant="h5"
              gutterBottom
              component="div"
            >
              Awardable Taste
            </Typography>
            <Typography
              sx={{ mb: 3, lineHeight: "1.7" }}
              variant="body2"
              color="text.secondary"
            >
              Nullam commodo et lectus in elementum. Fusce neque ligula,
              fringilla sed turpis sit amet, maximus consectetur arcu. Lorem
              ipsum dolor sit amet. consectetur adipiscing elit
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurBest;
