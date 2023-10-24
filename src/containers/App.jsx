import React from "react";
import {About, Contact, Footer, Header, Home, ParticlesContainer, Projects, ServiceCount, Skills} from "./";



const App = () => {
  return (
    <div className=" w-full pl-7 pr-5  py-20  ">



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
