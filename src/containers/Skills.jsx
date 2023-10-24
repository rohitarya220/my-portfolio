import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";
import { SkillCard } from "../components";

const Skills = () => {
  return(
    <section id="skills" className=" flex items-center justify-center flex-col gap-8 ">
       {/* title */}
      <div className="w-full flex items-center justify-center py-10">
        <motion.div 
          className="  whitespace-nowrap flex items-center justify-around w-52"
          initial={{ opacity: 0, width: 0}}
          animate={{ opacity: 1, width: 200}}
          exit={{ opacity: 0, width: 0}}
          transition={{ delay: 0.4}}
        >
          <img src={Leaf1} className=" w-6 h-auto object-contain" />
             <p className=" text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Skills & Work Experience</p>
          <img src={Leaf2} className=" w-6 h-auto object-contain" />

        </motion.div>
      </div>


      {/* main content */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
       
          {/* content section */}

          <div className="w-full  flex flex-col gap-4 items-start justify-start">
            <p className=" md:text-4xl text-center m-auto text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">My Skills & Work Experience</p>
            <p className="text-texlight text-base trackiw text-justify">I'm a frontend developer with a passion for making the web an amazing place. I'm like a digital artist and architect, and my toolkit includes HTML, CSS, JavaScript, Tailwind CSS, React.js, Firebase, and Material-UI. These are the special tools that allow me to create websites and apps that not only work well but also look great and feel smooth to use.</p>
            <p className="text-texlight text-base trackiw text-justify">I've recently completed a three-month internship where I dived deep into the world of web development. During this time, I was part of a fantastic team, working on real projects. This experience was like a hands-on school where I not only improved my technical skills but also learned to solve problems and work together with a team. Additionally, I had another one-month internship, which added to my practical knowledge and showed me the ropes of the professional web development world.</p>
            <p className="text-texlight text-base trackiw text-justify"> In this portfolio, you'll find the websites and apps I've created. I'm focused on making them not only functional but also beautiful and user-friendly. It's like turning a blank screen into a digital masterpiece. I'm excited to take on more projects, turn creative ideas into fantastic web experiences, and make the internet a more exciting and engaging place. So, please explore my work, and let's embark on a journey to create web experiences that people will love to use!</p>
          </div>


             {/* image section */}
             <div className="w-full flex flex-col items-center justify-center  gap-4 ">
                 <SkillCard skill={'React js'} percentage={'65%'} color={'#EA4C41'} move={true}  />
                 <SkillCard skill={'Tailwind'} percentage={'95%'} color={'#52D0E1'}  />
                 <SkillCard skill={'JavaScript'} percentage={'80%'} color={'#F4B251'} move={true} />
                 <SkillCard skill={'Css'} percentage={'80%'} color={'#0B5076'}  />
                 <SkillCard skill={'Html 5'} percentage={'95%'} color={'#BF2060'} move={true} />
                 <SkillCard skill={'FireBase'} percentage={'90%'} color={'#80959F'}  />
                 <SkillCard skill={'Material UI'} percentage={'85%'} color={'#64AE66'} move={true}  />
                
            </div>

       </div>

    </section>
  )
};

export default Skills;
