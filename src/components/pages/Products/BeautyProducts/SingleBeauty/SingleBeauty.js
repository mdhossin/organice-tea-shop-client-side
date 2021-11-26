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
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
const SingleBeauty = ({ product, aos, aos_offset }) => {
  const { buttons, media, link } = useStyles();
  const { title, image, price, category } = product;
  return (
    <Grid item xs={4} sm={4} md={3}>
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
          height="350"
          width="100%"
          image={image}
          alt="green iguana"
        />
        <CardContent sx={{display:'flex', justifyContent: 'space-between', pb: 0}}>
          <Typography sx={{color: '#444'}} gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {category}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "space-between", px: 2 }}
        >
          {/* <Link style={{ textDecoration: "none" }} to={`/allServices/${_id}`}> */}
          <Fab className={buttons} variant="extended" size="small">
            <ShoppingCartIcon sx={{ fontSize: "18px",mr:0.5 }} />
            Add to cart
          </Fab>
          {/* </Link> */}
          <Typography gutterBottom variant="h6" component="div">
            ${price}
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SingleBeauty;
