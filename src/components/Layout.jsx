import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        {/* Sections futures : Compétences, Projets, Contact */}
      </main>
      <Footer />
    </>
  );
}