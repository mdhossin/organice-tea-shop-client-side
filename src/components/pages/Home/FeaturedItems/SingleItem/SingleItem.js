import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Fab,
  Rating,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
const useStyles = makeStyles(() => ({
  icon: {
    color: "white",
  },
  media: {
    transition: ".3s all ease",
    boxSizing: "border-box",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
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

const SingleItem = ({ service }) => {
  console.log("featured item,", service);
  const classes = useStyles();
  const { buttons, media, cardContent } = classes;
  const { _id, title, image, description, price, rating } = service;
  return (
    <Card sx={{ height: "100%", p: 1 }} elevation={0}>
      <CardMedia
        className={media}
        component="img"
        height="330"
        image={image}
        alt="green iguana"
      />
      <CardContent className={cardContent}>
        <div>
          <Typography
            sx={{ mb: 0, color: "#444 !important" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography sx={{ mt: 0 }} variant="body2" color="text.secondary">
            {description}
          </Typography>
        </div>
        <div>
          <Typography gutterBottom variant="h6" component="div">
            ${price}
          </Typography>
        </div>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "space-between", px: 2 }}
      >
        <Link style={{ textDecoration: "none" }} to={`/placeorder/${_id}`}>
          <Rating name="size-small" value={rating} size="small" readOnly />

          <Fab className={buttons} variant="extended" size="small">
            <ShoppingCartIcon sx={{ fontSize: "18px" }} />
            Add to cart
          </Fab>
        </Link>
      </CardActions>
    </Card>
  );
};

export default SingleItem;
