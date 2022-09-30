import React from "react";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import Navbar from "../../components/Navbar/Navbar";
import TopHeader from "../../components/TopHeader/TopHeader";
import PageBanner from "../../components/PageBanner/PageBanner";
import Products from "../../components/Products/Products";
import Footer from "../../components/Footer/Footer";

const Pharmacy = () => {
  return (
    <>
      <TopHeader />
      <HeaderMain />
      <Navbar />
      <PageBanner />
      <Products />
      <Footer />
    </>
  );
};

export default Pharmacy;
