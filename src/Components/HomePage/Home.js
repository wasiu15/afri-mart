import React, { Fragment } from "react";
import Footer from "../General/Footer";
import Header from "../General/Header";
import HomeSection from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Menu from "./Components/Menu";
import AppStore from "./Components/AppStore";
import ContactUs from "./Components/ContactUs";

const Home = () => {
  return (
    <Fragment>
      {ScrollUp()}
      <Header />
      <main className="l-main">
        <HomeSection />
        <About />
        <Services />
        <Menu />
        <AppStore />
        <ContactUs />
      </main>
      <Footer />
    </Fragment>
  );
};

function ScrollUp() {
  // <!--========== SCROLL TOP ==========-->
  return (
    <a href="#" className="scrolltop" id="scroll-top">
      <i className="bx bx-chevron-up scrolltop__icon"></i>
    </a>
  );
}

export default Home;
