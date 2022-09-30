import React from "react";
import {
  BsTwitter,
  BsFacebook,
  BsMessenger,
  BsYoutube,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import styled from "styled-components";

import img from "../../assets/preheader-bg.png";

const TopHeader = () => {
  return (
    <Container>
      <Left>
        <ul>
          <li>
            <a rel="noreferrer" target="_blank" href="https://www.twitter.com">
              <BsTwitter />
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/KhanAnupam.Deep/"
            >
              <BsFacebook />
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.messenger.com"
            >
              <BsMessenger />
            </a>
          </li>
          <li>
            <a rel="noreferrer" target="_blank" href="https://www.youtube.com">
              <BsYoutube />
            </a>
          </li>
        </ul>
      </Left>
      <Right>
        <ul>
          <li>
            Exclusive Offers on Covid Care Equipments
            <a href="/">
              <button>Learn More</button>
            </a>
          </li>

          <li>
            <ContactInfo>
              <HiMail />
              <a href="mailto:deep71.bd@gmail.com">
                <span>Pharmeasy@gmail.com</span>
              </a>
              <Divider />
              <BsFillTelephoneFill />
              <a href="tel:8801790405744">
                <span>(880) 179405744</span>
              </a>
            </ContactInfo>
          </li>
        </ul>
      </Right>
    </Container>
  );
};

export default TopHeader;

const Container = styled.div`
  /* background: #f5f5f0; */
  height: 40px;
  background-color: #005b2e;
  color: #ffffff;
  font-size: 95%;
  margin: 0 auto;
  padding: 2px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url(${img});
  background-position: center center;
  background-size: auto;
  background-repeat: no-repeat;
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  ul {
    display: flex;
    gap: 10px;
    text-decoration: none;
    list-style: none;
    padding: 0 12px;
    li {
      display: block-size;
      a {
        color: #ffffff;
        text-decoration: none;
      }
    }
  }
`;
const Right = styled.div`
  flex: 2;
  justify-content: space-around;
  ul {
    width: 100%;
    display: flex;
    gap: 15px;
    text-decoration: none;
    list-style: none;
    padding: 0 12px;
    align-items: center;
    justify-content: space-around;
  }

  button {
    cursor: pointer;
    padding: 7px 15px;
    font-size: 13px;
    margin-left: 5px;
    border-radius: 5px;
    background-color: #f0a945;
    color: #ffffff;
    letter-spacing: 0.5px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 20px;
    transition: all 0.5s;
    text-decoration: none;
    border: 0;
    &:hover {
      background-color: #fcb450;
      box-shadow: 0 0 5px 2px rgb(255 255 255 / 30%);
    }
  }
`;
const ContactInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  a {
    text-decoration: none;
    color: #ffffff;
  }
`;
const Divider = styled.div`
  border-left: 1px solid #839aa1;
  height: 20px;
  display: inline;
  margin: 0 20px;
  left: 50%;
`;
