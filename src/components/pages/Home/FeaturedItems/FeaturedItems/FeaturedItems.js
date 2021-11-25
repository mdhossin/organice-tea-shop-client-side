import React, { useEffect, useState } from "react";
import { CircularProgress, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleItem from "../SingleItem/SingleItem";

// user reviews page
const FeaturedItems = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("/featureData.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
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
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <Container sx={{ py: 5 }}>
      <Typography
        sx={{ mb: 3, color: "#444444", fontWeight: "600" }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Featured Items
      </Typography>

      {loading ? (
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <CircularProgress></CircularProgress>
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <Slider {...settings}>
            {products?.map((items, index) => (
              <SingleItem service={items} key={items.id} />
            ))}
          </Slider>
        </Box>
      )}
    </Container>
  );
};

export default FeaturedItems;
