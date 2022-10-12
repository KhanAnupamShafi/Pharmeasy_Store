import { Card } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ReviewSales = () => {
  const [orders, setOrders] = useState([]);
  // console.log(orders);
  const sum = orders.reduce((accumulator, object) => {
    return accumulator + object.totalPrice;
  }, 0);
  useEffect(() => {
    fetch(`https://pharmeasy-store.herokuapp.com/order/all`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setOrders(data);
      });
  }, []);
  return (
    <Container fixed>
      <Grid2
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        sx={{ flexGrow: 1 }}
      >
        <Grid2>
          <Stylecard>
            <h2>Total Sales:</h2>
            <b>
              {" "}
              <p>{orders.length}</p>
            </b>
          </Stylecard>
        </Grid2>
        <Grid2>
          <Stylecard2>
            <h2>Total Income</h2>
            <b>
              <p>{sum} &#2547;</p>
            </b>
          </Stylecard2>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default ReviewSales;

const Stylecard = styled(Card)`
  text-align: center;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow;

  padding: 14px 80px 18px 36px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
  }
  img {
    position: absolute;
    top: 20px;
    right: 15px;
    max-height: 120px;
  }

  background-image: url(https://ionicframework.com/img/getting-started/ionic-native-card.png);
  background-repeat: no-repeat;
  background-position: right;
  background-size: 80px;
`;
const Stylecard2 = styled(Card)`
  text-align: center;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow;

  padding: 14px 80px 18px 36px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
  }
  img {
    position: absolute;
    top: 20px;
    right: 15px;
    max-height: 120px;
  }

  background-image: url(https://ionicframework.com/img/getting-started/components-card.png);
  background-repeat: no-repeat;
  background-position: right;
  background-size: 80px;
`;
