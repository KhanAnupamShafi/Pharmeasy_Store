import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import { BiTrash } from "react-icons/bi";
import { useShoppingCart } from "use-shopping-cart";

const CartItem = ({ cartItem }) => {
  const { incrementItem, decrementItem, removeItem } = useShoppingCart();
  // console.log(totalPrice);
  return (
    <>
      <Box
        id="modal-modal-description"
        justifyContent="center"
        alignItems="start"
        gap={2}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          mt: 4,
          flexGrow: 1,
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 2, sm: 1 }}
          sx={{ width: "100%", textAlign: "center" }}
        >
          <Grid xs={12} sm={6} md={3}>
            <Avatar
              alt="Cart Item"
              src={cartItem.imgPath}
              sx={{ width: "100%", height: 88, pr: 1 }}
              variant="square"
            />
          </Grid>
          <Grid xs={12} sm={6} md={4} sx={{ textAlign: "left" }}>
            <Typography variant="subtitle2">{cartItem.category}</Typography>
            <Divider orientation="horizontal" />
            <Typography variant="subtitle1" fontWeight={"light"} fontSize={13}>
              {cartItem.title}
            </Typography>
          </Grid>
          <Grid xs={12} sm={6} md={2} className="col">
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={1}
            >
              <Avatar
                sx={{
                  bgcolor: "#9e9e9e",
                  width: 24,
                  height: 24,
                  cursor: "pointer",
                }}
                variant="square"
                onClick={() => decrementItem(cartItem.id)}
              >
                -
              </Avatar>
              <span>{cartItem.quantity}</span>
              <Avatar
                sx={{
                  bgcolor: "#9e9e9e",
                  width: 24,
                  height: 24,
                  cursor: "pointer",
                }}
                variant="square"
                onClick={() => incrementItem(cartItem.id)}
              >
                +
              </Avatar>
            </Stack>
          </Grid>
          <Grid xs={12} sm={6} md={3} className="col">
            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              pl={1}
            >
              <Typography component="span">&#2547; {cartItem.value}</Typography>
              <IconButton
                aria-label="delete"
                onClick={() => removeItem(cartItem.id)}
              >
                <BiTrash />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ width: "100%" }} />
      </Box>
    </>
  );
};

export default CartItem;
