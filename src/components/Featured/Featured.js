import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Grid2 from "@mui/material/Unstable_Grid2";
import React from "react";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import { featured } from "../../Data";

const Featured = () => {
  return (
    <Container fixed sx={{ overflowY: "hidden" }}>
      <Box
        sx={{
          width: ["100%", "90%", "80%"],
          padding: "20px",
          textAlign: "center",
          margin: "auto",
          color: "#1a1a1a",
        }}
      >
        <Typography
          sx={{ typography: { lg: "h2", md: "h3", sm: "h4", xs: "h5" } }}
          gutterBottom
        >
          Take your pick of our best deals
        </Typography>
        <Typography
          sx={{ typography: { md: "h5", sm: "h6", xs: "body1" } }}
          gutterBottom
        >
          with all the health essentials you need for you and your family
        </Typography>
      </Box>
      <Grid2
        container
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 3, sm: 4, md: 5 }}
        sx={{
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
          paddingRight: 1,
          paddingBottom: 1,
        }}
      >
        <FeaturedProducts products={featured} />
      </Grid2>
    </Container>
  );
};

export default Featured;
