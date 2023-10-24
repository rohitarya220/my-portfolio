import { useState } from "react"
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa6"


const ProjectCard = ({project}) => {
    const [isHovered, setIsHovered] = useState(false)
    return(
      <motion.div
        key={project.id} 
        className=" overflow-hidden cursor-pointer relative rounded-md"
        onMouseEnter={()=> setIsHovered(true)}
        onMouseLeave={()=> setIsHovered(false)}
      >
        <motion.img 
           className="w-96  h-full object-contain rounded-lg" 
           src={project.imgSrc}
           whileHover={{scale: 1.1}}
        />
        {/* project inside text area */}
        {isHovered &&
         (<motion.div className=" absolute inset-0 backdrop-blur-md bg-[rgba(0,0,0,0.6)] flex items-center justify-center flex-col gap-2">
            <p className="text-xl text-primary">{project?.name} </p>
            <p className="text-xs md:text-sm p-3">{project?.about} </p>
            <div className=" flex justify-between items-center gap-40 ">
             {/* github */}
            <a target="_blank" href={project?.gitURL} className="" > 
               <FaGithub className="text-3xl hover:text-primary" />
            </a>
              {/* live demo btn */}
            <a target="_blank" href={project?.hostURL} className=" border border-[rgba(255,255,255,0.3)] rounded-xl px-3 py-1 text-primary active:95 group hover:border-primary " > 
               live demo
            </a>
            </div>  
           
         </motion.div>)
        }
  
      </motion.div>
    )
  }


export default ProjectCard