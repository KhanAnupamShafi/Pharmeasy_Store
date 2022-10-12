import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import Navbar from "../../components/Navbar/Navbar";
import TopHeader from "../../components/TopHeader/TopHeader";
import Announcement from "../Announcement/Announcement";
import Grid2 from "@mui/material/Unstable_Grid2";
import { format } from "date-fns";
import {
  Card,
  CardMedia,
  Chip,
  IconButton,
  LinearProgress,
  Paper,
  Typography,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import { BiCategoryAlt, BiCheckCircle, BiHeart } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";
import formatProductPrice from "../../util/formatProductPrice";
import AddToCart from "../AddToCart/AddToCart";

const ProductUnit = () => {
  const { id } = useParams();
  // const [product, setProduct] = useState([]);
  const today = new Date();

  let deliveryDate = new Date();
  deliveryDate.setDate(today.getDate() + 2);
  const formattedDate = format(deliveryDate, "PPPP");

  // useEffect(() => {
  //   fetch(`https://pharmeasy-store.herokuapp.com/product/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, [id]);

  const { data: product, isLoading } = useQuery(["ProductUnit", id], () =>
    fetch(`https://pharmeasy-store.herokuapp.com/product/${id}`).then((res) =>
      res.json()
    )
  );
  const price = formatProductPrice(product);

  if (isLoading) {
    return (
      <Stack direction="row" justifyContent="center" alignItems="center">
        <LinearProgress color="success" />
      </Stack>
    );
  }
  return (
    <>
      <TopHeader />
      <HeaderMain />
      <Navbar />
      <Container fixed>
        <Grid2 container justifyContent="center">
          <Grid2 item xs={12} sm={12} md={6} sx={{ p: 2 }}>
            <Card sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                sx={{ width: 560, display: { xs: "none", sm: "block" } }}
                image={product.imgFile || product.img}
                alt={"Product photo"}
              />
            </Card>
          </Grid2>
          <Grid2 item xs={12} sm={12} md={6} sx={{ p: 2 }}>
            <Box flexDirection="column" sx={{ display: "flex" }}>
              <Typography
                color="#1a1a1a"
                fontFamily="Open Sans"
                fontWeight="300"
                variant="h4"
                gutterBottom
              >
                {product?.title}
              </Typography>
              <Typography
                component="span"
                color="#1a1a1a"
                fontFamily="Open Sans"
                fontWeight="300"
              >
                SKU: {product?._id}
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                sx={{ pt: 2, pb: 2 }}
              >
                <Chip
                  label={product?.category}
                  variant="outlined"
                  color="success"
                  icon={<BiCategoryAlt size={20} />}
                />
                <Typography variant="body2">
                  Brand:
                  <Typography
                    component="span"
                    color="#002579"
                    variant="subtitle2"
                    pl="6px"
                  >
                    {product?.brand}
                  </Typography>
                </Typography>
              </Stack>
              <Stack
                direction="column"
                justifyContent="space-between"
                // alignItems="center"
                spacing={3}
                sx={{ pt: 2, pb: 2 }}
              >
                <Box
                  justifyContent="start"
                  alignItems="center"
                  gap={0.5}
                  sx={{ display: "flex" }}
                >
                  <BiCheckCircle size={30} color="#18873C" />
                  <Typography variant="subtitle1">In Stock</Typography>
                  <Typography variant="subtitle2" color="#595959" pl={1}>
                    ({product?.stock} left)
                  </Typography>
                </Box>
                <Paper
                  variant="outlined"
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "center",
                    height: 150,
                    bgcolor: "background.default",
                    p: 2,
                    overflow: "auto",
                  }}
                >
                  <Typography variant="body1">{product?.desc}</Typography>
                </Paper>
                <Paper
                  variant="outlined"
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "center",
                    bgcolor: "#d40069",
                    color: "#fff",
                    p: 1,
                    overflow: "auto",
                  }}
                >
                  <Typography variant="caption">
                    Order today and get this product by {`${formattedDate}`}{" "}
                    with Express Delivery
                  </Typography>
                </Paper>
              </Stack>
              <Paper
                elevation={0}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                  pb: 2,
                  pt: 1,
                }}
              >
                <Typography variant="h5">{price}</Typography>
                {product?.discount > 0 && (
                  <Typography
                    component="span"
                    variant="subtitle2"
                    color="#8897a2"
                  >
                    MRP &#2547;
                    <s>
                      {Math.floor(
                        product?.price / (1 - product?.discount / 100)
                      )}
                    </s>
                  </Typography>
                )}
              </Paper>
              <Stack
                direction="row"
                justifyContent="start"
                alignItems="center"
                spacing={3}
                sx={{ pt: 2, pb: 2 }}
              >
                <AddToCart product={product} />
                <IconButton aria-label="add to shopping cart">
                  <BiHeart size={25} color="#d40069" />
                </IconButton>
              </Stack>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
      <Announcement />
      <Footer />
    </>
  );
};

export default ProductUnit;
