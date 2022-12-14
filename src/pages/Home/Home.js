import React from "react";
// import styled from "styled-components";
import Featured from "../../components/Featured/Featured";
import Footer from "../../components/Footer/Footer";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Navbar from "../../components/Navbar/Navbar";
import StoryBlock from "../../components/StoryBlock/StoryBlock";
import ScrollButton from "../../components/StyledComponent/ScrollButton";
import TopHeader from "../../components/TopHeader/TopHeader";

const Home = () => {
  return (
    <>
      <TopHeader />
      <HeaderMain />
      <Navbar />
      <HeroBanner />
      <Featured />
      <StoryBlock />
      <Footer />
      <ScrollButton />
    </>
  );
};

export default Home;

// const Container = styled.div`
//   overflow-x: hidden;
// `;
