import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  // const navLinkStyle = ({ isActive }) => {
  //   return {
  //     backgroundColor: isActive ? "#9dce50" : "#58ae57",
  //     fontWeight: isActive ? "bold" : "normal",
  //     textDecoration: "none",
  //     color: "#fff",
  //     fontSize: "18px",
  //     transition: "all 10s ease-in-out",
  //   };
  // };

  return (
    <>
      <Container>
        <NavContainer>
          <ul>
            <li>
              <StyledNavLink end to="/">
                Home
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/pharmacy/">Pharmacy</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/about/">About Us</StyledNavLink>
            </li>
          </ul>
        </NavContainer>
      </Container>
    </>
  );
};

export default Navbar;

const Container = styled.div`
  position: relative;
  border-bottom: 1px solid #eee;
  background: #58ae57;
`;
const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  text-align: center;

  ul {
    background: #58ae57;
    list-style: none;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    li {
      padding: 2px;
      flex: 0 1 10%;
      width: 100%;
      transition: all 0.8s ease-in-out;
    }
  }
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
