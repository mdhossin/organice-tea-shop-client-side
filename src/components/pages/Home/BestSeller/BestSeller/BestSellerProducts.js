import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SIngleProduct from "../SingleProduct/SIngleProduct";
const BestSellerProducts = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init();
    setLoading(true);
    fetch("http://localhost:8000/bestSellerProducts")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProducts(data);
      });
  }, []);
  return (
    <div>
      <Container sx={{ py: 5 }}>
        <Typography
          sx={{ mb: 3, color: "#444444" }}
          variant="h4"
          gutterBottom
          component="div"
        >
          Best Seller Products
        </Typography>
        {loading ? (
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <CircularProgress></CircularProgress>
          </Box>
        ) : (
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={2}
              columns={{ xs: 4, sm: 8, md: 12 }}
              justify="center"
            >
              {products?.map((product, index) => (
                <SIngleProduct
                  aos="fade-up"
                  aos_offset="100"
                  product={product}
                  key={product.id}
                />
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </div>
  );
};

export default BestSellerProducts;
