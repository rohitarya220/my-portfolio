import React from "react";
import { ServiceCard } from "../components";

const ServiceCount = () => {
  return(
    <div className=" w-full py-6 lg:py-24 mt-12 flex items-center justify-center flex-wrap gap-8">
      <ServiceCard count={'10+'} text={'React Projects'}/>
      <ServiceCard count={'15+'} text={'JavaScript Projects'}/>
      <ServiceCard count={'10+'} text={'Tailwind Projects'}/>
      <ServiceCard count={'20+'} text={'HTML, CSS Projects'}/>
    </div>
  )
};

export default ServiceCount;
