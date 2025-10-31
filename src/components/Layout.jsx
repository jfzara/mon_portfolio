import React from "react";
import Navbar from "./Navbar";
import BannerLeft from "./BannerLeft";
import Content from "./Content";
import Footer from "./Footer";
import { PageGrid, BannerArea, MainArea, FooterArea, NavArea } from "./Layout.styles";

export default function Layout() {
  return (
    <PageGrid>
      <BannerArea>
        <BannerLeft />
      </BannerArea>

      <NavArea>
        <Navbar />
      </NavArea>

      <MainArea id="main-content">
        <Content />
      </MainArea>

      <FooterArea>
        <Footer />
      </FooterArea>
    </PageGrid>
  );
}