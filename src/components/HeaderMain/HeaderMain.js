import { Button, Chip, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../../assets/logo/Logo.svg";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import { signOut } from "firebase/auth";
import { useShoppingCart } from "use-shopping-cart";
import CartModal from "../CartModal/CartModal";

const HeaderMain = () => {
  const [user] = useAuthState(auth);
  const [fix, setFix] = useState(false);
  const { cartDetails } = useShoppingCart();
  const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleModal = () => setIsOpen(!isOpen);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  const setFixedEvent = () => {
    if (window.scrollY >= 40) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  window.addEventListener("scroll", setFixedEvent);
  return (
    <>
      <Container fix={fix}>
        <Wrapper>
          <Row>
            <Left>
              <SearchForm>
                <SearchContainter>
                  <SearchInput />
                </SearchContainter>
                <ButtonForm type="submit">
                  <BsSearch />
                </ButtonForm>
              </SearchForm>
            </Left>
            <Middle>
              <Link to="/">
                <LogoContainer>
                  <LogoSVG />
                </LogoContainer>
              </Link>
            </Middle>
            <Right>
              {user ? (
                <UserInfo>
                  <span>
                    <svg
                      aria-hidden="true"
                      className="icon"
                      width="40px"
                      height="40px"
                      viewBox="0 0 64 64"
                      fill="#04626c"
                    >
                      <path d="M25.5 1.4c-10.2 4.4-12.4 18.1-4.1 25.4 14 12.3 33.8-6.7 21.9-20.9C38.6.4 31.7-1.3 25.5 1.4zm12.1 4.2c9.5 6.3 5.2 21.4-6.1 21.4C25.8 27 20 21.2 20 15.5 20 6.8 30.4 1 37.6 5.6z" />
                      <path d="M12.9 33.3C8.8 36 7.2 39.1 5.8 46.8c-1.4 7.8.4 13 5.2 15.4 2.9 1.5 6.3 1.8 21 1.8 20.3 0 23.6-.9 25.7-7 2.6-7.5-1.1-20.4-6.9-24-4.2-2.6-6.2-2.5-10.6.2-2.3 1.4-5.2 2.2-8.2 2.2-3 0-5.9-.8-8.2-2.2-4.5-2.8-6.7-2.8-10.9.1zM23 37c5.3 2.7 12.7 2.6 18.4-.2 3.8-1.8 4.9-2 7.1-1 4 1.9 7.6 12.7 6.1 18.6-1.3 5.4-2.2 5.6-22.7 5.6-18 0-19-.1-21-2.1C9 56 8.8 55 9.3 49.4c.7-6.8 2.6-11.7 5.4-13.3 2.6-1.5 3.9-1.3 8.3.9z" />
                    </svg>
                  </span>
                  <div>
                    <Typography
                      sx={{ fontWeight: "bold" }}
                      display="block"
                      variant="button"
                    >
                      Welcome,{" "}
                      <Chip
                        label={
                          <Typography component="span" variant="overline">
                            {user.displayName ? user?.displayName : "user"}
                          </Typography>
                        }
                        color="success"
                      />
                    </Typography>
                    <div>
                      <Button
                        onClick={logout}
                        variant="text"
                        color="error"
                        sx={{ padding: 0, mt: 1 }}
                      >
                        sign out
                        {/* <Typography
                          display="block"
                          variant="subtitle2"
                          gutterBottom
                        >
                          Sign Out
                        </Typography> */}
                      </Button>
                    </div>
                  </div>
                </UserInfo>
              ) : (
                <Link to="/registration">
                  <UserInfo>
                    <span>
                      <svg
                        aria-hidden="true"
                        className="icon"
                        width="40px"
                        height="40px"
                        viewBox="0 0 64 64"
                        fill="#04626c"
                      >
                        <path d="M25.5 1.4c-10.2 4.4-12.4 18.1-4.1 25.4 14 12.3 33.8-6.7 21.9-20.9C38.6.4 31.7-1.3 25.5 1.4zm12.1 4.2c9.5 6.3 5.2 21.4-6.1 21.4C25.8 27 20 21.2 20 15.5 20 6.8 30.4 1 37.6 5.6z" />
                        <path d="M12.9 33.3C8.8 36 7.2 39.1 5.8 46.8c-1.4 7.8.4 13 5.2 15.4 2.9 1.5 6.3 1.8 21 1.8 20.3 0 23.6-.9 25.7-7 2.6-7.5-1.1-20.4-6.9-24-4.2-2.6-6.2-2.5-10.6.2-2.3 1.4-5.2 2.2-8.2 2.2-3 0-5.9-.8-8.2-2.2-4.5-2.8-6.7-2.8-10.9.1zM23 37c5.3 2.7 12.7 2.6 18.4-.2 3.8-1.8 4.9-2 7.1-1 4 1.9 7.6 12.7 6.1 18.6-1.3 5.4-2.2 5.6-22.7 5.6-18 0-19-.1-21-2.1C9 56 8.8 55 9.3 49.4c.7-6.8 2.6-11.7 5.4-13.3 2.6-1.5 3.9-1.3 8.3.9z" />
                      </svg>
                    </span>
                    <div>
                      <Typography
                        sx={{ fontWeight: "bold" }}
                        display="block"
                        variant="button"
                      >
                        Account
                      </Typography>
                      <div>
                        <Typography
                          display="block"
                          variant="subtitle2"
                          gutterBottom
                        >
                          Login / Sign Up
                        </Typography>
                      </div>
                    </div>
                  </UserInfo>
                </Link>
              )}
              <CartInfo onClick={handleOpen}>
                <span>
                  <svg
                    aria-hidden="true"
                    width="40px"
                    height="40px"
                    viewBox="0 0 465 465"
                    fill="#04626c"
                  >
                    <svg x="1%" y="1%">
                      <path d="M475.293 178.235h-80.708l-84.791-141.32c-4.206-7.02-13.33-9.312-20.379-5.091-7.035 4.221-9.312 13.344-5.091 20.379l75.619 126.032H115.351L190.97 52.202c4.221-7.035 1.944-16.158-5.091-20.379-7.064-4.221-16.158-1.929-20.379 5.091l-84.791 141.32H0v29.706h32.237l37.734 201.283c3.945 21.076 22.366 36.364 43.805 36.364h247.742c21.438 0 39.859-15.288 43.79-36.349l37.747-201.298h32.239l-.001-29.705zM376.109 403.77c-1.305 7.02-7.441 12.112-14.592 12.112H113.776a14.86 14.86 0 01-14.606-12.126L62.451 207.94h350.392l-36.734 195.83z"></path>
                    </svg>
                  </svg>
                </span>
                <div>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    display="block"
                    variant="button"
                  >
                    My Cart
                  </Typography>
                  <div>
                    <Typography
                      display="block"
                      variant="subtitle2"
                      gutterBottom
                    >
                      {Object.keys(cartDetails).length} Item
                    </Typography>
                  </div>
                </div>
              </CartInfo>

              <CartModal open={open} onClose={handleClose} />
            </Right>
          </Row>
        </Wrapper>
      </Container>
    </>
  );
};

export default HeaderMain;

const Container = styled.div`
  position: ${(props) => (props.fix ? `sticky` : `relative`)};
  top: 0;
  /* width: 100vw; */
  z-index: 5;
  min-height: 60px;
  display: flex;
  background: #fff;
  background-color: ${(props) => props.fix && `#f0f8ff`};
  transition: 0.4s all ease-in-out;
`;
const Wrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 0;
  border-bottom: 1px solid #eee;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;
const Left = styled.div`
  display: flex;
  flex: 1 1 auto;
  max-width: 320px;
  align-items: center;
  @media (max-width: 1280px) {
    display: none;
  }
`;
const Middle = styled.div`
  display: flex;
  /* flex: 1; */
  align-items: center;
`;
const Right = styled.div`
  display: flex;
  /* flex: 1; */
  align-items: center;
  text-align: right;
  gap: 15px;
  a {
    color: #000000;
    text-decoration: none;
  }

  @media (max-width: 980px) {
    width: 100%;
    justify-content: center;
    span {
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;
const LogoContainer = styled.div`
  position: relative;
  text-align: center;
`;

const UserInfo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  margin: 0 15px;
  span {
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    padding-left: 5px;
  }
  div {
    vertical-align: middle;
    padding-left: 5px;
  }
`;
const CartInfo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  margin: 0 15px;
  span {
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    padding-left: 5px;
  }
  div {
    vertical-align: middle;
    padding-left: 5px;
  }
`;
const SearchForm = styled.form`
  margin: 0 auto;
  width: 100%;
  position: relative;
`;
const SearchContainter = styled.span`
  background: #fff none repeat scroll 0 0;
  border-radius: 8px 0 0 8px;
  display: flex;
`;
const SearchInput = styled.input`
  border: 1px solid #29873c;
  border-radius: 8px;
  padding: 0 10px;
  font-size: 1rem;
  font-weight: 400;
  height: 45px;
  flex: 1 1 auto;
  &:focus {
    outline: none;
    border: 2px solid #29873c;
  }
`;
const ButtonForm = styled.button`
  background: #29873c;
  color: #ffffff;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  display: flex;
  height: 45px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  width: 50px;
`;
