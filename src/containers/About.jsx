import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";


const About = () => {
  return(
    <section id="about" className=" flex items-center justify-center flex-col gap-12 ">
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
             <p className=" text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">About</p>
          <img src={Leaf2} className=" w-6 h-auto object-contain" />

        </motion.div>
      </div>


      {/* main content */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {/* image section */}
            <div className="w-full flex items-center justify-center px-8 ">
              <div className="w-52 md:w-72 p-[2px] rounded-md bg-gradient-to-br from-primary to-secondary relative ">
                <img src={about} className="w-52 md:w-72 rounded-md h-auto object-contain" alt="" />
                <div className="absolute w-full h-full -top-3 -left-2 bg-gradient-to-br from bg-primary to-secondary rounded-md blur-[5px] -z-10"></div>
              </div>
            </div>


          {/* content section */}

          <div className="w-full  flex flex-col gap-4 items-start justify-start">
            <p className="text-texlight text-base trackiw text-justify"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet assumenda fugiat omnis hic consequuntur numquam distinctio, id atque, voluptatum doloremque, repellat et suscipit modi voluptatem illum sit voluptas molestiae?</p>
            <p className="text-texlight text-base trackiw text-justify"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet assumenda fugiat omnis hic consequuntur numquam distinctio, id atque, voluptatum doloremque, repellat et suscipit modi voluptatem illum sit voluptas molestiae?</p>
            <p className="text-texlight text-base trackiw text-justify"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet assumenda fugiat omnis hic consequuntur numquam distinctio, id atque, voluptatum doloremque, repellat et suscipit modi voluptatem illum sit voluptas molestiae?</p>
          </div>

       </div>

    </section>
  )
};

export default About;
