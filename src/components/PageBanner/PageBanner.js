import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";

import React from "react";
import { NavLink } from "react-router-dom";
import bg from "../../assets/footer-bg.png";

const PageBanner = () => {
  return (
    <>
      <Container>
        <div>
          <Typography variant="h5" color="#04626c" gutterBottom>
            Shop
          </Typography>
          <Typography variant="h4" component="div" color="#04626c">
            <Box fontWeight="700" display="inline">
              Products by Pharmeasy
            </Box>
          </Typography>
        </div>
      </Container>
      <BoxContainer>
        <ProductTab>
          <li>
            <NavLink to="/">All</NavLink>
          </li>
          <li>
            <NavLink to="/">Featured</NavLink>
          </li>
          <li>
            <NavLink to="/">Latest</NavLink>
          </li>
        </ProductTab>
      </BoxContainer>
    </>
  );
};

export default PageBanner;

const Container = styled("div")`
  max-width: 100vw;
  background-color: #eef4f5;
  background-image: url(${bg});
  background-position: right top;
  background-repeat: no-repeat;
  padding: 3rem 3rem 2rem;
  box-shadow: 0 3px 20px rgb(0 0 0 / 10%);
  div {
    text-align: center;
  }
`;
const BoxContainer = styled(Box)`
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProductTab = styled("ul")`
  display: inline-block;
  border-bottom: 2px solid #eee;
  list-style: none;
  margin: 0 auto 30px;
  li {
    border-color: #04626c;
    display: inline-block;
    vertical-align: middle;
    float: none;
    border-bottom: 2px solid transparent;
    a {
      text-decoration: none;
      color: #777;
      min-width: 120px;
      display: block;
      padding: 9px 12px;
      letter-spacing: 1px;
      font-size: 18px;
      font-weight: 500;
      border-radius: 0;
      text-align: center;
      z-index: 1;
      line-height: 20px;
      transition: all 0.6s;
    }
  }
`;
