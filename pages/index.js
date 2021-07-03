import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Banner from "../components/Banner";
import FunFacts from "../components/FunFacts";
import CtaTwo from "../components/CtaTwo";
import CtaThree from "../components/CtaThree";
import Video from "../components/Video";
import Pricing from "../components/Pricing";
import AppShots from "../components/AppShots";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import BlogHome from "../components/BlogHome";
import Clients from "../components/Clients";
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
      {/* <Video /> */}
      {/* <AppShots /> */}
      <Pricing />
      <Testimonials />
      <Clients />
      <BlogHome />
      <CtaOne />
      <Footer />
    </Layout>
  );
};

export default Home;
