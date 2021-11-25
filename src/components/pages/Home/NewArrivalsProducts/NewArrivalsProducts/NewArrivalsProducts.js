import React, { useEffect, useState } from "react";
import { CircularProgress, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SingleNewProduct from "../SingleNewProduct/SingleNewProduct";

// user reviews page
const NewArrivalsProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("/newarrivalsdata.json")
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
    slidesToShow: 3,
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
    <Container sx={{ py: 5,px:4 }}>
      <Typography
        sx={{ color: "#444444", fontWeight: "600" }}
        variant="h4"
        gutterBottom
        component="div"
      >
        New Arrivals
      </Typography>
      <Typography sx={{ mb: 3,fontFamily: "Pacifico !important",letterSpacing: '2px' }} variant="body2" color="text.secondary">
        Don't Miss Today's Featured Deals
      </Typography>

      {loading ? (
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <CircularProgress></CircularProgress>
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <Slider {...settings}>
            {products?.map((product, index) => (
              <SingleNewProduct product={product} key={product.id} />
            ))}
          </Slider>
        </Box>
      )}
    </Container>
  );
};

export default NewArrivalsProducts;
