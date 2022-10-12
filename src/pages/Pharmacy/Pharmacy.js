import React from "react";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import Navbar from "../../components/Navbar/Navbar";
import TopHeader from "../../components/TopHeader/TopHeader";
import PageBanner from "../../components/PageBanner/PageBanner";
import Products from "../../components/Products/Products";
import Footer from "../../components/Footer/Footer";
import Announcement from "../../components/Announcement/Announcement";

const Pharmacy = () => {
  return (
    <>
      <TopHeader />
      <HeaderMain />
      <Navbar />
      <PageBanner />
      <Products />
      <Announcement />
      <Footer />
    </>
  );
};

export default Pharmacy;
