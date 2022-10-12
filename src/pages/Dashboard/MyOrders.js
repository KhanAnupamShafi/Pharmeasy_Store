import {
  Avatar,
  Button,
  Chip,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.init";

const MyOrders = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  //   console.log(orders);

  useEffect(() => {
    if (user) {
      fetch(`https://pharmeasy-store.herokuapp.com/order?email=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => setOrders(data));
    }
  }, [user, navigate]);
  return (
    <div>
      <Divider sx={{ mb: 3 }}>
        <Button variant="outlined" color="success" disableElevation>
          <Typography color="#67AD63" component="h3">
            <b> Total Orders: {orders.length}</b>
          </Typography>
        </Button>
      </Divider>
      {orders.length !== 0 ? (
        orders?.map((order) => (
          <TableContainer key={order._id} component={Paper} sx={{ mb: 5 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ bgcolor: "#EFFCF5" }}>
                <TableRow>
                  <TableCell align="left">
                    <b>Order</b>{" "}
                    <Typography variant="body2" color="#1a9cb7">
                      #{order._id}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="subtitle2">
                      Placed On: {order.orderDate}
                    </Typography>
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">
                    Subtotal:{" "}
                    <Typography
                      component="span"
                      fontWeight={"bold"}
                      variant="h4"
                      fontSize={18}
                      color="#1a9cb7"
                    >
                      &#2547; {order?.totalPrice}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order.cartItems.map((item) => (
                  <TableRow
                    key={item._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell width="15%" align="center">
                      <Avatar
                        alt="order Item"
                        src={item.imgFile || item.img}
                        sx={{
                          width: "150px",
                          height: "130px",
                          verticalAlign: "center",
                          m: "auto",
                        }}
                        variant="square"
                      />
                    </TableCell>
                    <TableCell
                      width="30%"
                      component="th"
                      scope="row"
                      align="left"
                    >
                      <Typography fontSize={"14px"} variant="h6">
                        {item.title}
                      </Typography>
                    </TableCell>

                    <TableCell width="15%" align="center">
                      <Typography component="span" color="#c9c9c9">
                        Qty:{" "}
                      </Typography>
                      {item.quantity}
                    </TableCell>
                    <TableCell width="20%" align="right">
                      <Chip label="Delivered" />
                    </TableCell>
                    <TableCell width="30%" align="right">
                      <Typography variant="h6" fontSize={16}>
                        &#2547; {item.value}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ))
      ) : (
        <>
          <h3>No Orders Yet</h3>
        </>
      )}
    </div>
  );
};

export default MyOrders;
