import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo/Logo.svg";
import {
  FaMapMarkerAlt,
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaTwitterSquare,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import FooterBottom from "./FooterBottom";
import { devices } from "../../responsive";

const Footer = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <FooterContainer>
            <FooterContent>
              <Row>
                <Details>
                  <Logo>
                    <img src={logo} alt="Logo" />
                    <p>
                      Do you want to be the first to know about promotions and
                      discounts?
                    </p>
                    <span>Subscribe to our newsletter and buy profitably!</span>
                  </Logo>
                  <Info>
                    <Company>
                      <h2>Company</h2>
                      <Link to="/">
                        <span>Contact Us</span>
                      </Link>
                      <Link to="/">
                        <span>My Account</span>
                      </Link>
                      <Link to="/">
                        <span>Store Locator</span>
                      </Link>
                      <Link to="/">
                        <span>About Us</span>
                      </Link>
                    </Company>
                    <Company>
                      <h2>Our Policy</h2>
                      <Link to="/">
                        <span>Terms & Conditions</span>
                      </Link>
                      <Link to="/">
                        <span>Supplier terms</span>
                      </Link>
                      <Link to="/">
                        <span>Discounts</span>
                      </Link>
                      <Link to="/">
                        <span>Careers</span>
                      </Link>
                    </Company>
                  </Info>
                </Details>

                <Contact>
                  <li>
                    <i>
                      <FaMapMarkerAlt />
                    </i>
                    <Content>
                      <h1>Company Address</h1>
                      <p>45, Kawlar, New Airport, Dhaka 1229</p>
                      <p>Bangladesh</p>
                    </Content>
                  </li>
                  <li>
                    <i>
                      <FaPhone />
                    </i>
                    <Content>
                      <h1>Contact Us</h1>
                      <p>(+880) 1790 405744</p>
                    </Content>
                  </li>
                  <li>
                    <i>
                      <FaEnvelope />
                    </i>
                    <Content>
                      <h1>Social Enquiries</h1>
                      <p>khan.anupam.shafi@northsouth.edu</p>
                    </Content>
                  </li>
                </Contact>
              </Row>
            </FooterContent>
            <Newsletter>
              <Header>
                <h3>PharmEasy</h3>
                <h2>Newsletter</h2>
              </Header>
              <p>
                Subscribe to our newsletter and buy profitably to know about
                promotions
              </p>
              <Form>
                <div>
                  <Input
                    id="NewsletterForm"
                    type="email"
                    placeholder="Your Email"
                  />
                </div>
                <Button type="submit">Submit</Button>
              </Form>
              <h3>Follow Us</h3>
              <SocialMedia>
                <li>
                  <a href="https://www.facebook.com/">
                    <FaFacebookSquare />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/">
                    <FaTwitterSquare />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/">
                    <FaYoutube />
                  </a>
                </li>
              </SocialMedia>
            </Newsletter>
          </FooterContainer>
        </Wrapper>
      </Container>
      <FooterBottom />
    </>
  );
};

export default Footer;
const Button = styled.button`
  cursor: pointer;
  font: inherit;
  text-decoration: none;
  border: 0;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 18px;
  border-radius: 5px;
  background-color: #f0a945;
  box-shadow: none;
  color: #fff;
  appearance: none;
  font-size: 14px;
  letter-spacing: 0.5px;
  font-weight: 400;
  text-transform: uppercase;
  padding: 10px 20px;
  line-height: 20px;
`;

const Container = styled.div`
  background-color: #f9fcfc;
  border-top: 1px solid #eee;
`;
const Wrapper = styled.div`
  max-width: 1296px;
  margin: 0 auto;

  padding-left: 15px;
  padding-right: 15px;
`;
const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;

  @media (max-width: 980px) {
    flex-direction: column;
  }
`;
const FooterContent = styled.div`
  flex: 3;
  align-items: center;
  overflow: hidden;

  padding: 25px 20px;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 980px) {
    flex-direction: column;
  }
`;
const Logo = styled.div`
  /* display: block; */

  overflow: hidden;
  margin-bottom: 25px;
  img {
    max-width: 100%;
    vertical-align: middle;
    margin-bottom: 15px;
  }
  p {
    font-size: 1rem;
    /* font-family: "Roboto", sans-serif; */
    font-weight: light;
    line-height: 1.25;
    margin-bottom: 6px;
  }
  span {
    font-family: "Roboto", sans-serif;
    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: 0.012rem;
    font-style: italic;
  }
`;
const Details = styled.div`
  /* flex: 1 0 auto; */
  flex: 2;
  @media (max-width: 980px) {
    text-align: center;
  }
`;

const Contact = styled.div`
  flex: 1.5;

  list-style: none;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.5px;
    padding: 35px 30px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    font-weight: 400;
    margin: 0;
    i {
      color: #787878;
      font-size: 28px;
      text-align: center;
      vertical-align: middle;
      display: inline-block;
    }
  }
`;
const Content = styled.div`
  vertical-align: middle;
  overflow: hidden;
  text-align: left;
  padding-left: 10px;
  width: 100%;
  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    letter-spacing: 0.7px;
    color: #222;
    margin-bottom: 6px;
    font-weight: 500;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: #787878;
    margin-bottom: 0;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Company = styled.div`
  flex: auto;
  span {
    font-size: 15px;
  }
  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
    text-align: left;
    color: #4f585e;
    margin-bottom: 15px;
  }
  a {
    text-decoration: none;
    line-height: 1.5;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    padding: 7px;
    color: #4f585e;
    display: block;
    &:hover {
      text-decoration: underline;
      color: #222;
    }
  }
`;

//newsletter
const Newsletter = styled.div`
  flex: 1.3;
  padding: 60px 40px;
  background-color: #04626c;
  color: #ffffff;
  text-align: center;
  h3 {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    margin: 10px 0 10px;
  }
  p {
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    margin: 10px 0 10px;
  }
`;
const Header = styled.div`
  h3 {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    line-height: 20px;
    margin: 0 0 10px;
    font-weight: 400;
    letter-spacing: 0.5px;
  }
  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 0px;
    font-weight: 700;
    text-transform: unset;
    position: relative;
    margin-bottom: 25px;
    margin-top: 0;
  }
`;

const Form = styled.form`
  max-width: 100%;
  position: relative;
  margin: 20px auto 0;
  div {
    width: 100%;
  }
`;
const Input = styled.input`
  background: rgba(255, 255, 255, 0.1);
  height: 50px;
  padding-right: 15px;
  border: 0;
  /* outline: none; */
  color: #ffffff;
  flex-grow: 1;
  text-align: left;
  padding: 1.5rem;
  appearance: none;
  -webkit-appearance: none;
  border-radius: 5px;
  font-size: 1.4rem;
  font-family: inherit;
  width: 100%;
  border-width: 0;
  box-shadow: none;
  letter-spacing: 0.04rem;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: wheat;
  }
  &:focus {
    outline: 1px solid lightgoldenrodyellow;
    border: none;
    border-width: 0;
    box-shadow: none;
  }
`;

const SocialMedia = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding-top: 2px;
  li {
    padding-right: 5px;
    a {
      text-decoration: none;
      font-size: 28px;
      color: inherit;
      transition: 0.3s ease-in;
      &:hover {
        color: #f0a945;
      }
    }
  }
`;
