import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";

const SingleShowCase = ({ showcase, aos, aos_offset }) => {
  const { title, image } = showcase;

  const useStyle = makeStyles({
    cardContainer: {
      position: "relative",
      overflow: "hidden",
    },
    cardContent: {
      position: "absolute",
      left: "0%",
      top: "29%",
      width: "100%",
      boxSizing: "border-box",
      textAlign: "center",
    },
    heading: {
      fontWeight: "600 !important",
      color: "white",
      fontSize: "38px !important",
    },

    media: {
      transition: ".5s all ease-in",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
  });

  const { cardContainer, cardContent, heading, media } = useStyle();
  return (
    <Box
      data-aos={aos}
      data-aos-offset={aos_offset}
      component="div"
      className={cardContainer}
    >
      <img className={media} width="100%" src={image} alt="" />
      <Box component="div" className={cardContent}>
        <Box component="div" className="card-inner">
          <Typography
            className={heading}
            variant="h3"
            gutterBottom
            component="div"
          >
            {title}
          </Typography>
          <Button
            variant="outlined"
            style={{ color: "white", borderColor: "#fff" }}
          >
            Read more
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleShowCase;
