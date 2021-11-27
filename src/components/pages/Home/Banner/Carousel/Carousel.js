import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { Button, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import imageOne from "../../../../../assets/images/Banner/sliderOne.jpg";
import imageTwo from "../../../../../assets/images/Banner/imageTwo.jpg";
import imageThree from "../../../../../assets/images/Banner/imagesThree.jpg";

const sliderData = [
  {
    id: 1,
    image: imageOne,
    description: "Collection starter",
    title: "Our lastest organic tea blends make your cup perfect",
  },
  {
    id: 2,
    image: imageTwo,
    description: "firsthand nature",
    title: "Taste nature in it's true from",
  },
  {
    id: 3,
    image: imageThree,
    description: "100% natures",
    title: "That Unlifting Feeling You've Been Craving",
  },
];

const Carousel = () => {
  const theme = useTheme();
  const useStyle = makeStyles({
    collection: {
      fontFamily: "Pacifico !important",
      [theme.breakpoints.down("sm")]: {
        fontSize: "25px !important",
      },
    },
    heading: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "45px !important",
      },
    },
    headingContainer: {
      marginLeft: "50px",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "20px",
      },
    },
    mainContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: "100px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "120px",
      },
    },
    buttons: {
      "&:hover": {
        backgroundColor: "lightgray !important",
        color: "#444 !important",
      },
    },
  });

  const { collection, heading, headingContainer, mainContainer, buttons } =
    useStyle();

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider
        style={{ width: "100%", margin: "0px", padding: "0px" }}
        {...settings}
      >
        {sliderData?.map((slider) => (
          <Box
            key={slider.id}
            component="div"
            sx={{
              backgroundColor: "transparent",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${slider.image})`,
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              width: "100%",
              height: "500px",
              transform: "translate(0px, 0px)",
              visibility: "inherit",
              zIndex: 20,
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Container className={mainContainer}>
                  <div className={headingContainer}>
                    <Typography
                      className={collection}
                      color="white"
                      variant="h4"
                      gutterBottom
                      component="div"
                    >
                      {slider.description}
                    </Typography>
                    <Typography
                      className={heading}
                      color="white"
                      variant="h2"
                      gutterBottom
                      component="div"
                    >
                      {slider.title}
                    </Typography>
                    <Button
                      className={buttons}
                      variant="outlined"
                      style={{ color: "white", borderColor: "#fff" }}
                    >
                      Read more
                    </Button>
                  </div>
                </Container>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
