import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CircularProgress,
  Container,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// user reviews page
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:8000/testimonials")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setReviews(data);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  const theme = useTheme();
  const useStyles = makeStyles(() => ({
    link: {
      padding: "0 250px",
      [theme.breakpoints.down("sm")]: {
        padding: "0px",
      },
    },

    imageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "30px",
    },
    cardPadding: {
      padding: "0 100px !important",
      [theme.breakpoints.down("sm")]: {
        fontSize: "25px !important",
      },
    },
  }));

  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#F8F9F7" }}>
      <Container sx={{ pb: 8, py: 5, px: 4 }}>
        <Typography
          sx={{
            textAlign: "center",
            mb: 1,
            color: "#444444",
            fontFamily: "Pacifico !important",
            letterSpacing: "2px",
          }}
          variant="body1"
          gutterBottom
          component="div"
        >
          Testimonials
        </Typography>
        <Typography
          sx={{ textAlign: "center", mb: 2, color: "#444444" }}
          variant="h4"
          gutterBottom
          component="div"
        >
          Our happy customers
        </Typography>
        {isLoading ? (
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <CircularProgress></CircularProgress>
          </Box>
        ) : (
          <Box sx={{ flexGrow: 1 }}>
            <Slider {...settings}>
              {reviews?.map((review, index) => (
                <Container sx={{ width: "100% !important" }}>
                  <Card
                    sx={{ backgroundColor: "#F8F9F7" }}
                    className={classes.link}
                    elevation={0}
                  >
                    <Typography sx={{ textAlign: "center" }} variant="h6">
                      {review.name}
                    </Typography>
                    <Typography
                      sx={{ textAlign: "center" }}
                      variant="body1"
                      color="text.secondary"
                    >
                      {review?.productName}
                    </Typography>
                    <CardContent>
                      <Typography
                        sx={{ textAlign: "center", lineHeight: "1.7" }}
                        variant="body1"
                        color="text.secondary"
                      >
                        "{review?.description.slice(0, 150)}...."
                      </Typography>
                      <Typography
                        sx={{ textAlign: "center", mt: 2 }}
                        gutterBottom
                        variant="body1"
                        component="div"
                      >
                        <Rating
                          name="half-rating-read"
                          defaultValue={review?.rating}
                          precision={0.5}
                          readOnly
                        />
                      </Typography>
                    </CardContent>
                  </Card>
                </Container>
              ))}
            </Slider>
          </Box>
        )}
      </Container>
    </div>
  );
};

export default Testimonials;
