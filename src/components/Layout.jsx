import React from "react";
import Navbar from "./Navbar";
import BannerLeft from "./BannerLeft";
import Content from "./Content";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <BannerLeft />
      <Content />
      <Footer />
    </>
  );
}