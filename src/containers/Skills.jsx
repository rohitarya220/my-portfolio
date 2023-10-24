import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";
import { SkillCard } from "../components";

const Skills = () => {
  return(
    <section id="skills" className=" flex items-center justify-center flex-col gap-8 ">
       {/* title */}
      <div className="w-full flex items-center justify-center py-24">
        <motion.div 
          className=" flex items-center justify-around w-52"
          initial={{ opacity: 0, width: 0}}
          animate={{ opacity: 1, width: 200}}
          exit={{ opacity: 0, width: 0}}
          transition={{ delay: 0.4}}
        >
          <img src={Leaf1} className=" w-6 h-auto object-contain" />
             <p className=" text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Skills</p>
          <img src={Leaf2} className=" w-6 h-auto object-contain" />

        </motion.div>
      </div>


      {/* main content */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
       
          {/* content section */}

          <div className="w-full  flex flex-col gap-4 items-start justify-start">
            <p className=" md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">My Skills & Work Experience</p>
            <p className="text-texlight text-base trackiw text-justify"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet assumenda fugiat omnis hic consequuntur numquam distinctio, id atque, voluptatum doloremque, repellat et suscipit modi voluptatem illum sit voluptas molestiae?</p>
            <p className="text-texlight text-base trackiw text-justify"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet assumenda fugiat omnis hic consequuntur numquam distinctio, id atque, voluptatum doloremque, repellat et suscipit modi voluptatem illum sit voluptas molestiae?</p>
            <p className="text-texlight text-base trackiw text-justify"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet assumenda fugiat omnis hic consequuntur numquam distinctio, id atque, voluptatum doloremque, repellat et suscipit modi voluptatem illum sit voluptas molestiae?</p>
          </div>


             {/* image section */}
             <div className="w-full flex flex-col items-center justify-center  gap-4 ">
                 <SkillCard skill={'HTMl 5'} percentage={'95%'} color={'#ff3f3f'} move={true}  />
                 <SkillCard skill={'HTMl 5'} percentage={'95%'} color={'#ff3f3f'}  />
                 <SkillCard skill={'HTMl 5'} percentage={'95%'} color={'#ff3f3f'} move={true} />
                 <SkillCard skill={'HTMl 5'} percentage={'95%'} color={'#ff3f3f'}  />
                 <SkillCard skill={'HTMl 5'} percentage={'95%'} color={'#ff3f3f'} move={true} />
                 <SkillCard skill={'HTMl 5'} percentage={'95%'} color={'#ff3f3f'}  />
                
            </div>

       </div>

    </section>
  )
};

export default Skills;
