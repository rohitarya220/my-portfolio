import React from "react";
import {About, Contact, Footer, Header, Home, ParticlesContainer, Projects, ServiceCount, Skills} from "./";
import { AnimatePresence } from "framer-motion";
import { Socials } from "../utils/helper";
import { HomeSocialLinks } from "../components";


const App = () => {
  return (
    <div className=" w-full xl:w-[1600px] py-32 px-4 lg:px-12 pr-4 lg:pr-32">



      {/* particles container */}
        <ParticlesContainer />
      {/* header */}
        <Header />

      {/* home container */}
        <Home />

      {/* services Count cards */}
        <ServiceCount />

      {/* about container */}
        <About />

      {/* skills container */}
        <Skills />

      {/* projects container */}
       <Projects />

      {/* contact container */}
       <Contact />

      {/* footer container */}
       <Footer />

    </div>
  );
};

export default App;
