import { Container, Grid } from "@mui/material";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import showCaseOne from "../../../../../assets/images/Showcaseimage/imageOne.jpg";
import showCaseTwo from "../../../../../assets/images/Showcaseimage/showCaseOne.jpg";
import showCaseThree from "../../../../../assets/images/Showcaseimage/imageThree.jpg";
import showCaseFour from "../../../../../assets/images/Showcaseimage/imageFour.jpg";

import SingleShowCase from "../SingleShowCase/SingleShowCase";

const showcaseData = [
  {
    id: 1,
    image: showCaseOne,
    title: "Organice",
  },
  {
    id: 2,
    image: showCaseTwo,
    title: "Rich Aroma",
  },
  {
    id: 3,
    image: showCaseThree,
    title: "Matcha Tea",
  },
  {
    id: 4,
    image: showCaseFour,
    title: "Earl Grey",
  },
];
const ShowCaseTea = () => {
  AOS.init();
  return (
    <Container>
      <Grid container spacing={3}>
        {showcaseData.map((showcase) => (
          <Grid key={showcase.id} item xs={12} md={3}>
            <SingleShowCase
              aos="fade-up"
              aos_offset="100"
              showcase={showcase}
            ></SingleShowCase>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ShowCaseTea;
