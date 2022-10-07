import React from "react";
import ReactModal from "react-modal";
import Modal from "@mui/material/Modal";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import { BiCreditCard, BiShoppingBag } from "react-icons/bi";
import { useShoppingCart } from "use-shopping-cart";
import CartItem from "../CartItem/CartItem";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import { toast } from "react-toastify";

ReactModal.setAppElement("#root");

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  bgcolor: "white",
  border: "10px solid #10847e",
  boxShadow: 24,
  borderRadius: 3,
  p: 4,
  overflow: "hidden",
  "@media (max-width: 600px)": {
    width: "95%",
  },
};
const CartModal = ({ open, onClose }) => {
  const { cartDetails, cartCount, totalPrice, clearCart } = useShoppingCart();
  const date = new Date();
  const formattedDate = format(date, "PP");
  const [user] = useAuthState(auth);
  //Get all the objects in a object in a form of an array
  const cartItems = Object.keys(cartDetails).map((key) => cartDetails[key]);

  const handleCheckout = () => {
    const order = {
      username: user?.displayName,
      email: user?.email,
      orderDate: formattedDate,
      cartItems,
      totalPrice,
    };
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.success) {
          toast.success(`Order Received`);
          clearCart();
        } else {
          toast.error(`Failed to Process Order`);
        }
      })
      .catch((error) => {
        toast.error(`Failed to Process Order`);
        console.log(error);
      });

    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Fade direction={"up"}>
          <Paper sx={{ position: "relative", p: 2 }}>
            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              spacing={2}
            >
              <div className="col">
                <Typography variant="h5" component="h2" color="#4caf50">
                  <b>Shopping Cart</b>
                </Typography>
              </div>
              <Typography variant="h5" fontWeight={"bolder"} color="#334B49">
                {Object.keys(cartDetails).length}
                <Typography
                  component="span"
                  variant="overline"
                  sx={{ verticalAlign: "middle" }}
                >
                  {Object.keys(cartDetails).length <= 1 ? (
                    <> &#160; item</>
                  ) : (
                    <> &#160; items</>
                  )}
                </Typography>
              </Typography>
            </Stack>
          </Paper>
          {Object.keys(cartDetails).length === 0 && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="h5">
                <em>Your basket is currently empty</em>
              </Typography>
            </Box>
          )}
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem._id} cartItem={cartItem} />
          ))}

          <Stack
            direction="row"
            justifyContent="end"
            alignItems="center"
            pr={1}
            mt={5}
            gap={3}
            sx={{ flexWrap: "wrap" }}
          >
            <Button
              color="success"
              variant="outlined"
              startIcon={<BiCreditCard />}
              disabled={!cartCount}
              onClick={handleCheckout}
            >
              Checkout
            </Button>
            <Button
              color="success"
              variant="contained"
              endIcon={<BiShoppingBag />}
              onClick={onClose}
            >
              Continue Shopping
            </Button>
          </Stack>
        </Fade>
      </Box>
    </Modal>
  );
};

export default CartModal;
