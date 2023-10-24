import React from "react";
import { ServiceCard } from "../components";

const ServiceCount = () => {
  return(
    <div className=" w-full py-6 lg:py-24 mt-12 flex items-center justify-center flex-wrap gap-8">
      <ServiceCard count={'1M+'} text={'happy students'}/>
      <ServiceCard count={'1M+'} text={'happy students'}/>
      <ServiceCard count={'1M+'} text={'happy students'}/>
      <ServiceCard count={'1M+'} text={'happy students'}/>
    </div>
  )
};

export default ServiceCount;
