import { Button, TextField, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useTheme } from "@mui/material";

const SubscribeArea = () => {
  const theme = useTheme();
  const useStyle = makeStyles({
    buttons: {
      backgroundColor: "white !important",
      color: "#444  !important",
      borderColor: "lightgray !important",
      padding: "10px 30px !important",
      "&:hover": {
        backgroundColor: "#B6BEB3 !important",
        color: "#fff !important",
      },
    },
    divContainer: {
      width: "50%",
      margin: "0 auto",
      paddingTop: "10%",
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        paddingTop: "150px !important",
        width: "90%",
      },
    },
  });
  const { buttons, divContainer } = useStyle();
  return (
    <div style={{ backgroundColor: "#fff", height: "500px" }}>
      <Box component="div" className={divContainer}>
        <Typography
          sx={{
            color: "#444444",
            fontFamily: "Pacifico !important",
            letterSpacing: "2px",
          }}
          variant="body1"
          gutterBottom
        >
          Newsletter
        </Typography>
        <Typography variant="h4" gutterBottom component="div">
          Sign Up For News
        </Typography>

        <TextField
          sx={{ width: "100%" }}
          id="standard-basic"
          label="Enter your email"
          variant="standard"
        />
        <Button sx={{ ml: 5, mt: 2 }} variant="outlined" className={buttons}>
          Subscribe
        </Button>
      </Box>
    </div>
  );
};

export default SubscribeArea;
