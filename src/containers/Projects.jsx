import React, { useState } from "react";
import { ProjectCard } from "../components";

import { motion, AnimatePresence } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";
import { ProjectsData } from "../utils/helper";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
  return(
    <section id="projects" className=" flex items-center justify-center flex-col gap-7 ">
       {/* title */}
      <div className="w-full flex items-center justify-center py-14">
        <motion.div 
          className=" flex items-center justify-around w-52"
          initial={{ opacity: 0, width: 0}}
          animate={{ opacity: 1, width: 200}}
          exit={{ opacity: 0, width: 0}}
          transition={{ delay: 0.4}}
        >
          <img src={Leaf1} className=" w-6 h-auto object-contain" />
             <p className=" text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</p>
          <img src={Leaf2} className=" w-6 h-auto object-contain" />

        </motion.div>
      </div>


      {/* main content */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4  w-full">
         <AnimatePresence>
           {ProjectsData &&
             ProjectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project}  />
             ))
           }
         </AnimatePresence>
       </div>

    </section>
  )
};



export default Projects;
