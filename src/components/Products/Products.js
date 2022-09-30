import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import Grid2 from "@mui/material/Unstable_Grid2";
import { makeStyles } from "@mui/styles";
import { featured } from "../../Data";
import { Link } from "react-router-dom";

const Products = () => {
  const classes = useStyles();
  return (
    <Box>
      <Container maxWidth="lg" sx={{ px: 2, py: 4 }}>
        {/* columnSpacing={{ xs: 0, sm: 2, md: 5 }} spacing={5} sx={{ p: 1 }} */}
        <Grid2
          container
          columnSpacing={{ xs: 0, sm: 2, md: 5 }}
          spacing={5}
          sx={{ p: 1 }}
        >
          {featured.map((data) => (
            <Grid2 item key={data?.id} xs={12} sm={6} md={6} lg={4}>
              <Card
                className={classes.card}
                sx={
                  {
                    // overflow: "hidden",
                  }
                }
              >
                <Box className={classes.img}>
                  <CardHeader
                    sx={{
                      position: "absolute",
                      top: -5,
                      left: -5,
                      zIndex: 2,
                      fontSize: "16px",
                    }}
                    avatar={
                      <Avatar
                        className={classes.avatar}
                        sx={{
                          color: "white",
                          bgcolor: "#ef837b",
                          fontSize: "14px",
                          p: 3,
                          width: "2.6rem",
                          height: "2.6rem",
                        }}
                        aria-label="sale"
                      >
                        50% OFF
                      </Avatar>
                    }
                  />
                  <CardMedia
                    component="img"
                    className={classes.media}
                    image={data?.imgPath}
                    alt="product picture"
                  />
                </Box>
                <CardContent className={classes.content} sx={{ pb: 0 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{
                      fontWeight: 400,
                      fontSize: "1.1rem",
                      lineHeight: "1.25",
                      letterSpacing: "-.01em",
                      color: "#333",
                    }}
                    color="primary"
                  >
                    {data?.title}
                  </Typography>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="baseline"
                  >
                    <Box className={classes.info} sx={{ py: 1 }}>
                      <Typography variant="subtitle2">
                        <Box component="span" className={classes.price}>
                          MRP &#2547;<s>124</s>
                        </Box>
                      </Typography>
                      <Box component="span" className={classes.priceNow}>
                        &#2547;64
                      </Box>
                    </Box>
                    <Chip
                      label={data?.category}
                      color="secondary"
                      onClick={console.log()}
                    />
                  </Stack>
                </CardContent>
                <CardActions sx={{ justifyContent: "flex-end" }}>
                  <Link
                    to={`/product/${data?._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <MuiButton size="large" variant="contained">
                      Purchase
                    </MuiButton>
                  </Link>
                </CardActions>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
};

export default Products;

const useStyles = makeStyles((Theme) => ({
  card: {
    position: "relative",
    width: "88%",
    // maxHeight: "660px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    transition: "0.3s",
    boxShadow: "0 0 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
    "&:hover $media": {
      transform: "scale(1.090)",
    },
    "&:focus $media": {
      transform: "scale(1.090)",
    },
  },
  img: {
    flexGrow: 1,
    maxHeight: 352,
    overflow: "hidden",
  },
  media: {
    transition: " all .5s",
    objectFit: "contain !important",
  },
  content: {
    minHeight: 130,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  avatar: {
    minWidth: 0,
    borderRadius: "50%",
    lineHeight: 1,
  },
  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  price: {
    verticalAlign: "baseline",
    fontSize: "14px",
    color: "#8897a2",
  },
  priceNow: {
    verticalAlign: "baseline",
    fontSize: "20px",
    fontWeight: 600,
  },
}));

const MuiButton = styled(Button)`
  flex-grow: 2;
  text-decoration: none;
  color: #d7dfef;
  text-align: center;
  background-color: #26a69a;
  box-shadow: 0 3px 20px rgb(0 0 0 / 10%);
  &:hover {
    background-color: #004d40;
  }
`;
