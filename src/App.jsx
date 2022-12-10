import React from "react";
import Header from "./component/Header/Header";
import About from "./component/About/About";
import Footer from "./component/footer/Footer";
import Contact from "./component/contact/Contact";
import Experience from "./component/experience/Expercience";
import Nav from "./component/Nav/Nav";
import Services from "./component/services/Services";
import Testimonials from "./component/testimonials/Testimonials";
import Portfolio from "./component/portfolio/Portfolio";
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
