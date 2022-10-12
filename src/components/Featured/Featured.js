import { CircularProgress, Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Grid2 from "@mui/material/Unstable_Grid2";
import React, { useEffect, useState } from "react";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import { useQuery } from "@tanstack/react-query";
// import { featured } from "../../Data";

const Featured = () => {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch("https://pharmeasy-store.herokuapp.com/product")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  const { data: products, isLoading } = useQuery(["FeauredProducts"], () =>
    fetch(`https://pharmeasy-store.herokuapp.com/product`).then((res) =>
      res.json()
    )
  );
  // console.log(products);

  if (isLoading) {
    return (
      <Stack direction="row" justifyContent="center" alignItems="center">
        <CircularProgress color="success" />
      </Stack>
    );
  }
  // console.log(products);

  return (
    <Container fixed sx={{ overflowY: "hidden" }}>
      <Box
        sx={{
          width: ["100%", "90%", "80%"],
          padding: "20px",
          textAlign: "center",
          margin: "20px auto 80px auto",
          color: "#1a1a1a",
        }}
      >
        <Typography
          sx={{ typography: { lg: "h3", md: "h3", sm: "h4", xs: "h5" } }}
          gutterBottom
        >
          Take your pick of our best deals
        </Typography>
        <Typography
          sx={{ typography: { md: "subtitle1", sm: "h6", xs: "body1" } }}
          fontWeight={"light"}
          fontStyle={"italic"}
          gutterBottom
        >
          "With all the health essentials you need for you and your family"
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
        <FeaturedProducts products={products} />
      </Grid2>
    </Container>
  );
};

export default Featured;
