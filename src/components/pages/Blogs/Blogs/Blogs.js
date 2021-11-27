import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import blogBg from "../../../../assets/images/blogImages/blogBg.jpg";
import Blog from "../Blog/Blog";
import Footer from "../../Shared/Footer/Footer/Footer";
const useStyle = makeStyles({
  contactBg: {
    background: `url(${blogBg}) no-repeat center `,
    backgroundColor: "rgba(45, 58, 74, .5)",
    backgroundBlendMode: "darken, luminosity",
    height: "300px",
  },
  buttons: {
    "&:hover": {
      backgroundColor: "lightgray !important",
      color: "#444 !important",
    },
  },
});
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init();
    setLoading(true);
    fetch("http://localhost:8000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setBlogs(data);
      });
  }, []);

  const { contactBg, buttons } = useStyle();
  return (
    <>
      <Box sx={{ marginTop: "55px" }}>
        <Box className={contactBg}>
          <Box sx={{ color: "white", width: "300px", m: "0 auto", pt: 12 }}>
            <Typography color="white" variant="h3" gutterBottom component="div">
              Blogs
            </Typography>

            <Button
              className={buttons}
              variant="outlined"
              style={{ color: "white", borderColor: "#fff" }}
            >
              Read more
            </Button>
          </Box>
        </Box>
      </Box>
      <Container sx={{ py: 5 }}>
        <Typography
          sx={{ mb: 3, color: "#444444", textAlign: "center" }}
          variant="h4"
          gutterBottom
          component="div"
        >
          Our Best Blogs
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
              {blogs?.map((blog, index) => (
                <Blog
                  aos="fade-up"
                  aos_offset="100"
                  blog={blog}
                  key={blog.id}
                />
              ))}
            </Grid>
          </Box>
        )}
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Blogs;
