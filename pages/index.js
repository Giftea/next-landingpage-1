import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Banner from "../components/Banner";
import FunFacts from "../components/FunFacts";
import CtaTwo from "../components/CtaTwo";
import CtaThree from "../components/CtaThree";
import Pricing from "../components/Pricing";
import Features from "../components/Features";
import BlogHome from "../components/BlogHome";
import CtaOne from "../components/CtaOne";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Layout pageTitle="Giftea">
      <Header />
      <MobileMenu />
      <Banner />
      <Features />
      <FunFacts />
      <CtaTwo />
      <CtaThree />
      <Pricing />
      <BlogHome />
      <CtaOne />
      <Footer />
    </Layout>
  );
};

export default Home;
