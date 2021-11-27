import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SingleBodyCare from "../SingleBodyCare/SingleBodyCare";
import Footer from "../../../Shared/Footer/Footer/Footer";

const BodyCares = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init();
    setLoading(true);
    fetch("http://localhost:8000/bodycareProducts")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProducts(data);
      });
  }, []);
  return (
    <>
      <div style={{ marginTop: "55px" }}>
        <Container sx={{ py: 5 }}>
          <Typography
            sx={{ mb: 3, color: "#444444" }}
            variant="h4"
            gutterBottom
            component="div"
          >
            Body Care Products
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
                  <SingleBodyCare
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
      <Footer></Footer>
    </>
  );
};

export default BodyCares;
