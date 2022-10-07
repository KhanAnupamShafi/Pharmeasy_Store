import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styled from "styled-components";

import { devices } from "../../responsive";
import image1 from "../../assets/slides/image-1.png";
import image2 from "../../assets/slides/image-2.png";
import image3 from "../../assets/slides/image-3.png";
import Announcement from "../Announcement/Announcement";
import { Fade } from "react-awesome-reveal";

const HeroBanner = () => {
  return (
    <>
      <Container>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <SliderWrapper>
              <SliderContent>
                <Fade direction={"up"} triggerOnce={false}>
                  <h3> Get 10% Off On Medicine</h3>
                  <SliderTitle>
                    <h1>Pharmacy Kit</h1>
                  </SliderTitle>
                </Fade>
                <Fade direction={"right"}>
                  <SliderDesc>
                    Taking care of your NHS prescriptions. Order your medicine,
                    get reminders and have it delivered for free. To your home,
                    your family or friends.
                  </SliderDesc>
                </Fade>
                <ShopButton>Shop Now</ShopButton>
              </SliderContent>

              <SliderImage src={image1} alt="Slider Image" />
            </SliderWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <SliderWrapper>
              <SliderContent>
                <Fade direction={"up"} triggerOnce={false}>
                  <h3> Get 10% Off On Medicine</h3>
                  <SliderTitle>
                    <h1>Personal Care</h1>
                  </SliderTitle>
                </Fade>
                <Fade direction={"right"}>
                  <SliderDesc>
                    Taking care of your NHS prescriptions. Order your medicine,
                    get reminders and have it delivered for free. To your home,
                    your family or friends.
                  </SliderDesc>
                </Fade>
                <ShopButton>Shop Now</ShopButton>
              </SliderContent>
              <SliderImage src={image2} alt="Slider Image" />
            </SliderWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <SliderWrapper>
              <SliderContent>
                <Fade direction={"up"} triggerOnce={false}>
                  <h3> Get 10% Off On Medicine</h3>
                  <SliderTitle>
                    <h1>Healthcare Devices</h1>
                  </SliderTitle>
                </Fade>
                <Fade direction={"right"}>
                  <SliderDesc>
                    Taking care of your NHS prescriptions. Order your medicine,
                    get reminders and have it delivered for free. To your home,
                    your family or friends.
                  </SliderDesc>
                </Fade>
                <ShopButton>Shop Now</ShopButton>
              </SliderContent>
              <SliderImage src={image3} alt="Slider Image" />
            </SliderWrapper>
          </SwiperSlide>
        </Swiper>
      </Container>
      <Announcement />
    </>
  );
};

export default HeroBanner;

const Container = styled.div`
  height: auto;
`;

const SliderWrapper = styled.div`
  height: 75vh;
  position: relative;

  @media ${devices.mobile} {
    display: flex;
    height: 55vh;
  }
  @media ${devices.laptop} {
    display: flex;
    height: 65vh;
  }
`;
const SliderImage = styled.img`
  height: 95%;
  width: 100%;

  /* object-fit: cover; */
  @media ${devices.mobile} {
    object-fit: cover;
  }
  @media ${devices.laptop} {
    height: 95%;
    object-fit: cover;
  }
`;
const SliderContent = styled.div`
  width: 30%;
  position: absolute;
  top: 50%;
  left: 22%;
  transform: translate(-50%, -50%);

  h3 {
    color: #04626c;
    font-size: 1.8rem;
    line-height: 22px;
    margin-bottom: 20px;
    letter-spacing: 0.5px;
    @media ${devices.laptop} {
      font-size: 1.2rem;
      margin-bottom: 10px;
    }
  }
  @media ${devices.mobile} {
    width: 80%;
    left: 50%;
  }
  @media ${devices.laptop} {
    /* width: 80%; */
    left: 25%;
  }
`;
const SliderTitle = styled.div`
  h1 {
    font-size: 5rem;
    text-transform: unset;
    line-height: 70px;
    margin-bottom: 25px;
    letter-spacing: 0.8px;
    font-weight: 700;
    @media ${devices.mobile} {
      font-size: 1.5rem;
      line-height: 30px;
    }
    @media ${devices.laptop} {
      font-size: 2.8rem;
      line-height: 45px;
      margin-bottom: 20px;
    }
  }
`;

const SliderDesc = styled.div`
  color: #666666;
  font-size: 1rem;
  line-height: 24px;
  margin-bottom: 50px;
  letter-spacing: 0.5px;
  font-weight: 400;
  @media ${devices.mobile} {
    font-size: 0.9rem;
    line-height: 15px;
  }
`;
const ShopButton = styled.div`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 0;
  border-radius: 5px;
  background-color: #f0a945;
  box-shadow: none;
  color: wheat;
  appearance: none;
  font-size: 14px;
  letter-spacing: 0.5px;
  font-weight: 400;
  text-transform: uppercase;
  padding: 10px 20px;
  line-height: 20px;
  transition: all 0.5s;
  outline: none;
  &:hover {
    background-color: #04626c;
  }
`;
