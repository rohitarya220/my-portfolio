import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hero } from "../assets";
import {HeroTypeWritter, HomeSocialLinks} from '../components'
import { Socials } from "../utils/helper";
import { resume } from "../assets";


const Home = () => {
  return(
    <section className="flex items-center justify-center flex-col gap-12 relative" id="home">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">


          {/* content section */}
             <div className="w-full h-full flex flex-col items-center lg:items-start justify-center gap-4">
               <h2 className="text-3xl text-center lg:text-4xl text-texlight">
                   Hello, It's me
                  <span className=" block tracking-wider text-5xl lg:text-6xl mt-4 text-white">{' '} Rohit Modi </span>
               </h2>

                {/* type writer */}

                <h2 className=" text-2xl lg:text-4xl text-texlight md:mt-2"> And I'm
                   <HeroTypeWritter words={[" a Developer...", " a Freelancer..."]} speed={100} />
                </h2>


                <p className=" text-base text-texlight md:mt-8 text-center  lg:text-start md:p-0"> I'm an aspiring <span className=" font-bold text-white">frontend developer</span> with a passion for creating user-friendly web experiences. Self-learner in web development, I'm excited to dive into coding, design, and innovation to bring creative ideas to life. Explore my portfolio to see my work, and let's start this web development journey together.</p>

                 {/* social media links */}
                 <div className="flex items-center justify-center gap-8 md:gap-12 mt-2 md:mt-10">
                   <AnimatePresence>
                    {Socials &&
                     Socials.map((item, index) => ( 
                      <HomeSocialLinks key={index} data={item} index={index}   />
                     
                      ))}
                   </AnimatePresence>                
                 </div>

                  {/* hire me button */}
                  <a 
                   href={resume}
                   style={{boxShadow: " inset 0px 0px 10px rgba(255,255,255,0.3) "}}
                   className=" md:ml-32 mt-7 border border-[rgba(255,255,255,0.3)] rounded-xl px-8 py-3 active:95 group hover:border-primary "
                  >
                    <p className="  text-texlight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r  group-hover:from-primary  group-hover:to-secondary ">
                       hire me
                    </p>
                  </a>
           </div>





          {/* hero image */}
           <div className="  sm:w-[40] md:w-[70vh] h-full flex items-start justify-center mt-8 lg:items-center">
            <motion.img 
              initial={{ y: 0}}
              animate={{y: [-10, 10, -10]}}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
              }}
              src={Hero}
              className="w-auto rounded-full h-auto object-contain"
            />

           
           </div>


        </div>
    </section>
  )
};

export default Home;
