import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BiMenuAltLeft, BiX } from "react-icons/bi";
import auth from "../../Firebase/firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [extendNavbar, setextendNavbar] = useState(false);
  return (
    <>
      <Container extendNavbar={extendNavbar}>
        <OpenLinksButton
          onClick={() => {
            setextendNavbar((isOpen) => !isOpen);
          }}
        >
          {extendNavbar ? (
            <>
              <BiX />
            </>
          ) : (
            <>
              <BiMenuAltLeft />
            </>
          )}
        </OpenLinksButton>
        <NavContainer>
          <ul>
            <li>
              <StyledNavLink end to="/">
                Home
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/product">Pharmacy</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/about">About Us</StyledNavLink>
            </li>
            {user && (
              <li>
                <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>
              </li>
            )}
          </ul>
        </NavContainer>
        {extendNavbar && (
          <MobileContainer>
            <ul>
              <li>
                <StyledNavLink end to="/">
                  Home
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/product">Pharmacy</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/about">About Us</StyledNavLink>
              </li>
              {user && (
                <li>
                  <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>
                </li>
              )}
            </ul>
          </MobileContainer>
        )}
      </Container>
    </>
  );
};

export default Navbar;

const Container = styled.div`
  position: relative;

  /* background: #58ae57; */
  height: ${(props) => (props.extendNavbar ? "50vh" : "50px")};
  margin-top: 0.8rem;
  transition: all 0.5s ease;
  vertical-align: middle;
  @media (max-width: 768px) {
    background: #58ae57;
  }
`;
const NavContainer = styled.div`
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: center;
  background: #58ae57;
  margin: 0 auto;
  /* padding: 0 15px; */
  text-align: center;
  transition: all 0.5s ease;
  @media (max-width: 768px) {
    display: none;
  }

  ul {
    max-width: 1200px;
    flex: 1 1 auto;
    background: #58ae57;
    list-style: none;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    flex: 1 1 auto;

    li {
      padding: 2px;
      flex: 1 1 auto;
      width: 100%;
      transition: all 0.8s ease-in-out;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`;

export const NavbarLinkExtended = styled(NavLink)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;
const StyledNavLink = styled(NavLink)`
  text-align: center;
  letter-spacing: 1px;
  padding: 8px;
  display: inline-block;
  position: relative;
  width: 100%;
  font-size: large;
  text-decoration: none;
  color: #ffffff;

  transition: all ease-in-out 0.3s;

  &.active {
    color: #ffffff;
    background-color: #9dce50;
    animation: fadeIn 700ms ease-out forwards;
    transition: all 0.3s ease-out;
  }

  &:after {
    content: "";
    position: absolute;
    display: block;
    height: 0.1em;
    width: 0%;
    background-color: #9dce50;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    bottom: 2px;
    transition: all ease-in-out 250ms;
  }
  &:hover {
    color: #e1ffb2;
    transition: all 0.3s ease-in;
  }
  &:hover:after {
    width: 40%;
    opacity: 0;
    animation: fadeIn 700ms ease-out forwards;
  }

  /* Fade-in animation */
  @keyframes fadeIn {
    100% {
      opacity: 1;
    }
  }
`;
const OpenLinksButton = styled.button`
  transition: all 0.5s ease;
  background: none;
  border: none;
  color: #fff;
  font-size: 40px;
  cursor: pointer;
  svg {
    vertical-align: baseline;
    width: 70px;
    height: 50px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  transition: all 0.5s ease;

  ul {
    list-style: none;
    padding: 1rem 0;
    li {
      margin-bottom: 10px;
    }
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
