import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Fab,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  link: {
    "&:hover": {
      boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
      transition: ".3s all ease-in !important",
    },
  },
  icon: {
    color: "white",
  },
  media: {
    transition: ".3s all ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  buttons: {
    textTransform: "capitalize !important",
    boxShadow: "none !important",
    padding: "0 15px !important",
    color: "#444444",
    border: "1px solid lightgrey !important",
    transition: ".3s all ease !important",
    "&:hover": {
      backgroundColor: "#F4F4F4 !important",
    },
  },
}));
const SIngleProduct = ({ blog, aos, aos_offset }) => {
  const { buttons, media, link } = useStyles();
  const { title, image, description, postDetail } = blog;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card
        className={link}
        data-aos={aos}
        data-aos-offset={aos_offset}
        sx={{ height: "100%" }}
        elevation={0}
      >
        <CardMedia
          className={media}
          component="img"
          height="250px"
          width="100%"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{ pb: 0.5 }} variant="body2" color="text.secondary">
            {postDetail}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.slice(0, 80)}...
          </Typography>
        </CardContent>
        <CardActions>
          <Fab className={buttons} variant="extended" size="small">
            Read More
          </Fab>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SIngleProduct;
