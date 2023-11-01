import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf1, Leaf2, d2d, internpe, sparks } from "../assets";


const About = () => {
  return(
    <section id="about" className="md:mr-32 flex items-center justify-center flex-col gap-12 ">
       {/* title */}
      <div className="w-full flex items-center justify-center py-12">
        <motion.div 
          className=" flex items-center justify-around w-52"
          initial={{ opacity: 0, width: 0}}
          animate={{ opacity: 1, width: 200}}
          exit={{ opacity: 0, width: 0}}
          transition={{ delay: 0.4}}
        >
          <img src={Leaf1} className=" w-6 h-auto object-contain" />
             <p className=" text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Certificate</p>
          <img src={Leaf2} className=" w-6 h-auto object-contain" />

        </motion.div>
      </div>


      {/* certificate 1 */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {/* image section */}
            <div className="w-full flex items-center justify-center px- md:px-4 ">
              <div className=" p-[2px] rounded-md bg-gradient-to-br from-primary to-secondary relative ">
                <img src={d2d} className="w-full md:w-96 rounded-md h-auto object-contain" alt="" />
               
              </div>
            </div>
          {/* content section */}

          <div className="w-full  flex flex-col gap-4 items-start justify-start">
            <p className="text-texlight text-base trackiw text-justify">I had a really great experience during my internship at <span className=" font-bold text-white">D2D Founding Team</span>. I was a React developer, which means I learned how to make websites and apps look and work nicely. </p>            
            <p className="text-texlight text-base trackiw text-justify">I worked with a friendly team of people who were like my web-building buddies. They helped me a lot, and we worked on real projects that the company needed. It was like being part of a team in a food order website.</p>            
            <p className="text-texlight text-base trackiw text-justify">This internship was like a big adventure of learning new stuff. I learned how to make websites better, and I also learned about what it's like to work in a real job. It was a really fun and educational experience, and it made me even more excited about creating things on the web</p>            
          </div>

       </div>


      {/* certificate 2*/}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {/* image section */}
            <div className="w-full flex items-center justify-center px- md:px-4 ">
              <div className=" p-[2px] rounded-md bg-gradient-to-br from-primary to-secondary relative ">
                <img src={internpe} className="w-full  rounded-md h-80 object-contain" alt="" />
               
              </div>
            </div>
          {/* content section */}
          <div className="w-full  flex flex-col gap-4 items-start justify-start">
            <p className="text-texlight text-base trackiw text-justify">My one-month internship at Interpe Company was an exciting journey into web development. I worked with HTML, CSS, and JavaScript, the essential tools of the trade.</p>
            <p className="text-texlight text-base trackiw text-justify">During the internship, I learned how HTML structures web content, CSS makes it look appealing, and JavaScript adds functionality. I had hands-on experience creating webpages, enhancing their design, and building interactive features.</p>
            <p className="text-texlight text-base trackiw text-justify">This internship not only expanded my technical skills but also taught me about teamwork and problem-solving. I'm now more enthusiastic and better equipped to explore web development further.</p>
            
          </div>
       </div>



      {/* certificate 3*/}
       {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  //image section
            <div className="w-full flex items-center justify-center px- md:px-4 ">
              <div className=" p-[2px] rounded-md bg-gradient-to-br from-primary to-secondary relative ">
                <img src={sparks} className="w-full md:w-96 rounded-md h-auto object-contain" alt="" />
               
              </div>
            </div>
                   //content section
          <div className="w-full  flex flex-col gap-4 items-start justify-start">
            <p className="text-texlight text-base trackiw text-justify"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet assumenda fugiat omnis hic consequuntur numquam distinctio, id atque, voluptatum doloremque, repellat et suscipit modi voluptatem illum sit voluptas molestiae?</p>           
          </div>
       </div> */}

    </section>
  )
};

export default About;
